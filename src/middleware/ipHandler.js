const db = require('../helpers/db');

const helpers = require('../components/ip/helpers');

module.exports = function(req, res, next) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const url = req.url;
    if (helpers.validateIp(ip)) {
        db.addIp(ip, url);
    }
    next();
};
