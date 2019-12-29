/*
    IDLOGROS
         1(LV) -> Ha visitado un lugar por primera vez
         2(1LV) -> Es tu 1 lugar del juego
         3(5LV) -> Es tu 5 lugar visitado
         4(15LV) -> Es tu 15 lugar visitado
         5(40LV) -> Es tu 40 lugar visitado
         6(80LV) -> Es tu 80 lugar visitado
         7(150LV) -> Es tu 150 lugar visitado
*/

const tokenLogros = ['LV','1LV','5LV','15LV','40LV','80LV','150LV']

getVisitasLogros = function(lugar,visitas){
    if(lugar.length > 0){//si no ha encontrado lugares
        var idLugar = lugar[0].idLugar;
        if(isNewLugar(idLugar,visitas)){
            return getCantidadLugaresVisitados(visitas)
        }
    }
    return [];
};

isNewLugar = function(idLugar,visitas){
    if(visitas.length > 0){
        for(var i=0;i<visitas.length;i++){
            if(visitas[i].Lugar_idLugar == idLugar){
                return false
            }
        }
        return true
    } else {
        return true
    }
}

getCantidadLugaresVisitados = function(visitas){
    var logros = [tokenLogros[0]]
    switch(visitas.length){
        case 0:
            logros.push(tokenLogros[1]);
            break;
        case 4:
            logros.push(tokenLogros[2]);
            break;
        case 14:
            logros.push(tokenLogros[3]);
            break;
        case 39:
            logros.push(tokenLogros[4]);
            break;
        case 79:
            logros.push(tokenLogros[5]);
            break;
        case 149:
            logros.push(tokenLogros[6]);
            break;
    }
    return logros;
}

addLogrosToken = function(logros){
	var tokenLogros = []
	for(var i=0;i<logros.length;i++){
        if(logros[i] != ''){
            tokenLogros.push(logros[i])
        }
	}
	return tokenLogros
}


module.exports = {getVisitasLogros, addLogrosToken};