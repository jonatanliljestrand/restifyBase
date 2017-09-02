
exports.getSample = (req, res, next) => {
  const returnObject = {
    parameters: req.params,
    body: req.body,
  };

  res.send(returnObject);
  return next();
};
