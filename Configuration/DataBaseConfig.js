/*module.exports = {
	host: 'localhost',//wanderplaydev.cfebmmc7xweo.eu-west-3.rds.amazonaws.com
	user: 'mikel',
	password: 'mikel',//Wanderplay2020
	database: 'WanderPlayDev'//WanderPlay
}*/

'use strict';

const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const { MongoNetworkError, Int32 } = require('mongodb');

const uri = 'mongodb+srv://admin:admin@wanderplay.vt5iz.mongodb.net/Wanderplay?retryWrites=true&w=majority';

const usuarioSchema = new mongoose.Schema({
	nombre: String,
	apellidos: String,
	email: String,
	direccion: String,
	pais: String,
	provincia: String,
	ciudad: String,
	edad: Number,
	puntos: Number,
	contrasena: String,
	ultimoIngreso: String,
	version: String,
	nivel: Number,
	monedas: Number,
	diamantes: Number,
	avatar: String
}); 

module.exports = {usuarioSchema, uri}