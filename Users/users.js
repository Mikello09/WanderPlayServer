'use strict';
const express = require('express');
const app = express();
const routes = require('./usuariosRoute');

app.use('/',routes);

module.exports = app;