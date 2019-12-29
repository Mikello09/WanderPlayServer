'use strict'

const appUsuarios = require('./Users/users')
const appLugares = require('./Lugares/lugares')
const appLogros = require('./Logros/logros')
const configUsers = require('./Users/usersConfig')
const configLugares = require('./Lugares/lugaresConfig')
const configLogros = require('./Logros/logrosConfig')



appUsuarios.listen(configUsers.port,'0.0.0.0', () => {
	console.log(`usuarios listening in http://0.0.0.0:${configUsers.port}`);
});

appLugares.listen(configLugares.port,'0.0.0.0', () => {
	console.log(`lugares listening in http://0.0.0.0:${configLugares.port}`);
});

appLogros.listen(configLogros.port, '0.0.0.0', () => {
	console.log(`logros listening in http://0.0.0.0:${configLogros.port}`);
});