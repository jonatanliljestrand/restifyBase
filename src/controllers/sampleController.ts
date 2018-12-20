// eslint-disable-next-line no-unused-vars
import { RequestHandlerType } from 'restify';
import errors from 'restify-errors';
import getGoogleSample from '../lib/sampleModule';

const getSample:RequestHandlerType = (_, res, next) => {
    getGoogleSample()
        .then((response) => {
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(response),
                'Content-Type': 'text/html',
            });
            res.write(response);
            res.send(response);
        })
        .catch(() => {
            const err = new errors.InternalServerError('Failed to send request.');
            next(err);
        });
};

const postSample:RequestHandlerType = (_, res, next) => {
    res.send('returnObject');
    return next();
};

export { getSample, postSample };
