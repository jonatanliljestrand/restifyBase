const axios = require('axios');
const serverConfig = require('../config.json');

function createError(statusCode, message) {
    return {
        statusCode,
        message,
    };
}

function newClient() {
    const client = axios.create({
        baseURL: serverConfig.urls.sampleUrl,
        timeout: 3000,
        headers: {
            'Content-Type': 'applicion/json',
        },
    });

    return client;
}

async function get(path) {
    const client = newClient();

    let responseObject = {};

    await client.get(path).then((response) => {
        responseObject = response;
    }).catch((error) => {
        responseObject = createError(error.status, error.statusText);
    });

    return responseObject;
}

function getSample(req) {
  const path = '/getSample';
  return get(path);
}

exports = {
  getSample
};
