// import externalController from './externalHttpController';

export default function sampleFunction(req, data) {
    const returnObject = data;

    /* externalController.getSample(req).then((body) => {
    console.log(body); */
    returnObject.extraData = 'body';
    return returnObject;
//  });
}
