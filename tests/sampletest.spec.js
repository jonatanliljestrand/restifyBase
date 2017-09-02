/* eslint-disable no-undef, no-console */
const request = require('request');
const nock = require('nock');

const server = require('../lib/server.js').create('/api/v2');
const serverUrl = 'http://127.0.0.1'

// only allow connections to localhost, otherwise unmocked requests to through to the server
nock.disableNetConnect();
nock.enableNetConnect('127.0.0.1');
nock.enableNetConnect('localhost');

describe('Testing /ping', () => {
  beforeEach((done) => {
    server.initiate(8080, done);
  });

  after((done) => {
    server.stop(done);
  });

  afterEach(() => {
    server.stop
    nock.cleanAll();
  });

  it('Should test things', (done) => {
    nock('http://127.0.0.1:8080')
      .put('/test')
      .reply(204, {});

    request({
      url: `${serverUrl}/ping`,
      method: 'PUT',
    }, (error, response, body) => {
      console.log(body);

      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('ok')
      done();
    });
  });
});
