// // eslint-disable-next-line no-unused-vars
// import { FastifyRequest, FastifyReply } from 'fastify';
// import getGoogleSample from '../lib/sampleModule';

// const getSample = async (_: FastifyRequest, res: FastifyReply): Promise<void> => {
//     getGoogleSample()
//         .then((response) => {
//             res.writeHead(200, {
//                 'Content-Length': Buffer.byteLength(response),
//                 'Content-Type': 'text/html',
//             });
//             res.write(response);
//             res.send(response);
//         })
//         .catch(() => {
//             const err = new errors.InternalServerError('Failed to send request.');
//             res.writeHead(500, {
//                 'Content-Length': Buffer.byteLength(err.message),
//                 'Content-Type': 'text/html',
//             });
//             res.write(err.message);
//             res.send(err);
//         });
// };

// const postSample = async (_: FastifyRequest, res: FastifyReply): Promise<void> => {
//     res.send('returnObject');
// };

// export { getSample, postSample };
