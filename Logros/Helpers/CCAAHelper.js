
const databaseConfig = require('../../Configuration/DataBaseConfig');
const mongoose = require('mongoose');



const galicia = [
    '5GA',
    '10GA',
    '25GA',
    '50GA',
    '100GA'
]

const asturias = [
    '5AS',
    '10AS',
    '25AS',
    '50AS',
    '100AS'
]

const cantabria = [
    '5CA',
    '10CA',
    '25CA',
    '50CA',
    '100CA'
]

const paisVasco = [
    '5EU',
    '10EU',
    '25EU',
    '50EU',
    '100EU'
]

const navarra = [
    '5NA',
    '10NA',
    '25NA',
    '50NA',
    '100NA'
]

const laRioja = [
    '5LR',
    '10LR',
    '25LR',
    '50LR',
    '100LR'
]

const aragon = [
    '5AR',
    '10AR',
    '25AR',
    '50AR',
    '100AR'
]

const cataluna = [
    '5CAT',
    '10CAT',
    '25CAT',
    '50CAT',
    '100CAT'
]

const castillayleon = [
    '5CYL',
    '10CYL',
    '25CYL',
    '50CYL',
    '100CYL'
]

const madrid = [
    '5MA',
    '10MA',
    '25MA',
    '50MA',
    '100MA'
]

const valencia = [
    '5VA',
    '10VA',
    '25VA',
    '50VA',
    '100VA'
]

const murcia = [
    '5MU',
    '10MU',
    '25MU',
    '50MU',
    '100MU'
]

const castillaLaMancha = [
    '5CYLA',
    '10CYLA',
    '25CYLA',
    '50CYLA',
    '100CYLA'
]

const extremadura = [
    '5EX',
    '10EX',
    '25EX',
    '50EX',
    '100EX'
]

const andalucia = [
    '5AN',
    '10AN',
    '25AN',
    '50AN',
    '100AN'
]

const canarias = [
    '5CAN',
    '10CAN',
    '25CAN',
    '50CAN',
    '100CAN'
]

const islasBaleares = [
    '5IB',
    '10IB',
    '25IB',
    '50IB',
    '100IB'
]


