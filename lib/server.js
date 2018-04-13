const restify = require('restify');
const sampleController = require('../controllers/sampleController');
const pingController = require('../controllers/pingController');

const logger = require('../lib/utils/logger');
const config = require('../config');

exports.create = () => {
  const server = restify.createServer(config.serverConfiguration);
  let serverInstance = {};

  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.fullResponse());
  server.use(restify.plugins.bodyParser());

  server.get('/ping', pingController.ping);
  server.post('/postSample/:variable1/:variable2', sampleController.postSample);

  function initiate(port, callback) {
    serverInstance = server.listen(port, () => {
      logger.log(`Started to listen: ${port}`);
      if (callback) {
        callback();
      }
    });
  }

  function stop(callback) {
    serverInstance.close(() => {
      logger.log('Service stopped');

      if (callback) {
        callback();
      }
    });
  }

  return {
    initiate,
    stop,
  };
};
