const restify = require('restify');

const logger = require('../utils/logger');
const config = require('../config');
const sampleController = require('../controllers/sampleController');

exports.create = () => {
  const server = restify.createServer(config.serverConfiguration);
  let serverInstance = {};

  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.fullResponse());
  server.use(restify.plugins.bodyParser());

  server.get('/ping', (req, res, next) => {
    res.send('pong');
    return next();
  });

  server.post('/getSample/:variable1/:variable2', sampleController.getSample);

  function initiate(port) {
    serverInstance = server.listen(port, () => {
      logger.log(`Started to listen: ${port}`);      
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
