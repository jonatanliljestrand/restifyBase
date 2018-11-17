// const sampleModule = require('../lib/sampleModule');

exports.postSample = (req, res, next) => {
  res.send('returnObject');
  return next();
};
