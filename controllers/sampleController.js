// const sampleModule = require('../lib/sampleModule');

exports.postSample = (req, res, next) => {
  /*  const returnObject = sampleModule.sampleFunction(req, {
    parameters: req.params,
    body: req.body,
  }); */

  res.send('returnObject');
  return next();
};
