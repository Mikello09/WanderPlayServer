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
			let interes = lugares[i]['Interes']


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

			const guardado = await nuevoLugar.save()
		}
		res.status(200).json('success');
	} else {
		res.status(401).send('Unauthorized');
	}
});

module.exports = api;