module.exports.getCCAALogros = getCCAALogros;
async function getCCAALogros(usuario,lugar){
    var logrosCategorias = []
    var lugaresVisitados = []
    var query = ""
    for(i=0;i<usuario.lugares;i++){
        query = query.concat(query,"{");
        query = query.concat("_id:");
        query = query.concat(usuario.lugares[i]);
        query = query.concat("}");
        if(i < (usuario.lugares.length - 1)){
            query = query.concat(",")
        }
    }
    if (query != ""){
        const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
        lugaresVisitados = await Lugar.find({$or: [
            query
          ]})
    }
    
    switch(lugar.ccaa){
        case "Galicia":
            const logrosGalicia = getGaliciaLogros(lugaresVisitados);
            if (logrosGalicia.length > 0){logrosCategorias.push(logrosGalicia[0])}
            break;
        case "Asturias":
            const logrosAsturias = getAsturiasLogros(lugaresVisitados);
            if (logrosAsturias.length > 0){logrosCategorias.push(logrosAsturias[0])}
            break;
        case "Cantabria":
            const logrosCantabria = getCantabriaLogros(lugaresVisitados);
            if (logrosCantabria.length > 0){logrosCategorias.push(logrosCantabria[0])}
            break;
        case "Pais Vasco":
            const paisVascoLogros = getPaisVascoLogros(lugaresVisitados);
            if (paisVascoLogros.length > 0){logrosCategorias.push(paisVascoLogros[0])}
            break;
        case "Navarra":
            const navarraLgros = getNavarraLogros(lugaresVisitados);
            if (navarraLgros.length > 0){logrosCategorias.push(navarraLgros[0])}
            break;
        case "La Rioja":
            const lariojaLogros = getLaRiojaLogros(lugaresVisitados);
            if (lariojaLogros.length > 0){logrosCategorias.push(lariojaLogros[0])}
            break;
        case "Aragon":
            const aragonLogros = getAragonLogros(lugaresVisitados);
            if (aragonLogros.length > 0){logrosCategorias.push(aragonLogros[0])}
            break;
        case "Cataluna":
            const catalunaLogros = getCatalunaLogros(lugaresVisitados);
            if (catalunaLogros.length > 0){logrosCategorias.push(catalunaLogros[0])}
            break;
        case "Castilla y Leon":
            const castillaLeonLogros = getCastillaLeonLogros(lugaresVisitados);
            if (castillaLeonLogros.length > 0){logrosCategorias.push(castillaLeonLogros[0])}
            break;
        case "Madrid":
            const madridLogros = getMadridLogros(lugaresVisitados);
            if (madridLogros.length > 0){logrosCategorias.push(madridLogros[0])}
            break;
        case "Valencia":
            const valenciaLogros = getValenciaLogros(lugaresVisitados);
            if (valenciaLogros.length > 0){logrosCategorias.push(valenciaLogros[0])}
            break;
        case "Murcia":
            const murciaLogros = getMurciaLogros(lugaresVisitados);
            if (murciaLogros.length > 0){logrosCategorias.push(murciaLogros[0])}
            break;
        case "Castilla La Mancha":
            const castillaLaManchaLogros = getCastillaLaManchaLogros(lugaresVisitados);
            if (castillaLaManchaLogros.length > 0){logrosCategorias.push(castillaLaManchaLogros[0])}
            break;
        case "Extremadura":
            const extremaduraLogros = getExtremaduraLogros(lugaresVisitados);
            if (extremaduraLogros.length > 0){logrosCategorias.push(extremaduraLogros[0])}
            break;
        case "Andalucia":
            const andaluciaLogros = getAndaluciaLogros(lugaresVisitados);
            if (andaluciaLogros.length > 0){logrosCategorias.push(andaluciaLogros[0])}
            break;
        case "Canarias":
            const canariasLogros = getCanariasLogros(lugaresVisitados);
            if (canariasLogros.length > 0){logrosCategorias.push(canariasLogros[0])}
            break;
        case "Islas Baleares":
            const islasBalearesLogros = getIslasBalearesLogros(lugaresVisitados);
            if (islasBalearesLogros.length > 0){logrosCategorias.push(islasBalearesLogros[0])}
            break;
        default:
            break;
    }
    return logrosCategorias;
}


function getGaliciaLogros(lugaresVisitados){

    var visitasGalicia = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Galicia"){visitasGalicia = visitasGalicia + 1}
    }

    var logros = []
    switch(visitasGalicia){
        case 4:
            logros.push(galicia[0]);
        case 9:
            logros.push(galicia[1]);
        case 24:
            logros.push(galicia[2]);
        case 49:
            logros.push(galicia[3]);
        case 99:
            logros.push(galicia[4]);
        default:
            console.log('No hay logro de galicia');
    }
    return logros;

}

function getAsturiasLogros(lugaresVisitados){

    var visitasAsturias = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Asturias"){visitasAsturias = visitasAsturias + 1}
    }

    var logros = []
    switch(visitasAsturias){
        case 4:
            logros.push(asturias[0]);
        case 9:
            logros.push(asturias[1]);
        case 24:
            logros.push(asturias[2]);
        case 49:
            logros.push(asturias[3]);
        case 99:
            logros.push(asturias[4]);
        default:
            console.log('No hay logro de asturias');
    }
    return logros;

}


function getCantabriaLogros(lugaresVisitados){

    var visitasCantabria = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Cantabria"){visitasCantabria = visitasCantabria + 1}
    }

    var logros = []
    switch(visitasCantabria){
        case 4:
            logros.push(cantabria[0]);
        case 9:
            logros.push(cantabria[1]);
        case 24:
            logros.push(cantabria[2]);
        case 49:
            logros.push(cantabria[3]);
        case 99:
            logros.push(cantabria[4]);
        default:
            console.log('No hay logro de cantabria');
    }
    return logros;

}

