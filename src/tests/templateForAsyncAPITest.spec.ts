// import * as chai from 'chai';
// import axios from 'axios';
// import nock from 'nock';
// import config from '../config/config.json';
// import createServer from '../lib/server';

// chai.should();
// const server = createServer(config.serverConfiguration);

// const serverUrl = config.test.apiBase;

// // only allow connections to localhost, otherwise unmocked requests to through to the server
// nock.disableNetConnect();
// nock.enableNetConnect('127.0.0.1');
// nock.enableNetConnect('localhost');

// describe.only('Testing endpoints', () => {
//     beforeEach(() => {
//         server.initiate();
//     });

//     after(() => {
//         server.stop();
//     });

//     afterEach(() => {
//         server.stop();
//         nock.cleanAll();
//     });

//     describe('Testing /ping', () => {
//         it('Happy path should work', async () => {
//             const response = await axios.get(`${serverUrl}/ping`);

//             response.status.should.equal(200);
//             response.data.should.equal('pong');
//         });
//     });

//     describe('Testing /getSample', () => {
//         it('Happy path should work', async () => {
//             nock('http://www.google.com')
//                 .get('/')
//                 .reply(200, 'Sampled this');

//             const response = await axios.get(`${serverUrl}/getSample`);

//             response.status.should.equal(200);
//             response.data.should.equal('Sampled this');
//         });
//     });
// });
