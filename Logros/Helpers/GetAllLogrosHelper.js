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

calculatePercent = function(logro, lugaresVisitados,logrosUsuario){

        if(logro.Grupo == "Lugares"){
            switch (logro.LogroToken) {
                case "1LV":
                    return (lugaresVisitados.length/1)*100
                case "5LV":
                    return (lugaresVisitados.length/5)*100 
                case "10LV":
                    return (lugaresVisitados.length/10)*100
                case "15LV":
                    return (lugaresVisitados.length/15)*100
                case "20LV":
                    return (lugaresVisitados.length/20)*100
                case "25LV":
                    return (lugaresVisitados.length/25)*100
                case "30LV":
                    return (lugaresVisitados.length/30)*100
                case "40LV":
                    return (lugaresVisitados.length/40)*100
                case "50LV":
                    return (lugaresVisitados.length/50)*100
                case "75LV":
                    return (lugaresVisitados.length/75)*100
                case "100LV":
                    return (lugaresVisitados.length/100)*100
                case "150LV":
                    return (lugaresVisitados.length/150)*100
                case "200LV":
                    return (lugaresVisitados.length/200)*100
                case "250LV":
                    return (lugaresVisitados.length/250)*100
                case "300LV":
                    return (lugaresVisitados.length/300)*100
                case "400LV":
                    return (lugaresVisitados.length/400)*100
                case "500LV":
                    return (lugaresVisitados.length/500)*100
                case "600LV":
                    return (lugaresVisitados.length/600)*100
                case "750LV":
                    return (lugaresVisitados.length/750)*100
                case "1000LV":
                    return (lugaresVisitados.length/1000)*100
                case "1250LV":
                    return (lugaresVisitados.length/1250)*100
                case "1500LV":
                    return (lugaresVisitados.length/1500)*100
                case "2000LV":
                    return (lugaresVisitados.length/2000)*100
                default:
                    return 0
            }
        } else if(logro.Grupo == "Categorias"){
            switch(logro.LogroToken){
                case "5CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/5)*100
                case "10CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/10)*100
                case "25CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/25)*100
                case "50CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/50)*100
                case "100CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/100)*100
                case "5PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/5)*100
                case "10PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/10)*100
                case "25PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/25)*100
                case "50PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/50)*100
                case "100PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/100)*100
                case "5IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/5)*100
                case "10IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/10)*100
                case "25IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/25)*100
                case "50IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/50)*100
                case "100IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/100)*100
                case "5MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/5)*100
                case "10MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/10)*100
                case "25MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/25)*100
                case "50MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/50)*100
                case "100MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/100)*100
                case "5CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/5)*100
                case "10CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/10)*100
                case "25CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/25)*100
                case "50CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/50)*100
                case "100CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/100)*100
                case "5MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/5)*100
                case "10MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/10)*100
                case "25MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/25)*100
                case "50MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/50)*100
                case "100MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/100)*100
                case "5EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/5)*100
                case "10EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/10)*100
                case "25EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/25)*100
                case "50EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/50)*100
                case "100EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/100)*100
                case "5PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/5)*100
                case "10PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/10)*100
                case "25PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/25)*100
                case "50PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/50)*100
                case "100PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].Categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/100)*100
                default:
                    return 0
                
            }
        } else {
            for(var i=0;i<logrosUsuario.length;i++){
                if (logrosUsuario[i].idLogros == logro.idLogros){return 100}
            }
            return 0
        }

    };

module.exports = {divideIntoGroups,calculatePercent};