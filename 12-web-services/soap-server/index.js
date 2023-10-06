const soap = require("soap");
const express = require("express");
const fs = require("fs");

const app = express();

const myService = {
  ws: {
    calc: {
      somar: (args) => {
        const n = 1 * args.a + 1 * args.b;
        return { sumres: n };
      },

      multiplicar: (args) => {
        const n = args.a * args.b;
        return { mulres: n };
      },
    },
  },
};

const xml = fs.readFileSync("wscalc.wsdl", "utf-8");

app.listen(8001, () => {
  soap.listen(app, "/wscalc", myService, xml, () => {
    console.log("Servidor Inicializado");
  });
});
