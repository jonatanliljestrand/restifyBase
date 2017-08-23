const restifySwagger = require('node-restify-swagger');
const restify = require('restify');

const logger = require('../utils/logger');
const config = require('../config');
const sampleController = require('../controllers/sampleController');

const httpOKMessage = {
  code: 200,
  message: 'OK',
};
const httpInternalMessage = {
  code: 500,
  message: 'Internal Error',
};

exports.createWithBasePath = (basePath) => {
  const server = restify.createServer(config.serverConfiguration);
  let serverInstance = {};

  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.fullResponse());
  server.use(restify.plugins.bodyParser());

  restifySwagger.configure(server, {
    info: {
      description: 'Server API Documentation',
      title: 'Server API Documentation',
    },
    discoveryUrl: {
      url: `${restifySwagger.swaggerPathPrefix}resources.json`,
      versions: ['1.0.0'],
    },
    basePath: config.urls.swagger + basePath,
    allowMethodInModelNames: true,
  });

  server.get({
    url: '/ping',
    versions: ['1.0.0'],
    swagger: {
      summary: 'This is a summary of the endpoint',
      docPath: 'Health',
      responseMessages: [httpOKMessage, httpInternalMessage],
      httpMethod: 'GET',
    },
    validation: {},
  }, (req, res, next) => {
    res.send('pong');
    return next();
  });

  server.get({
    url: '/exampleendpoint/getSample/:variable1/:variable2',
    versions: ['1.0.0'],
    swagger: {
      summary: 'Example endpoints for general server.',
      docPath: 'ExampleEndpoints',
      responseMessages: [httpOKMessage, httpInternalMessage],
      httpMethod: 'GET',
    },
    validation: {
      'header-parameter': {
        description: 'header parameter description',
        isRequired: false,
        isAlpha: true,
        scope: 'header',
      },
      variable3: {
        description: 'Test variable 3',
        scope: 'body',
        isRequired: true,
        isAlpha: true,
      },
    },
  }, sampleController.getSample);

  function initiate(port, callback) {
    restifySwagger.loadRestifyRoutes();
    serverInstance = server.listen(port, () => {
      if (callback) {
        callback();
      }
    });
  }

  function stop(callback) {
    serverInstance.close(() => {
      logger.log('Stopped listen');

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
