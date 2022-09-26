
'use strict';

const express = require('express');
const app = express();
const ranking = require('./Ranking/rankingRoute');
const usuarios = require('./Users/usuariosRoute');
const lugares = require('./Lugares/lugaresRoute');
const logros = require('./Logros/logrosRoute');
const avatares = require('./Avatares/avataresRoute');
const { use } = require('./Avatares/avataresRoute');

app
.use('/ranking/',ranking)
.use('/usuarios/',usuarios)
.use('/lugares/', lugares)
.use('/logros/', logros)
.use('/avatares/',avatares)
.use(express.static(__dirname + '/Resources'))

module.exports = app;

