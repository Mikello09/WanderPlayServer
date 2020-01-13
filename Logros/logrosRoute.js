'use strict';

const express = require('express');
const api = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const util = require('util');
const numeroVisitasLogros = require('./NumeroVisitasLogros');
const bienvenidaLogro = require('./BienvenidaLogro');
const divideLogrosIntoGroupos = require('./DivideLogrosIntoGroups');

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
	var idUsuario = req.body.idUsuario;
	var idLugar = req.body.idLugar;
	var logros = [];
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		try{
			const lugares = await query("SELECT * FROM Lugar WHERE idLugar = ?", idLugar);
			const visitas = await query("SELECT * FROM Visitas WHERE Usuario_idUsuario = ?", idUsuario);
			const logrosUsuario = await query("SELECT * FROM LogrosUsuarios WHERE Usuario_idUsuario = ?", idUsuario);
			var logrosB = bienvenidaLogro.isFirstTimeInTheApp(logrosUsuario);
			console.log(logrosB);
			var logrosLV = numeroVisitasLogros.getVisitasLogros(lugares,visitas);
			console.log(logrosLV);
			logros = numeroVisitasLogros.addLogrosToken([logrosLV,logrosB]);
			console.log(logros);
			if(logros.length > 0){//aqui en vez de ir al fail se va al catch
				console.log('1');
				var dataquery = "SELECT * FROM Logros WHERE ";
				for(var i=0;i<logros.length;i++){
					if(i==0){
						for(var j=0;j<logros[i].length;j++){
							if(j==0){
								dataquery = dataquery.concat("LogroToken = '" + logros[i][j] + "' ");
							} else {
								dataquery = dataquery.concat("OR LogroToken = '" + logros[i][j] + "' ");
							}
						}
					} 
				}
				if(idLugar != -1){//cuando si has encontrado un lugar
					dataquery = dataquery.concat("; INSERT INTO VISITAS (Usuario_idUsuario, Lugar_idLugar) VALUES (?,?);");
				}
				console.log(dataquery);
				connection.query(dataquery,[idUsuario,idLugar], function(err,results){
					if (err){
						var data = {
							"state":"SQLError",
							"reason":err
						};
						res.json({data});
					} else {
						var data = {}
						var puntos = 0
						var monedas = 0
						var diamantes = 0
						var logrosUsuariosQuery = "INSERT INTO LogrosUsuarios (Usuario_idUsuario, Logros_idLogros) VALUES";
						if(results[0].length > 0){//si hay mas de un logro
							for(var i=0;i<results[0].length;i++){
								console.log('puntos1: ' + results[0][i].Puntos)
								puntos = puntos + results[0][i].Puntos
								monedas = monedas + results[0][i].Monedas
								diamantes = diamantes + results[0][i].Diamantes
								if(i==0){
									logrosUsuariosQuery = logrosUsuariosQuery.concat("(" + idUsuario + "," + results[0][i].idLogros + ")");
								} else {
									logrosUsuariosQuery = logrosUsuariosQuery.concat(", (" + idUsuario + "," + results[0][i].idLogros + ")");
								}
							}
							data = {
								"state":"OK",
								"data":results[0]
							};
							console.log(results[0])
						} else {//si solo hay un logro
							console.log('puntos2: ' + results[0].Puntos)
							puntos = puntos + results[0].Puntos
							monedas = monedas + results[0].Monedas
							diamantes = diamantes + results[0].Diamantes
							logrosUsuariosQuery = logrosUsuariosQuery.concat("(" + idUsuario + "," + results[0].idLogros + ")")
							data = {
								"state":"OK",
								"data":results
							};
							console.log(results[0])
						}
						console.log(logrosUsuariosQuery)
						console.log(monedas);
						console.log(puntos);
						console.log(diamantes)
						var updateUsuarioQuery = "UPDATE Usuario SET Puntos = Puntos + ? , Monedas = Monedas + ? , Diamantes = Diamantes + ? WHERE idUsuario = ?";
						query(logrosUsuariosQuery); 
						const updateUsuario = query(updateUsuarioQuery,[puntos,monedas,diamantes,idUsuario]);
						res.json({data});
					}
				});

			} else {
				console.log('fail');
				var data = {
					"state":"Fail"
				};
				res.json({data});
			}
		}catch (err){
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

api.post('/getLogrosById', (req,res) => {
	var idUsuario = req.body.idUsuario;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		connection.query("SELECT Logros.* FROM Logros JOIN LogrosUsuarios ON Logros.idLogros = LogrosUsuarios.Logros_idLogros where LogrosUsuarios.Usuario_idUsuario = ?",[idUsuario],function(err,result){
			if(err){
				var data = {
					"state":"SQLError",
					"reason":err
				};
				res.json({data});
			} else {
				var data = {
					"state":"OK",
					"data":result
				};
				res.json({data});
			}
		});
	} else {
		res.json({"state":"Unauthorized"});
	}
});

api.post('/getAllLogros', (req,res) => {
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		connection.query("SELECT * FROM Logros", function(err,result){
			if(err){
				var data = {
					"state":"SQLError",
					"reason":err
				};
				res.json({data});
			} else {
				res.json(divideLogrosIntoGroupos.divideIntoGroups(result));
			}
		});
	} else {
		res.json({"state":"Unauthorized"});
	}
});

module.exports = api;