'use strict';

const express = require('express');
const api = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const puntosConfig = require('./PuntosConfiguration/puntosConfig');

const connection = mysql.createConnection({
	host: databaseConfig.host,
	user: databaseConfig.user,
	password: databaseConfig.password,
	database: databaseConfig.database,
	multipleStatements: true
});

api.use(bodyParser.urlencoded({extended: false}))//necesario para parsear las respuestas en el body

api.post('/doLogin', (req,res) => {
	var email = req.body.email;
	var pass = req.body.contrasena;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var sql = "SELECT * from Usuario WHERE Email = ? AND Contrasena = ?";
		connection.query(sql, [email,pass], function(err, result){
			if(err){
				var data = {
					"state":"SQLError",
					"reason":err
				};
				res.json({data});
			} else {
				if(result.length > 0){
					console.log('LoginSuccess');
					var data = {
						"state":"OK",
						"data":result
					};
					res.json({data});
				} else {
					console.log('LoginFail');
					var data = {
						"state":"Fail",
						"reason":"Usuario/Contraseña incorrectos"
					};
					res.json({data});
				}
				
			}
		});
	}else {
		res.json({"state":"Unauthorized"});
	}
});

api.post('/registerUsuario', (req,res) => {
	console.log('Registering user');
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var nombre = req.body.nombre;
		var avatar = req.body.avatar;
		var contrasena = req.body.contrasena;
		if(nombre == null || contrasena == null || avatar == null){
			console.log('Valores nulos');
			throw err;
		} else {
			var sql = "INSERT INTO Usuario (Nombre, Avatar, Contrasena, Puntos, Monedas) VALUES (?, ?, ?, ?, ?)";
			connection.query(sql, [nombre, avatar, contrasena,0,0] ,function (err, result) {
				if (err){
					var data = {
						"state":"SQLError",
						"reason":err
					};
					res.json({data});
				} else {
					console.log("User registered: " + nombre);
					res.json({'idUsuario':result.insertId});
				}
			});
		}
		
	} else {
		res.json({"state":"Unauthorized"});
	}
});

api.post('/getUserProfile', (req,res) => {
	var datetime = new Date();
	console.log('gettingProfile', datetime);
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var idUsuario = req.body.idUsuario
		var sql = "UPDATE Usuario SET UltimoIngreso = ? where idUsuario = ?;SELECT * FROM Usuario where idUsuario = ?; SELECT * FROM Categorias;SELECT * FROM Avatar;";
		connection.query(sql, [datetime, idUsuario, idUsuario, idUsuario], function(err,results) {
			if (err){
				var data = {
					"state":"SQLError",
					"reason":err
				};
				res.json({data});
			} else {
				var data = {
					"state":"OK",
					"userData":results[1],
					"categorias":results[2],
					"niveles":puntosConfig.getAllNivelsPoints(),
					"avatares":results[3]
				}
				res.json({data});
			}
		});	
	} else {
		res.json({"state":"Unauthorized"});
	}
});

module.exports = api;