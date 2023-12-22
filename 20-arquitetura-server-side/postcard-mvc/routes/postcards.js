var express = require("express");
var router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/postcards");

// Rota GET para obter todos os Postcards
router.get("/", async (req, res) => {
  getAll(res);
});

// Rota GET para obter um único Postcard pelo ID
router.get("/:id", (req, res) => {
  getById(req, res);
});

// Rota POST para adicionar um novo Postcard
router.post("/", (req, res) => {
  create(req, res);
});

router.put("/:id", (req, res) => {
  update(req, res);
});

router.delete("/:id", (req, res) => {
  remove(req, res);
});

module.exports = router;
