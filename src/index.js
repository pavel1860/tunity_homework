const config = require('config');
const createServer = require('./server/server').createServer;

module.exports = function runApp() {
    createServer(config);
};
