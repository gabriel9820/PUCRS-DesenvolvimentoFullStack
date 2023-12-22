const express = require("express");

const HOSTNAME = "127.0.0.1";
const PORT = 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("Express server");
});

app.get("/rota/:numRota", (req, res) => {
  const numRota = req.params.numRota;

  res.send(`Rota: ${numRota}`);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening at http://${HOSTNAME}:${PORT}`);
});
