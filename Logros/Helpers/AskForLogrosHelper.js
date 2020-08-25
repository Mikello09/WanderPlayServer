
const mysql = require('mysql');
const databaseConfig = require('../../Configuration/DataBaseConfig');
const util = require('util');
const lugaresHelper = require('./LugaresHelper');
const categoriasHelper = require('./CategoriasHelper');
const ccaaHelper = require('./CCAAHelper');


const connection = mysql.createConnection({
	host: databaseConfig.host,
	user: databaseConfig.user,
	password: databaseConfig.password,
	database: databaseConfig.database,
	multipleStatements: true,
	debug: false
});

const query = util.promisify(connection.query).bind(connection);

isFirstTimeInTheApp = function(logros){
    console.log('3');
    var logro = []
    if(logros.length == 0){
        logro.push('LB');
    } 
    return logro;
}

lugarLogros = function(lugar,visitas,idUsuario){
    var logrosLugar = []
    var isNew = true

    /*ISNEW*/
    for(var i=0;i<visitas.length;i++){
        if (visitas[i].Lugar_idLugar == lugar.idLugar){isNew = false}
    }
    if(isNew){
        logrosLugar.push('LV')

        /*LUGARES*/
        const lugaresLogros = lugaresHelper.getLugaresLogros(visitas);
        for(var i=0;i<lugaresLogros.length;i++){
            logrosLugar.push(lugaresLogros[i]);
        }

        /*CATEGORIAS*/
        const categoriasLogros = categoriasHelper.getCategoriasLogros(idUsuario, lugar);
        if (categoriasLogros.length > 0){logrosLugar.push(categoriasLogros[0])}

        /*CCAA*/
        const ccaaLogros = ccaaHelper.getCCAALogros(idUsuario, lugar);
        if (ccaaLogros.length > 0){logrosLugar.push(ccaaLogros[0])}
        
    }
    return logrosLugar;

}

//inserta los logros obtenidos en la BBDD y los devuelve
module.exports.InsertNewLogro = this.InsertNewLogro;
async function InsertNewLogro(logrosToken,idUsuario){

    var logrosSentence = "SELECT * FROM Logros WHERE "
    for(var i=0;i<logrosToken.length;i++){
        if (i == 0) {
            logrosSentence = logrosSentence.concat("LogroToken = '" + logrosToken[i] + "'")
        } else {
            logrosSentence = logrosSentence.concat(" OR LogroToken = '" +  logrosToken[i] + "'");
        }
    }

    const logros = await query(logrosSentence);
    
    var logrosADevolver = []
    for(var i=0;i<logros.length;i++){
        query("INSERT INTO LogrosUsuarios (Usuario_idUsuario, Logros_idLogros) VALUES (?,?)",[idUsuario,logros[i].idLogros]);
        var logro = {
            "idLogros": logros[i].idLogros,
            "Titulo": logros[i].Titulo,
            "Descripcion": logros[i].Descripcion,
            "Imagen": logros[i].Imagen,
            "Puntos": logros[i].Puntos,
            "Monedas": logros[i].Monedas,
            "LogroToken": logros[i].LogroToken,
            "Diamantes": logros[i].Diamantes,
            "Grupo": logros[i].Grupo
        }
        logrosADevolver.push(logro);
    }
    return logrosADevolver;

}
//inserta una nueva visita en la BBDD
module.exports.InsertNewVisita = InsertNewVisita
async function InsertNewVisita(lugar,idUsuario){
    query("INSERT INTO Visitas (Usuario_idUsuario,Lugar_idLugar) VALUES (?,?)",[idUsuario,lugar[0].idLugar])
}

module.exports.updatePremios = updatePremios
async function updatePremios(logros,idUsuario){
    const usuario = await query("SELECT * FROM Usuario WHERE idUsuario = ?",[idUsuario])
    var puntos = usuario[0].Puntos
    var monedas = usuario[0].Monedas
    var diamantes = usuario[0].Diamantes
    for(var i=0;i<logros.length;i++){
        puntos = puntos + logros[i].Puntos
        monedas = monedas + logros[i].Monedas
        diamantes = diamantes + logros[i].Diamantes
    }
    query("UPDATE Usuario SET Puntos = ? , Monedas = ? , Diamantes = ? WHERE idUsuario = ?",[puntos,monedas,diamantes,idUsuario]);
}

module.exports = {isFirstTimeInTheApp,InsertNewLogro,lugarLogros,InsertNewVisita,updatePremios};