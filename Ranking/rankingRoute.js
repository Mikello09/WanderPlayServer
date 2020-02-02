'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const util = require('util');
const dataBaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');


const api = express.Router();
const connection = mysql.createConnection({
    host: dataBaseConfig.host,
    user: dataBaseConfig.user,
    password: dataBaseConfig.password,
    database: dataBaseConfig.database,
    multipleStatements: true
});

class RankingClass{
    constructor(){}
    set idUsuario(idUsuario){
        this._idUsuario = idUsuario;
    }
    get idUsuario(){
        return this._idUsuario;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set puntos(puntos){
        this._puntos = puntos;
    }
    get puntos(){
        return this._puntos;
    }
    set lugaresVisitados(lugaresVisitados){
        this._lugaresVisitados = lugaresVisitados;
    }
    get lugaresVisitados(){
        return this._lugaresVisitados;
    }
}

api.use(bodyParser.urlencoded({extended:false}))//necesario para parsear las respuestas en el body

const query = util.promisify(connection.query).bind(connection);//para hacer las llamadas con await

api.post('/getGeneralRanking', async(req,res) => {
    if(proxy.isUserAuthenticated(req.headers['authtoken'])){
        try{
            var rankings = [];
            console.log("getGeneralRanking")
            var usuarios = await query("SELECT * FROM Usuario");
            console.log(usuarios);
            for(var i=0;i<usuarios.length;i++){
                var rank = new RankingClass()
                rank.idUsuario = usuarios[i].idUsuario;
                rank.nombre = usuarios[i].Nombre;
                rank.puntos = usuarios[i].Puntos;
                var lugaresVisitados = await query("SELECT * FROM Visitas WHERE Usuario_idUsuario = ?;", usuarios[i].idUsuario);
                rank.lugaresVisitados = lugaresVisitados.length
                rankings.push(rank)
            }
            var data = {
                "state":"OK",
                "data":rankings
            }
            res.json({data});
        }catch (err){
            console.log("Error", err);
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