exports.ping = (req, res, next) => {
  res.send('pong');
  return next();
};
