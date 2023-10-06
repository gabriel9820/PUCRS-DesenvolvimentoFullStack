const sequenceController = require("../controllers/sequence.controller");

module.exports = (app) => {
  app.post("/sequence", sequenceController.post);
  app.put("/sequence/:id", sequenceController.put);
  app.delete("/sequence/:id", sequenceController.delete);
  app.get("/sequence", sequenceController.get);
  app.get("/sequence/:id", sequenceController.getById);
};
