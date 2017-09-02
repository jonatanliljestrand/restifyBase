const serverInstance = require('./lib/server').create();
const logger = require('./utils/logger');
const listenPort = require('./config.json').listenPort;

serverInstance.initiate(listenPort);
