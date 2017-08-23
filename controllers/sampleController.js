
exports.getSample = (req, res, next) => {
  const sendString = `${req.params}`;
  res.send(sendString);
  return next();
};