function getPaisVascoLogros(lugaresVisitados){

    var visitasPaisVasco = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Pais Vasco"){visitasPaisVasco = visitasPaisVasco + 1}
    }

    var logros = []
    switch(visitasPaisVasco){
        case 4:
            logros.push(paisVasco[0]);
        case 9:
            logros.push(paisVasco[1]);
        case 24:
            logros.push(paisVasco[2]);
        case 49:
            logros.push(paisVasco[3]);
        case 99:
            logros.push(paisVasco[4]);
        default:
            console.log('No hay logro de paisVasco');
    }
    return logros;

}

function getNavarraLogros(lugaresVisitados){

    var visitasNavarra = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Navarra"){visitasNavarra = visitasNavarra + 1}
    }

    var logros = []
    switch(visitasNavarra){
        case 4:
            logros.push(navarra[0]);
        case 9:
            logros.push(navarra[1]);
        case 24:
            logros.push(navarra[2]);
        case 49:
            logros.push(navarra[3]);
        case 99:
            logros.push(navarra[4]);
        default:
            console.log('No hay logro de navarra');
    }
    return logros;

}

function getLaRiojaLogros(lugaresVisitados){

    var visitasLaRioja = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "La Rioja"){visitasLaRioja = visitasLaRioja + 1}
    }

    var logros = []
    switch(visitasLaRioja){
        case 4:
            logros.push(laRioja[0]);
        case 9:
            logros.push(laRioja[1]);
        case 24:
            logros.push(laRioja[2]);
        case 49:
            logros.push(laRioja[3]);
        case 99:
            logros.push(laRioja[4]);
        default:
            console.log('No hay logro de laRioja');
    }
    return logros;

}

function getAragonLogros(lugaresVisitados){

    var visitasAragon = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Aragon"){visitasAragon = visitasAragon + 1}
    }

    var logros = []
    switch(visitasAragon){
        case 4:
            logros.push(aragon[0]);
        case 9:
            logros.push(aragon[1]);
        case 24:
            logros.push(aragon[2]);
        case 49:
            logros.push(aragon[3]);
        case 99:
            logros.push(aragon[4]);
        default:
            console.log('No hay logro de aragon');
    }
    return logros;

}

function getCatalunaLogros(lugaresVisitados){

    var visitasCataluna = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Cataluna"){visitasCataluna = visitasCataluna + 1}
    }

    var logros = []
    switch(visitasCataluna){
        case 4:
            logros.push(cataluna[0]);
        case 9:
            logros.push(cataluna[1]);
        case 24:
            logros.push(cataluna[2]);
        case 49:
            logros.push(cataluna[3]);
        case 99:
            logros.push(cataluna[4]);
        default:
            console.log('No hay logro de cataluna');
    }
    return logros;

}

function getCastillaLeonLogros(lugaresVisitados){

    var visitasCastillayLeon= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Castilla y Leon"){visitasCastillayLeon = visitasCastillayLeon + 1}
    }

    var logros = []
    switch(visitasCastillayLeon){
        case 4:
            logros.push(castillayleon[0]);
        case 9:
            logros.push(castillayleon[1]);
        case 24:
            logros.push(castillayleon[2]);
        case 49:
            logros.push(castillayleon[3]);
        case 99:
            logros.push(castillayleon[4]);
        default:
            console.log('No hay logro de castillayleon');
    }
    return logros;

}

function getMadridLogros(lugaresVisitados){

    var visitasMadrid= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Madrid"){visitasMadrid = visitasMadrid + 1}
    }

    var logros = []
    switch(visitasMadrid){
        case 4:
            logros.push(madrid[0]);
        case 9:
            logros.push(madrid[1]);
        case 24:
            logros.push(madrid[2]);
        case 49:
            logros.push(madrid[3]);
        case 99:
            logros.push(madrid[4]);
        default:
            console.log('No hay logro de madrid');
    }
    return logros;

}

