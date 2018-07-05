const app = require('./app');
const logger = require('../helpers/logger');

exports.createServer = function(config) {
    return app.listen(config.get('port'), (err)=>{
        if (err) {
            logger.error(err);
        }
        logger.log(`application is listening on port ${config.port}`);
    });
};
