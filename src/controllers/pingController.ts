// eslint-disable-next-line no-unused-vars
import { RequestHandlerType } from 'restify';

const ping:RequestHandlerType = (_, res, next) => {
    res.send('pong');
    return next();
};

export default ping;