function getValenciaLogros(lugaresVisitados){

    var visitasValencia= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Valencia"){visitasValencia = visitasValencia + 1}
    }

    var logros = []
    switch(visitasValencia){
        case 4:
            logros.push(valencia[0]);
        case 9:
            logros.push(valencia[1]);
        case 24:
            logros.push(valencia[2]);
        case 49:
            logros.push(valencia[3]);
        case 99:
            logros.push(valencia[4]);
        default:
            console.log('No hay logro de valencia');
    }
    return logros;

}

function getMurciaLogros(lugaresVisitados){

    var visitasMurcia= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Murcia"){visitasMurcia = visitasMurcia + 1}
    }

    var logros = []
    switch(visitasMurcia){
        case 4:
            logros.push(murcia[0]);
        case 9:
            logros.push(murcia[1]);
        case 24:
            logros.push(murcia[2]);
        case 49:
            logros.push(murcia[3]);
        case 99:
            logros.push(murcia[4]);
        default:
            console.log('No hay logro de murcia');
    }
    return logros;

}

function getCastillaLaManchaLogros(lugaresVisitados){

    var visitasCastillaLaMancha= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Castilla La Mancha"){visitasCastillaLaMancha = visitasCastillaLaMancha + 1}
    }

    var logros = []
    switch(visitasCastillaLaMancha){
        case 4:
            logros.push(castillaLaMancha[0]);
        case 9:
            logros.push(castillaLaMancha[1]);
        case 24:
            logros.push(castillaLaMancha[2]);
        case 49:
            logros.push(castillaLaMancha[3]);
        case 99:
            logros.push(castillaLaMancha[4]);
        default:
            console.log('No hay logro de castillaLaMancha');
    }
    return logros;

}

function getExtremaduraLogros(lugaresVisitados){

    var visitasExtremadura= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Extremadura"){visitasExtremadura = visitasExtremadura + 1}
    }

    var logros = []
    switch(visitasExtremadura){
        case 4:
            logros.push(extremadura[0]);
        case 9:
            logros.push(extremadura[1]);
        case 24:
            logros.push(extremadura[2]);
        case 49:
            logros.push(extremadura[3]);
        case 99:
            logros.push(extremadura[4]);
        default:
            console.log('No hay logro de extremadura');
    }
    return logros;

}

function getAndaluciaLogros(lugaresVisitados){

    var visitasAndalucia= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Andalucia"){visitasAndalucia = visitasAndalucia + 1}
    }

    var logros = []
    switch(visitasAndalucia){
        case 4:
            logros.push(andalucia[0]);
        case 9:
            logros.push(andalucia[1]);
        case 24:
            logros.push(andalucia[2]);
        case 49:
            logros.push(andalucia[3]);
        case 99:
            logros.push(andalucia[4]);
        default:
            console.log('No hay logro de andalucia');
    }
    return logros;

}

function getCanariasLogros(lugaresVisitados){

    var visitasCanarias= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Canarias"){visitasCanarias = visitasCanarias + 1}
    }

    var logros = []
    switch(visitasCanarias){
        case 4:
            logros.push(canarias[0]);
        case 9:
            logros.push(canarias[1]);
        case 24:
            logros.push(canarias[2]);
        case 49:
            logros.push(canarias[3]);
        case 99:
            logros.push(canarias[4]);
        default:
            console.log('No hay logro de canarias');
    }
    return logros;

}

function getIslasBalearesLogros(lugaresVisitados){

    var visitasIslasBaleares= 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].ccaa == "Islas Baleares"){visitasIslasBaleares = visitasIslasBaleares + 1}
    }

    var logros = []
    switch(visitasIslasBaleares){
        case 4:
            logros.push(islasBaleares[0]);
        case 9:
            logros.push(islasBaleares[1]);
        case 24:
            logros.push(islasBaleares[2]);
        case 49:
            logros.push(islasBaleares[3]);
        case 99:
            logros.push(islasBaleares[4]);
        default:
            console.log('No hay logro de islasBaleares');
    }
    return logros;

}