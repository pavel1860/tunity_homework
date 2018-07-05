const ipHandler = require('../components/ip');
const Router = require('express').Router;


exports.connectRoutes = function() {
    const router = new Router();
    router.route('/prev')
    .patch(ipHandler.controller.prevIpController);
    router.route('/total')
    .patch(ipHandler.controller.totalIpController);
    router.route('/stats')
    .patch(ipHandler.controller.statsController);
    return router;
};
