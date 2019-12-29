'use strict';
const express = require('express');
const app = express();
const routes = require('./lugaresRoute');

app.use('/',routes);

module.exports = app;