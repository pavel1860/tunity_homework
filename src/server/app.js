const express = require('express');
const connectRoutes = require('./routes').connectRoutes;
const errorHandler = require('../middleware/errorHandler');
const ipHandler = require('../middleware/ipHandler');


let app = express();
const router = connectRoutes(app);
app.use(ipHandler);
app.use(router);
app.use(errorHandler);

module.exports = app;
