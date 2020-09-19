
const lugaresHelper = require('./LugaresHelper');
const categoriasHelper = require('./CategoriasHelper');
const ccaaHelper = require('./CCAAHelper');

isFirstTimeInTheApp = function(logros){
    var logro = []
    if(logros.length == 0){
        logro.push('LB');
    } 
    return logro;
}

lugarLogros = function(lugar,usuario){
    var logrosLugar = []
    var isNew = true

    /*ISNEW*/
    for(var i=0;i<usuario.lugares.length;i++){
        if (usuario.lugares[i] == lugar._id){isNew = false}
    }
    if(isNew){
        logrosLugar.push('LV')

        /*LUGARES*/
        const lugaresLogros = lugaresHelper.getLugaresLogros(usuario.lugares);
        for(var i=0;i<lugaresLogros.length;i++){
            logrosLugar.push(lugaresLogros[i]);
        }

        /*CATEGORIAS*/
        const categoriasLogros = categoriasHelper.getCategoriasLogros(usuario, lugar);
        if (categoriasLogros.length > 0){logrosLugar.push(categoriasLogros[0])}

        /*CCAA*/
        const ccaaLogros = ccaaHelper.getCCAALogros(usuario, lugar);
        if (ccaaLogros.length > 0){logrosLugar.push(ccaaLogros[0])}
        
    }
    return logrosLugar;

}

module.exports = {isFirstTimeInTheApp,lugarLogros};