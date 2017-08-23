/* eslint-disable no-undef, no-console */
const request = require('request');
const nock = require('nock');

const server = require('../lib/server.js').create('/api/v2');

// only allow connections to localhost, otherwise unmocked requests to through to the server 
// (but will fail in TeamCity later anyway...)
nock.disableNetConnect();
nock.enableNetConnect('127.0.0.1');
nock.enableNetConnect('localhost');

describe('/register/validate/:cultureCode', () => {
  beforeEach((done) => {
    server.start(8181, done);
  });

  after((done) => {
    server.stop(done);
  });

  afterEach(() => {
    server.stop
    nock.cleanAll();
  });

  it('Should test things', (done) => {
    nock('http://pantbanken.se')
      .put('/test')
      .reply(204, {});

    request({
      url: `${serverUrl}/register/validate/sv-SE`,
      method: 'PUT',
    }, (error, response, body) => {
      console.log(body);

      expect(response.statusCode).to.equal(400);
      done();
    });
  });
});
