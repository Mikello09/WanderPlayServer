'use strict';

const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
const databaseConfig = require('../Configuration/DataBaseConfig');
const proxy = require('../Configuration/Proxy');
const mongoose = require('mongoose');




api.use(bodyParser.urlencoded({extended:false}))//necesario para parsear las respuestas en el body


api.post('/getGeneralRanking', async(req,res) => {
    if(proxy.isUserAuthenticated(req.headers['authtoken'])){
        try{
            const Usuario = mongoose.model('Usuario', databaseConfig.usuarioSchema);
            const usuarios = await Usuario.find({});
            res.status(200).json({usuarios});
        }catch (err){
            res.status(500).json({"reason":err});
		}
    } else {
        res.status(401).json({"state":"Unauthorized"});
    }
});

module.exports = api;