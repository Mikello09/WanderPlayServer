'use strict';

const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const { MongoNetworkError } = require('mongodb');
const settings = require('../Users/Helpers/SettingsHelper');

api.use(bodyParser.urlencoded({extended: false}))//necesario para parsear las respuestas en el body

api.post('/doLogin', (req,res) => {
	console.log('DoLogin');
	console.log(req.body);
	var nombre = req.body.nombre;
	var pass = req.body.contrasena;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		console.log('DoLogin: Authenticated');
		console.log(nombre);
		console.log(pass);
			const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
            Usuario.findOne({
                nombre: nombre,
                contrasena: pass
            }, function(err, usuario) { 
                if(usuario != null) {
					console.log('DoLogin: User found');
					let loginSettings = settings.getSettings();
					const login = {
						settings: loginSettings,
						usuario: loginUser
					}
					console.log(login);
                    res.status(200).json({settings: loginSettings, usuario: usuario});
					var loginUser = usuario;
					loginUser.ultimoIngreso = new Date();
					loginUser.save();
					console.log('Ultimo ingreso saved');
                } else {
					console.log('DoLogin: User not found');
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

api.post('/registrarUsuario', (req,res) => {
	console.log('Registering user');
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var nombre = req.body.nombre;
		var avatar = req.body.avatar;
		var pass = req.body.pass;
		if(nombre == null || pass == null || avatar == null){
			res.status(400).json({"reason":"Faltan valores"})
		} else {
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
				nivel: 1,
				contrasena: pass,
				ultimoIngreso: new Date(),
				version: "",
				monedas: 0,
				diamantes: 0,
				avatarActivo: avatar
			});
			nuevoUsuario.avatares.push(avatar);
			nuevoUsuario.save().then(usuario => {
				res.status(200).json({usuario});
			})
			.catch(err => {
				res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
			});
		}
	} else {
		res.status(401).json({"reason":"Unauthorized"});
	}
});

api.post('/comprarAvatar', async(req,res) => {
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var nombre = req.body.nombre;
		var avatarNombre = req.body.avatar;
		if(nombre == "" || nombre == null || avatarNombre == "" || avatarNombre == null){
			res.status(400).json({"reason":"Faltan valores"});
		} else {
			try{
				const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
				const Avatar = mongoose.model('Avatar',databaseConfig.avatarSchema);
	
				const usuario = await Usuario.findOne({nombre: nombre});
				const avatar = await Avatar.findOne({nombre: avatarNombre});
	
				usuario.avatares.push(avatar.nombre);
				usuario.monedas = usuario.monedas - avatar.precio; 
	
				const guardado = await usuario.save();
				res.status(200).json({});
			} catch (err){
				res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
			};
		}
	} else {
		res.status(401).json({"reason":"Unauthorized"});
	}
});

api.post('/activarAvatar', async(req,res) => {
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var nombre = req.body.nombre;
		var nombreAvatar = req.body.avatar;
		if(nombre == "" || nombre == null || nombreAvatar == "" || nombreAvatar == null){
			res.status(400).json({"reason":"Faltan valores"});
		} else {
			const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);

			const usuario = await Usuario.findOne({nombre: nombre});

			usuario.avatarActivo = nombreAvatar;
			const guardado = await usuario.save();

			res.status(200).json({});
		}
	} else {
		res.status(401).json({"reason":"Unauthorized"});
	}
});


module.exports = api;