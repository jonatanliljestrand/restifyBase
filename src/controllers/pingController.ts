// eslint-disable-next-line no-unused-vars
import { RequestHandlerType } from 'restify';

const ping:RequestHandlerType = (req, res, next) => {
    res.send('pong');
    return next();
};

export default ping;
