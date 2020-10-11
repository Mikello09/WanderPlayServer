'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dataBaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const mongoose = require('mongoose');


const api = express.Router();

api.use(bodyParser.urlencoded({extended:false}))//necesario para parsear las respuestas en el body

api.post('/getAllAvatares', (req,res) => {
    if(proxy.isUserAuthenticated(req.headers['authtoken'])){
        const Avatar = mongoose.model('Avatar', dataBaseConfig.avatarSchema);
        Avatar.find()
        .then(avatares => {
            res.status(200).json({avatares});
        })
        .catch(err => {
            res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
        });
    } else {
        res.status(401).json({"state":"Unauthorized"});
    }
});

api.post('/insertAvatar', (req,res) => {
    if(proxy.isUserAuthenticated(req.headers['authtoken'])){
        var nombre = req.body.nombre;
        var descripcion = req.body.descripcion;
        var categorias = req.body.categorias;
        var precio = req.body.precio;
        var nivel = req.body.nivel;
        if(nombre == null || nombre == "" || descripcion == null || descripcion == "" || categorias == null || categorias == "" || precio == "" || precio == null || nivel == "" || nivel == null){
            res.status(400).json({"reason":"Faltan valores"});
        } else {
            const Avatar = mongoose.model('Avatar', dataBaseConfig.avatarSchema);
            var categoriasArray = [];
            for(var i=0;i<categorias.split('-').length;i++){
                console.log(categorias.split('-')[i]);
                categoriasArray.push(categorias.split('-')[i]);
            }
            const nuevoAvatar = new Avatar({
                nombre: nombre,
                descripcion: descripcion,
                categorias: categoriasArray,
                precio: precio,
                nivel: nivel
            });
            nuevoAvatar.save().then(avatar =>{
                res.status(200).json({avatar})
            })
            .catch(err => {
                res.status(500).json({"reason":"Error interno, vuelva a intentarlo"});
            });
        }
    } else {
        res.status(401).json({"state":"Unauthorized"});
    }
});



module.exports = api