'use strict'

const appRanking = require('./Ranking/ranking');
const appUsuarios = require('./Users/users');
const appLugares = require('./Lugares/lugares');
const appLogros = require('./Logros/logros');
const appAvatares = require('./Avatares/avatares');
const configUsers = require('./Users/usersConfig');
const configLugares = require('./Lugares/lugaresConfig');
const configLogros = require('./Logros/logrosConfig');
const configRanking = require('./Ranking/rankingConfig');
const configAvatares = require('./Avatares/avataresConfig');

var nodeStatic = require('node-static');

var listeningMask = '0.0.0.0';


appUsuarios.listen(configUsers.port,listeningMask, () => {
	console.log(`usuarios listening in http://0.0.0.0:${configUsers.port}`);
});

appLugares.listen(configLugares.port,listeningMask, () => {
	console.log(`lugares listening in http://0.0.0.0:${configLugares.port}`);
});

appLogros.listen(configLogros.port, listeningMask, () => {
	console.log(`logros listening in http://0.0.0.0:${configLogros.port}`);
});

appRanking.listen(configRanking.port, listeningMask, () => {
	console.log(`ranking listening in http:://${listeningMask}:${configRanking.port}`)
});

appAvatares.listen(configAvatares.port, listeningMask, () => {
    console.log(`avatares listening in http:://${listeningMask};${configAvatares.port}`)
});

var file = new nodeStatic.Server('./Resources/Categorias');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);

