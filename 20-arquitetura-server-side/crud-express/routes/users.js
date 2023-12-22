var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Lista todos os Usuários");
});

router.get("/:id", function (req, res, next) {
  const id = req.params.id;

  res.send("Busca o Usuário ID: " + id);
});

router.post("/", function (req, res, next) {
  const body = req.body;

  res.send("Salva um Usuário");
});

router.put("/:id", function (req, res, next) {
  const id = req.params.id;
  const body = req.body;

  res.send("Atualiza o Usuário ID: " + id);
});

router.delete("/:id", function (req, res, next) {
  const id = req.params.id;

  res.send("Delete o Usuário ID: " + id);
});

module.exports = router;
