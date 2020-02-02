'use strict';
const express = require('express');
const app = express();
const routes = require('./rankingRoute');

app.use('/', routes);

module.exports = app;