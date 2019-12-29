

divideIntoGroups = function(logros) {
    var grupos = []
    for(var i=0;i<logros.length;i++){
        if(grupos.length == 0){
            grupos.push(logros[i].Grupo)
        } else {
            if(!grupos.includes(logros[i].Grupo)){
                grupos.push(logros[i].Grupo)
            }
        }
    }
    var logrosOrdenados = []
    for(var i=0;i<grupos.length;i++){
        var logroEnGrupo = []
        for(var j=0;j<logros.length;j++){
            if(logros[j].Grupo == grupos[i]){
                logroEnGrupo.push(logros[j])
            }
        }
        var grupo = {
            "Grupo": grupos[i],
            "Logros": logroEnGrupo
        }
        logrosOrdenados.push(grupo);
    }
    return logrosOrdenados
};

module.exports = {divideIntoGroups};