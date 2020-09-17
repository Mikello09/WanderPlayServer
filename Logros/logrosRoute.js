'use strict';

const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const getAllLogrosHelper = require('./Helpers/GetAllLogrosHelper');
const askForLogrosHelper = require('./Helpers/AskForLogrosHelper');

const mongoose = require('mongoose');

api.use(bodyParser.urlencoded({extended: false}))//necesario para parsear las respuestas en el body



api.post('/askForLogros', async(req,res) => {
	console.log("Asking for logros...");
	var nombre = req.body.nombre;
	var lugar = req.body.lugar;
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		if(nombre == "" || nombre == null || lugar == "" || lugar == null){
			res.status(400).json({"reason":"Faltan valores"});
		} else {

		}
		try{

			const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
			const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
			const Logro = mongoose.model('Logro', databaseConfig.logroSchema);

			const usuario = await Usuario.findOne({nombre: nombre});
			if (lugar == "-1"){
				const logroBienvenida = askForLogrosHelper.isFirstTimeInTheApp(usuario.logros);
				if (logroBienvenida.length > 0){
					var logrosObtenidos = []
					const logro = await Logro.findOne({logroToken:logroBienvenida[0]});
					logrosObtenidos.push(logro)
					usuario.logros.push(logro.logroToken);
					usuario.puntos = logro.puntos;
					usuario.monedas = logro.monedas;
					usuario.diamantes = logro.diamantes;
					const guardado = await usuario.save();
					res.status(200).json({"logros":logrosObtenidos})
				}else{
					res.status(410).json({"reason":"no hay logros"})
				}
			}


			/*const lugar = await query("SELECT * FROM Lugar WHERE idLugar = ?", idLugar);
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
			}*/


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
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var nombre = req.body.nombre;
		if(nombre == null || nombre == ""){
			res.status(400).json({"reason":"Faltan valores"});
		} else {
			try{
				const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
				const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
				const Logro = mongoose.model('Logro', databaseConfig.logroSchema);
	
				const usuario = await Usuario.findOne({nombre: nombre});
				var lugaresVisitados = []
				for(var i=0;i<usuario.lugares.length;i++){
					const lugar = await Lugar.findById(usuario.lugares[i]);
					lugaresVisitados.push(lugar);
				}
				const logros = await Logro.find();
	
				var logrosConPorcentaje = []
				for(var i=0;i<logros.length;i++){
					const porcentaje = getAllLogrosHelper.calculatePercent(logros[i],lugaresVisitados);
					var logroConPorcentaje = {
						"_id": logros[i]._id,
						"titulo": logros[i].titulo,
						"descripcion": logros[i].descripcion,
						"imagen": logros[i].imagen,
						"puntos": logros[i].puntos,
						"monedas": logros[i].monedas,
						"logroToken": logros[i].logroToken,
						"diamantes": logros[i].diamantes,
						"grupo": logros[i].grupo,
						"porcentaje": porcentaje
					};
					logrosConPorcentaje.push(logroConPorcentaje);
				}
				res.json(getAllLogrosHelper.divideIntoGroups(logrosConPorcentaje));
			}catch(err){
				res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
			}
		}
	} else {
		res.status(401).json({"state":"Unauthorized"});
	}
});

api.post('/insertLogro', (req,res) => {
	if(proxy.isUserAuthenticated(req.headers['authtoken'])){
		var titulo = req.body.titulo;
		var descripcion = req.body.descripcion;
		var imagen = req.body.imagen;
		var puntos = req.body.puntos;
		var monedas = req.body.monedas;
		var logroToken = req.body.logroToken;
		var diamantes = req.body.diamantes;
		var grupo = req.body.grupo;
		if(titulo == null || titulo == "" || descripcion == null || descripcion == "" || puntos == null || puntos == "" || monedas == null || monedas == "" || logroToken == null || logroToken == "" || diamantes == null || diamantes == "" || grupo == null || grupo == ""){
			res.status(400).json({"reason":"Faltan valores"});
		} else {
			const Logro = mongoose.model('Logro', databaseConfig.logroSchema);
			const nuevoLogro = new Logro({ 
				titulo: titulo,
				descripcion: descripcion,
				imagen: imagen,
				puntos: puntos,
				monedas: monedas,
				logroToken: logroToken,
				diamantes: diamantes,
				grupo: grupo
			});
			nuevoLogro.save().then(logro =>{
				res.status(200).json({logro});
			})
			.catch(err => {
				res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
			});
		}
	} else {
		res.status(401).json({"state":"Unauthorized"});
	}
});

module.exports = api;