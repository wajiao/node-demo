'use strict';

/**
 * http基础
 */
const http = require('http');

// const app = require('./responseHeader');
// const app = require('./requestMethod');
const app = require('./mvc-routes');

const server = http.createServer(app).listen(3000, () => {
    console.log('Listen: 3000!!');
});

module.exports = server;
