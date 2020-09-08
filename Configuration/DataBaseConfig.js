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
	avatarActivo: String,
	avatares: [{type:String}]
}); 

const lugarSchema = new mongoose.Schema({
	nombre: String,
	latitud: String,
	longitud: String,
	descripcion: String,
	puntos: Number,
	categoria: String,
	provincia: String,
	ccaa: String,
	foto1: String,
	foto2: String,
	foto3: String,
	localidad: String,
	interes: String
});

const avatarSchema = new mongoose.Schema({
	nombre: String,
	descripcion: String,
	categorias: String
});

module.exports = {usuarioSchema, lugarSchema, avatarSchema, uri}