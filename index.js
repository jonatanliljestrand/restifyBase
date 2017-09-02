const serverInstance = require('./lib/server').create();
const listenPort = require('./config.json').listenPort;

serverInstance.initiate(listenPort);
