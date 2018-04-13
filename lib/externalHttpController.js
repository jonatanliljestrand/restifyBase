const Q = require('q');
const restify = require('restify');
const config = require('../config.json');
const createError = require('./utils/logger').createError;

function restifyClient(headers) {
  const client = restify.createJsonClient({
    url: config.urls.sampleUrl,
    headers,
  });
  return client;
}

function responseHandler(path, method, deferred) {
  return (error, req, res) => {
    if (res.statusCode === 200) {
      deferred.resolve(JSON.parse(res.body));
    } else if (res.statusCode === 204) {
      deferred.resolve();
    } else {
      deferred.reject(createError(res.statusCode, error));
    }
  };
}

function get(path, headers) {
  const deferred = Q.defer();
  const client = restifyClient(headers);
  client.get(path, responseHandler(path, 'GET', deferred));
  return deferred.promise;
}

function post(path, headers, data) {
  const deferred = Q.defer();
  const client = restifyClient(headers);
  client.post(path, data, responseHandler(path, 'POST', deferred));
  return deferred.promise;
}

function put(path, headers, data) {
  const deferred = Q.defer();
  const client = restifyClient(headers);
  client.put(path, data, responseHandler(path, 'PUT', deferred));
  return deferred.promise;
}

function getSample(req) {
  const path = '/getSample';
  return get(path, req.headers);
}

function postSample(req) {
  const path = '/postSample';
  return post(path, req.headers, req.body);
}

function putSample(req) {
  const path = '/putSample';
  return put(path, req.headers, req.body);
}

exports = {
  getSample,
  postSample,
  putSample,
};
