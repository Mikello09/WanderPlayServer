'use strict'


const server = require('./server');
var nodeStatic = require('node-static');
const mongoose = require('mongoose');
const databaseConfig = require('./Configuration/DataBaseConfig');

const PORT = process.env.PORT || 3000
var listeningMask = '0.0.0.0';

mongoose.connect(databaseConfig.uri, {useNewUrlParser: true, useUnifiedTopology: true})

server.listen(PORT,listeningMask, () => {
	console.log('listening to server');
});

var file = new nodeStatic.Server('./Resources');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);

