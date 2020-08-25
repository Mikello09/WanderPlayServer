'use strict';
const express = require('express');
const app = express();
const routes = require('./avataresRoute');

app.use('/', routes);

module.exports = app;