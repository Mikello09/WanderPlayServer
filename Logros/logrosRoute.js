'use strict';

const express = require('express');
const api = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const util = require('util');
const getAllLogrosHelper = require('./Helpers/GetAllLogrosHelper');
const askForLogrosHelper = require('./Helpers/AskForLogrosHelper');

const connection = mysql.createConnection({
	host: databaseConfig.host,
	user: databaseConfig.user,
	password: databaseConfig.password,
	database: databaseConfig.database,
	multipleStatements: true,
	debug: false
});

api.use(bodyParser.urlencoded({extended: false}))//necesario para parsear las respuestas en el body

const query = util.promisify(connection.query).bind(connection);


api.post('/askForLogros', async(req,res) => {
	console.log("Asking for logros...")
	var idUsuario = req.body.idUsuario;
	var idLugar = req.body.idLugar;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		try{
			const lugar = await query("SELECT * FROM Lugar WHERE idLugar = ?", idLugar);
			const visitas = await query("SELECT * FROM Visitas WHERE Usuario_idUsuario = ?", idUsuario);
			const logrosUsuario = await query("SELECT * FROM LogrosUsuarios WHERE Usuario_idUsuario = ?", idUsuario);
			
			if (idLugar == -1) {//bienvenida
				const logroBienvenida = askForLogrosHelper.isFirstTimeInTheApp(logrosUsuario);
				if (logroBienvenida.length > 0){
					console.log("Binevenido!!!");
					const logros = await askForLogrosHelper.InsertNewLogro(['LB'],idUsuario);
					console.log('Logros obtenidos: ', logros);
					askForLogrosHelper.updatePremios(logros,idUsuario);
					var data = {
						"state":"OK",
						"data":logros
					}
					res.json({data})
				} else {
					console.log('No se han obtenido logros para ',idLugar);
					var data = {
						"state":"Fail"
					};
					res.json({data});
				}
			} else if(idLugar == -2){//cambio de nivel

			} else {//lugar visitado
				const logrosLugares = askForLogrosHelper.lugarLogros(lugar[0],visitas,idUsuario);
				if (logrosLugares.length > 0) {
					askForLogrosHelper.InsertNewVisita(lugar,idUsuario);
					const logros = await askForLogrosHelper.InsertNewLogro(logrosLugares,idUsuario);
					askForLogrosHelper.updatePremios(logros,idUsuario);
					var data = {
						"state":"OK",
						"data":logros
					}
					res.json({data})
				} else {
					console.log('No se han obtenido logros para ',idLugar);
					var data = {
						"state":"Fail"
					};
					res.json({data});
				}
			}


		} catch(err){
			console.log(err);
			var data = {
				"state":"SQLError",
				"reason":err
			};
			res.json({data});
		}
	} else {
		res.json({"state":"Unauthorized"});
	}
});

api.post('/getAllLogros', async(req,res) => {
	var idUsuario = req.body.idUsuario;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		try{
			const lugaresVisitados = await query("SELECT Lugar.* FROM Lugar JOIN Visitas ON Lugar.idLugar = Visitas.Lugar_idLugar WHERE Visitas.Usuario_idUsuario = ?", [idUsuario]);
			const logros = await query("SELECT * FROM Logros");
			const logrosUsuario = await query("SELECT Logros.* FROM Logros JOIN LogrosUsuarios ON Logros.idLogros = LogrosUsuarios.Logros_idLogros WHERE LogrosUsuarios.Usuario_idUsuario = ?", [idUsuario]);

			var logrosConPorcentaje = []
			for(var i=0;i<logros.length;i++){
				const porcentaje = getAllLogrosHelper.calculatePercent(logros[i],lugaresVisitados,logrosUsuario);
				var logroConPorcentaje = {
					"idLogros": logros[i].idLogros,
					"Titulo": logros[i].Titulo,
					"Descripcion": logros[i].Descripcion,
					"Imagen": logros[i].Imagen,
					"Puntos": logros[i].Puntos,
					"Monedas": logros[i].Monedas,
					"LogroToken": logros[i].LogroToken,
					"Diamantes": logros[i].Diamantes,
					"Grupo": logros[i].Grupo,
					"Porcentaje": porcentaje
				};
				logrosConPorcentaje.push(logroConPorcentaje);
			}
			res.json(getAllLogrosHelper.divideIntoGroups(logrosConPorcentaje));
		}catch(err){
			var data = {
				"state":"SQLError",
				"reason":err
			};
			res.json({data});
		}
	} else {
		res.json({"state":"Unauthorized"});
	}
});

module.exports = api;