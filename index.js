const server = require('./lib/server');

const serverInstance = server.createWithBasePath('/api');
const logger = require('./utils/logger');
const config = require('./config.json');

const listenPort = config.listenPort;

serverInstance.initiate(listenPort, () => {
  logger.log(`Started to listen: ${listenPort}`);
});
