'use strict';

const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const { MongoNetworkError } = require('mongodb');
const puntosConfig = require('./PuntosConfiguration/puntosConfig');

api.use(bodyParser.urlencoded({extended: false}))//necesario para parsear las respuestas en el body

api.post('/doLogin', (req,res) => {
	var nombre = req.body.nombre;
	var pass = req.body.contrasena;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
			const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
            Usuario.findOne({
                nombre: nombre,
                pass: pass
            }, function(err, usuario){  
                if(usuario != null){
                    res.status(200).json({usuario});
                } else {
                    res.status(400).json({"reason":"Usuario/contraseña incorrectos"});
                }
            })
            .catch(err => {
                res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
            });
	}else {
		res.status(401).json({"reason":"Unauthorized"});
	}
});

api.post('/registerUsuario', (req,res) => {
	console.log('Registering user');
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var nombre = req.body.nombre;
		var avatar = req.body.avatar;
		var pass = req.body.pass;
		if(nombre == null || pass == null || avatar == null){
			res.status(400).json({"reason":"Faltan valores"})
		} else {
				console.log("successful connection!");
				const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
				const nuevoUsuario = new Usuario({ 
					nombre: nombre,
					apellidos: "",
					email: "",
					direccion: "",
					pais: "",
					provincia: "",
					ciudad: "",
					edad: 0,
					puntos: 0,
					contrasena: pass,
					ultimoIngreso: "",
					version: "",
					nivel: 0,
					monedas: 0,
					diamantes: 0,
					avatar: avatar
				});
				nuevoUsuario.save().then(doc => {
					res.status(200).json({"nombre":nombre,"contrasena":pass});
				})
				.catch(err => {
					res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
				});
		}
	} else {
		res.status(401).json({"reason":"Unauthorized"});
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