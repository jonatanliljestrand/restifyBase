// const externalController = require('./externalHttpController');

exports.sampleFunction = (req, data) => {
  const returnObject = data;

  /* externalController.getSample(req).then((body) => {
    console.log(body); */
  returnObject.extraData = 'body';
  return returnObject;
//  });
};
