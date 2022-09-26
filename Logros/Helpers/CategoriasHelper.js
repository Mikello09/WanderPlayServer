
/*
ID 
    5CPV -> 5 Castillos y Palacios
    10CPV -> 10 Castillos y Palacios
    25CPV -> 25 Castillos y Palacios
    50CPV -> 50 Castillos y Palacios
    100CPV -> 100 Castillos y Palacios

    5PV -> 5 Pueblos
    10PV -> 10 Pueblos
    25PV -> 25 Pueblos
    50PV -> 50 Pueblos
    100PV -> 100 Pueblos

    5IV -> 5 Iglesias
    10IV -> 10 Iglesias
    25IV -> 25 Iglesias
    50IV -> 50 Iglesias
    100IV -> 100 Iglesias

    5MV -> 5 Monumentos
    10MV -> 10 Monumentos
    25MV -> 25 Monumentos
    50MV -> 50 Monumentos
    100MV -> 100 Monumentos

    5CV -> 5 Calles
    10CV -> 10 Calles
    25CV -> 25 Calles
    50CV -> 50 Calles
    100CV -> 100 Calles

    5MIV -> 5 Miradores
    10MIV -> 10 Miradores
    25MIV -> 25 Miradores
    50MIV -> 50 Miradores
    100MIV -> 100 Miradores

    5EV -> 5 Edificios
    10EV -> 10 Edificios
    25EV -> 25 Edificios
    50EV -> 50 Edificios
    100EV -> 100 Edificios

    5PAV -> 5 Parques
    10PAV -> 10 Parques
    25PAV -> 25 Parques
    50PAV -> 50 Parques
    100PAV -> 100 Parques

    5PL -> 5 Playas
    10PL -> 10 Playas
    25PL -> 25 Playas
    50PL -> 50 Playas
    100PL -> 100 Playas

*/

const databaseConfig = require('../../Configuration/DataBaseConfig');
const mongoose = require('mongoose');

const castillosYpalacios = [
    '5CPV',
    '10CPV',
    '25CPV',
    '50CPV',
    '100CPV'
]

const pueblos = [
    '5PV',
    '10PV',
    '25PV',
    '50PV',
    '100PV'
]

const iglesias = [
    '5IV',
    '10IV',
    '25IV',
    '50IV',
    '100IV'
]

const monumentos = [
    '5MV',
    '10MV',
    '25MV',
    '50MV',
    '100MV'
]

const calles = [
    '5CV',
    '10CV',
    '25CV',
    '50CV',
    '100CV'
]

const miradores = [
    '5MIV',
    '10MIV',
    '25MIV',
    '50MIV',
    '100MIV'
]

const edificios = [
    '5EV',
    '10EV',
    '25EV',
    '50EV',
    '100EV'
]

const parques = [
    '5PAV',
    '10PAV',
    '25PAV',
    '50PAV',
    '100PAV'
]

const playas = [
    '5PL',
    '10PL',
    '25PL',
    '50PL',
    '100PL'
]

module.exports.getCategoriasLogros = getCategoriasLogros;
async function getCategoriasLogros(usuario,lugar){
    var query = ""
    var logrosCategorias = []
    var lugaresVisitados = []
    for(i=0;i<usuario.lugares;i++){
        query = query.concat(query,"{");
        query = query.concat("_id:");
        query = query.concat(usuario.lugares[i]);
        query = query.concat("}");
        if(i < (usuario.lugares.length - 1)){
            query = query.concat(",")
        }
    }
    if(query != ""){
        const Lugar = mongoose.model('Lugar', databaseConfig.lugarSchema);
        lugaresVisitados = await Lugar.find({$or: [
        query
      ]})
    }
    
    switch(lugar.categoria){
        case "Castillos y Palacios":
            const logrosCastillosyPalacios = await getCastillosyPalaciosLogro(lugaresVisitados);
            if (logrosCastillosyPalacios.length > 0){logrosCategorias.push(logrosCastillosyPalacios[0])}
            break;
        case "Pueblos":
            const pueblos = await getPueblos(lugaresVisitados);
            if (pueblos.length > 0){logrosCategorias.push(pueblos[0])}
            break;
        case "Iglesias":
            const iglesias = await getIglesias(lugaresVisitados);
            if (iglesias.length > 0){logrosCategorias.push(iglesias[0])}
            break;
        case "Monumentos":
            const monumentos = await getMonumentos(lugaresVisitados);
            if (monumentos.length > 0){logrosCategorias.push(monumentos[0])}
            break;
        case "Calles":
            const calles = await getCalles(lugaresVisitados);
            if (calles.length > 0){logrosCategorias.push(calles[0])}
            break;
        case "Miradores":
            const miradores = await getMiradores(lugaresVisitados);
            if (miradores.length > 0){logrosCategorias.push(miradores[0])}
            break;
        case "Edificios":
            const edificios = await getEdificios(lugaresVisitados);
            if (edificios.length > 0){logrosCategorias.push(edificios[0])}
            break;
        case "Parques":
            const parques = await getParques(lugaresVisitados);
            if (parques.length > 0){logrosCategorias.push(parques[0])}
            break;
        case "Playas":
            const playas = await getPlayas(lugaresVisitados);
            if (playas.length > 0){logrosCategorias.push(playas[0])}
            break;
        default:
            break;
    }
    return logrosCategorias;
}

