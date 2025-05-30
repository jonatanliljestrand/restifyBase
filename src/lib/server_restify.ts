// import restify from 'restify';
// import { postSample, getSample } from '../controllers/sampleController';
// import ping from '../controllers/pingController';

// import log from './utils/logger';

// export default function createServer(serverConfiguration: any) {
//     const server = restify.createServer(serverConfiguration);
//     let serverInstance: any = {};

//     server.use(restify.plugins.queryParser());
//     server.use(restify.plugins.fullResponse());
//     server.use(restify.plugins.bodyParser());

//     server.get('/ping', ping);
//     server.get('/getSample', getSample);
//     server.post('/postSample/:variable1/:variable2', postSample);

//     function initiate(callback: (() => any) | null = null) {
//         serverInstance = server.listen(serverConfiguration.listenPort, () => {
//             log(`Started to listen: ${serverConfiguration.listenPort}`);
//             if (callback) {
//                 callback();
//             }
//         });
//     }

//     function stop(callback: (() => any) | null = null) {
//         serverInstance.close(() => {
//             log('Service stopped');

//             if (callback) {
//                 callback();
//             }
//         });
//     }

//     return {
//         initiate,
//         stop,
//     };
// }
