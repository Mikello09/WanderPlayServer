'use strict';
const express = require('express');
const app = express();
const routes = require('./logrosRoute');

app.use('/',routes);

module.exports = app;