const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");

const postcardsPath = "./postcards.json";
const MONGO_URL = "mongodb://localhost:27017/";
const DB_NAME = "postcards_db";
const COLLECTION_NAME = "postcards";

async function getAll(res) {
  const client = new MongoClient(MONGO_URL);

  try {
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    const postcards = await collection.find().toArray();

    // res.json(postcards);
    res.render("get-all-postcards", { title: "Listagem", postcards });
  } catch (error) {
    console.error(err);
    return res.status(500).json({ error: "Failed to read postcards data." });
  } finally {
    await client.close();
  }

  // fs.readFile(postcardsPath, "utf8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).json({ error: "Failed to read postcards data." });
  //   }

  //   const postcards = JSON.parse(data);
  //   res.json(postcards);
  // });
}

function getById(req, res) {
  const postId = req.params.id;

  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((post) => post.id === postId);

    if (!postcard) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    res.json(postcard);
  });
}

async function create(req, res) {
  const client = new MongoClient(MONGO_URL);

  try {
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const { name, cidade, pais, descricao, imageUrl } = req.body;
    //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens
    const newPostcard = {
      id: uuidv4(),
      name,
      cidade,
      pais,
      descricao,
      imageUrl,
    };

    const result = await collection.insertOne(newPostcard);
    newPostcard.id = result.insertedId;

    res.status(201).json(newPostcard);
  } catch (error) {
    console.error(err);
    return res.status(500).json({ error: "Failed add new postcard." });
  } finally {
    await client.close();
  }

  // fs.readFile(postcardsPath, "utf8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).json({ error: "Failed to read postcards data." });
  //   }

  //   const postcards = JSON.parse(data);
  //   postcards.push(newPostcard);

  //   fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).json({ error: "Failed to add new postcard." });
  //     }

  //     res.status(201).json(newPostcard);
  //   });
  // });
}

function update(req, res) {
  const { id } = req.params;
  const { name, cidade, pais, descricao, imageUrl } = req.body;

  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((item) => item.id === id);

    if (!postcard) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    postcard.name = name;
    postcard.cidade = cidade;
    postcard.pais = pais;
    postcard.descricao = descricao;
    postcard.imageUrl = imageUrl;

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update postcard." });
      }

      res.json(postcard);
    });
  });
}

function remove(req, res) {
  const { id } = req.params;

  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    postcards = postcards.filter((item) => item.id !== id);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete postcard." });
      }

      res.status(204).end();
    });
  });
}

module.exports = { getAll, getById, create, update, remove };
