#!/usr/bin/env node
import config from './config/config.json';
import createServer from './lib/server';

const server = createServer(config.serverConfiguration);

server.initiate();