async function getCastillosyPalaciosLogro(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    
    var visitasCastillosyPalacios = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
    }

    var logros = []
    switch(visitasCastillosyPalacios){
        case 4:
            logros.push(castillosYpalacios[0]);
        case 9:
            logros.push(castillosYpalacios[1]);
        case 24:
            logros.push(castillosYpalacios[2]);
        case 49:
            logros.push(castillosYpalacios[3]);
        case 99:
            logros.push(castillosYpalacios[4]);
        default:
            console.log('No hay logro de castillos y palacios');
    }
    return logros;
}


async function getPueblos(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasPueblos = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
    }

    var logros = []
    switch(visitasPueblos){
        case 4:
            logros.push(pueblos[0]);
        case 9:
            logros.push(pueblos[1]);
        case 24:
            logros.push(pueblos[2]);
        case 49:
            logros.push(pueblos[3]);
        case 99:
            logros.push(pueblos[4]);
        default:
            console.log('No hay logro de pueblos');
    }
    return logros;
}


async function getIglesias(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasIglesias = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasIglesias = visitasIglesias + 1}
    }

    var logros = []
    switch(visitasIglesias){
        case 4:
            logros.push(iglesias[0]);
        case 9:
            logros.push(iglesias[1]);
        case 24:
            logros.push(iglesias[2]);
        case 49:
            logros.push(iglesias[3]);
        case 99:
            logros.push(iglesias[4]);
        default:
            console.log('No hay logro de iglesias');
    }
    return logros;
}


async function getMonumentos(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasMonumentos = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasMonumentos = visitasMonumentos + 1}
    }

    var logros = []
    switch(visitasMonumentos){
        case 4:
            logros.push(monumentos[0]);
        case 9:
            logros.push(monumentos[1]);
        case 24:
            logros.push(monumentos[2]);
        case 49:
            logros.push(monumentos[3]);
        case 99:
            logros.push(monumentos[4]);
        default:
            console.log('No hay logro de monumentos');
    }
    return logros;
}


async function getCalles(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasCalles = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasCalles = visitasCalles + 1}
    }

    var logros = []
    switch(visitasCalles){
        case 4:
            logros.push(calles[0]);
        case 9:
            logros.push(calles[1]);
        case 24:
            logros.push(calles[2]);
        case 49:
            logros.push(calles[3]);
        case 99:
            logros.push(calles[4]);
        default:
            console.log('No hay logro de calles');
    }
    return logros;
}


async function getMiradores(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasMiradores = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasMiradores = visitasMiradores + 1}
    }

    var logros = []
    switch(visitasMiradores){
        case 4:
            logros.push(miradores[0]);
        case 9:
            logros.push(miradores[1]);
        case 24:
            logros.push(miradores[2]);
        case 49:
            logros.push(miradores[3]);
        case 99:
            logros.push(miradores[4]);
        default:
            console.log('No hay logro de miradores');
    }
    return logros;
}


async function getEdificios(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasEdificios = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasEdificios = visitasEdificios + 1}
    }

    var logros = []
    switch(visitasEdificios){
        case 4:
            logros.push(edificios[0]);
        case 9:
            logros.push(edificios[1]);
        case 24:
            logros.push(edificios[2]);
        case 49:
            logros.push(edificios[3]);
        case 99:
            logros.push(edificios[4]);
        default:
            console.log('No hay logro de edificios');
    }
    return logros;
}


async function getParques(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasParques = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Pueblos"){visitasParques = visitasParques + 1}
    }

    var logros = []
    switch(visitasParques){
        case 4:
            logros.push(parques[0]);
        case 9:
            logros.push(parques[1]);
        case 24:
            logros.push(parques[2]);
        case 49:
            logros.push(parques[3]);
        case 99:
            logros.push(parques[4]);
        default:
            console.log('No hay logro de parques');
    }
    return logros;
}

async function getPlayas(lugaresVisitados){

    //primero hay que conseguir todos los lugares de las visitas para poder filtrarlos por las categorias
    var visitasPlayas = 0
    for(var i=0;i<lugaresVisitados.length;i++){
        if(lugaresVisitados[i].categoria == "Playas"){visitasPlayas = visitasPlayas + 1}
    }

    var logros = []
    switch(visitasPlayas){
        case 4:
            logros.push(playas[0]);
        case 9:
            logros.push(playas[1]);
        case 24:
            logros.push(playas[2]);
        case 49:
            logros.push(playas[3]);
        case 99:
            logros.push(playas[4]);
        default:
            console.log('No hay logro de playas');
    }
    return logros;
}

module.exports = {getCategoriasLogros}