const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORT = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.info("Servidor inicializado na porta: " + PORT);
});

routes(app);
