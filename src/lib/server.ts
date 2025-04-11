import Fastify from 'fastify';
// import { postSample, getSample } from '../controllers/sampleController';
import pingHandler from '../controllers/pingController';
import log from './utils/logger';

export default function createServer(serverConfiguration: any) {
    // const fastify = Fastify({ logger: true });
    const server = Fastify({
        logger: { level: 'info' },
        ignoreTrailingSlash: true,
        bodyLimit: 2 * 1024 * 1024,
        caseSensitive: false,
        trustProxy: true,
        connectionTimeout: 5000,
    });

    server.get('/ping', pingHandler);
    // server.get('/getSample', getSample);
    // server.post('/postSample/:variable1/:variable2', postSample);

    // Function to start the server
    async function initiate(callback: (() => any) | null = null) {
        try {
            await server.listen({ port: serverConfiguration.listenPort });
            log(`Server is running at port: ${serverConfiguration.listenPort}`);
            if (callback) {
                callback();
            }
        } catch (err) {
            server.log.error(err);
            process.exit(1);
        }
    };

    // Function to stop the server
    async function stop(callback: (() => any) | null = null) {
        try {
            await server.close();
            log('Service stopped');
            if (callback) {
                callback();
            }
        } catch (err) {
            server.log.error(err);
        }
    }
    
    return {
        initiate,
        stop,
    }
}