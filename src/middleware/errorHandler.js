const logger = require('../helpers/logger');

module.exports = function(err, req, res, next) {
    logger.error(err);
    res.status(400).json({err: err.message});
};
