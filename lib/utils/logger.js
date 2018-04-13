/* eslint-disable no-console */

exports.log = function log(message) {
  console.log(message);
};

exports.createError = function createError(statusCode, message) {
  return {
    statusCode,
    message,
  };
};
