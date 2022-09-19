'use strict';

const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
const util = require('util');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const XLSX = require('xlsx');
const { lugarSchema } = require('../Configuration/DataBaseConfig');
const mongoose = require('mongoose');

api.use(bodyParser.urlencoded({extended: false}))//necesario para parsear las respuestas en el body

api.post('/getAllLugares', (req,res) => {
	console.log('calling getAllLugares...');
	if (proxy.isUserAuthenticated(req.headers['authtoken'])){
		const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
		Lugar.find()
		.then(lugares => {
			res.status(200).json({lugares});
		})
		.catch(err => {
			res.status(500).json({"reason":"Error interno. Vuelva a intentarlo"})
		}) 
	} else {
		res.json({'status':'Unauthorized'});
	}
});

api.post('/updateLugar', async(req,res) => {
	console.log('Updating lugar');
	if (proxy.isUserAuthenticated(req.headers['authtoken'])) {
		var id = req.body.id;
		var nombre = req.body.nombre;
		var descripcion = req.body.descripcion;
		var puntos = req.body.puntos;
		var interes = req.body.interes;
		var categoria = req.body.categoria;
		var ccaa = req.body.ccaa;
		var provincia = req.body.provincia;
		var localidad = req.body.localidad;
		var latitud = req.body.latitud;
		var longitud = req.body.longitud;
		var foto1 = req.body.foto1;
		var foto2 = req.body.foto2;
		var foto3 = req.body.foto3;

		const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
		const lugar = await Lugar.findById(id);
		lugar.nombre = nombre;
		lugar.descripcion = descripcion;
		lugar.puntos = puntos;
		lugar.interes = interes;
		lugar.categoria = categoria;
		lugar.ccaa = ccaa;
		lugar.provincia = provincia;
		lugar.localidad = localidad;
		lugar.latitud = latitud;
		lugar.longitud = longitud;
		lugar.foto1 = foto1;
		lugar.foto2 = foto2;
		lugar.foto3 = foto3;

		const guardado = await lugar.save();

		res.status(200).json({});
	} else {
		res.status(401).send('Unauthorized');
	}
});

api.post('/insertLugaresFromExcell', async(req,res) => {
	if (proxy.isUserAuthenticated(req.headers['authtoken'])){

		const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
		const borrado = await Lugar.deleteMany();

		const excellFile = XLSX.readFile('Lugares/lugares.xlsx');
		var lugares = XLSX.utils.sheet_to_json(excellFile.Sheets[excellFile.SheetNames[0]]);
		console.log(lugares.length);
		for (var i = 0; i< lugares.length; i++){
			let nombre = lugares[i]['Nombre'];
			let latitud = lugares[i]['Latitud'];
			let longitud = lugares[i]['Longitud'];
			let description = lugares[i]['Descripcion'];
			let puntos = lugares[i]['Puntos'];
			let categoria = lugares[i]['Categoria'];
			let localidad = lugares[i]['Localidad'];
			let provincia = lugares[i]['Provincia'];
			let ccaa = lugares[i]['CCAA'];
			let foto1 = lugares[i]['URL_Foto_1'];
			let foto2 = lugares[i]['URL_Foto_2'];
			let foto3 = lugares[i]['URL_Foto_3'];
			let interes = lugares[i]['Nivel']

			const nuevoLugar = new Lugar({ 
				nombre: nombre,
				latitud: latitud,
				longitud: longitud,
				descripcion: description,
				puntos: puntos,
				categoria: categoria,
				provincia: provincia,
				ccaa: ccaa,
				foto1: foto1,
				foto2: foto2,
				foto3: foto3,
				localidad: localidad,
				interes: interes
			});
			console.log(nombre);
			const guardado = await nuevoLugar.save()
		}
		res.status(200).json('success');
	} else {
		res.status(401).send('Unauthorized');
	}
});

module.exports = api;