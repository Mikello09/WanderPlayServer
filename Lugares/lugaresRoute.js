'use strict';

const express = require('express');
const api = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const util = require('util');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const XLSX = require('xlsx');

const connection = mysql.createConnection({
	host: databaseConfig.host,
	user: databaseConfig.user,
	password: databaseConfig.password,
	database: databaseConfig.database
});

const query = util.promisify(connection.query).bind(connection);//para hacer las llamadas con await



api.post('/getAllLugares', (req,res) => {
	console.log('calling getAllLugares...');
	if (proxy.isUserAuthenticated(req.headers['authtoken'])){
		var sql = "SELECT * from Lugar";
		connection.query(sql, function(err, result){
			if(err){
				res.send('Error en la conexion: ' + err);
			} else {
				res.json({result});
			}
		});
	} else {
		res.json({'status':'Unauthorized'});
	}
});

api.post('/insertLugaresFromExcell', async(req,res) => {
	if (proxy.isUserAuthenticated(req.headers['authtoken'])){
		var deleteLugares = await query("DELETE FROM Lugar");
		const excellFile = XLSX.readFile('Lugares/lugares.xlsx');
		var lugares = XLSX.utils.sheet_to_json(excellFile.Sheets[excellFile.SheetNames[0]]);
		console.log(lugares.length);
		var nivelData = []
		for (var i = 0; i< lugares.length; i++){
			let nombre = lugares[i]['Nombre'];
			let latitud = lugares[i]['Latitud'];
			console.log(latitud);
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
			let nivel = lugares[i]['Interes']
			nivelData.push(nivel)
			let sql = "INSERT INTO Lugar (Nombre, Latitud, Longitud, Descripcion, Puntos, Categoria, Provincia, CCAA, Foto1, Foto2, Foto3, Localidad, Interes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			connection.query(sql, [nombre, latitud, longitud, description, puntos, categoria, provincia, ccaa, foto1, foto2, foto3, localidad, nivel] ,function(err, result){	
				if(err){
					throw err;
				} else {
					//console.log(nombre, latitud, longitud, description, puntos, categoria, provincia, ccaa, foto1, foto2, foto3, localidad);
				}
			});
		}
		res.json({'success': nivelData});
	} else {
		res.send('Unauthorized');
	}
});

module.exports = api;