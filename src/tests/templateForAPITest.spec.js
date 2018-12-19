/* eslint-disable no-undef, no-console */
/*
const request = require('request');
const nock = require('nock');
const testConfiguration = require('../config').test;

const server = require('../lib/server.js').create();

const serverUrl = testConfiguration.apiBase;

// only allow connections to localhost, otherwise unmocked requests to through to the server
nock.disableNetConnect();
nock.enableNetConnect('127.0.0.1');
nock.enableNetConnect('localhost');

describe('Testing /postSample', () => {
  beforeEach((done) => {
    server.initiate(8080, done);
  });

  after((done) => {
    server.stop(done);
  });

  afterEach(() => {
    server.stop();
    nock.cleanAll();
  });

  it('Should test things', (done) => {
    nock('http://sample:80')
      .put('/getSample')
      .reply(200, {
        responseData: 'test3',
      });

    const variable1 = 'test1';
    const variable2 = 'test2';

    console.log(serverUrl)
    
    request({
      url: `${serverUrl}/postSample/${variable1}/${variable2}`,
      method: 'POST',
      body: {
        mes: 'heydude',
      },
    }, (error, response, body) => {
      console.log(body);
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('ok');
      done();
    });
  });
});
*/