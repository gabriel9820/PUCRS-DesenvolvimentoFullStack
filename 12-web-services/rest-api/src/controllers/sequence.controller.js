exports.post = (req, res, next) => {
  res.status(201).send("Rota POST");
};

exports.put = (req, res, next) => {
  const id = req.body.id;
  res.status(200).send("Rota PUT com ID: " + id);
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  res.status(200).send("Rota DELETE com ID: " + id);
};

exports.get = (req, res, next) => {
  res.status(200).send("Rota GET");
};

exports.getById = (req, res, next) => {
  const id = req.params.id;
  res.status(200).send("Rota GET com ID: " + id);
};
