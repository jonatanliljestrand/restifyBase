// eslint-disable-next-line no-unused-vars
import { RequestHandlerType, RequestHandler } from 'restify';

const postSample:RequestHandler = (req, res, next) => {
    res.send('returnObject');
    return next();
}

export default postSample;
