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

api.use(bodyParser.urlencoded({extended:false}))//necesario para parsear las respuestas en el body

const query = util.promisify(connection.query).bind(connection);//para hacer las llamadas con await

api.get('/getAllAvatares', async(req,res) => {
    if(proxy.isUserAuthenticated(req.headers['authtoken'])){
        try{
            connection.query("SELECT * FROM Avatar" ,function(err, result){	
				if(err){
					throw err;
				} else {
					var data = {
                        "state":"OK",
                        "data":result
                    }
                    res.json({data})
				}
			});
        }catch(err){
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
})

module.exports = api