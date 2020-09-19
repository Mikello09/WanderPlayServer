divideIntoGroups = function(logros) {
    var grupos = []
    for(var i=0;i<logros.length;i++){
        if(grupos.length == 0){
            grupos.push(logros[i].grupo)
        } else {
            if(!grupos.includes(logros[i].grupo)){
                grupos.push(logros[i].grupo)
            }
        }
    }
    var logrosOrdenados = []
    for(var i=0;i<grupos.length;i++){
        var logroEnGrupo = []
        for(var j=0;j<logros.length;j++){
            if(logros[j].grupo == grupos[i]){
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

calculatePercent = function(logro, lugaresVisitados, logrosUsuario){

        if(logro.grupo == "Lugares"){
            switch (logro.logroToken) {
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
        } else if(logro.grupo == "Categorias"){
            switch(logro.logroToken){
                case "5CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/5)*100
                case "10CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/10)*100
                case "25CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/25)*100
                case "50CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/50)*100
                case "100CPV":
                    var visitasCastillosyPalacios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Castillos y Palacios"){visitasCastillosyPalacios = visitasCastillosyPalacios + 1}
                    }
                    return (visitasCastillosyPalacios/100)*100
                case "5PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/5)*100
                case "10PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/10)*100
                case "25PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/25)*100
                case "50PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/50)*100
                case "100PV":
                    var visitasPueblos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Pueblos"){visitasPueblos = visitasPueblos + 1}
                    }
                    return (visitasPueblos/100)*100
                case "5IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/5)*100
                case "10IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/10)*100
                case "25IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/25)*100
                case "50IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/50)*100
                case "100IV":
                    var visitasIglesias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Iglesias"){visitasIglesias = visitasIglesias + 1}
                    }
                    return (visitasIglesias/100)*100
                case "5MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/5)*100
                case "10MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/10)*100
                case "25MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/25)*100
                case "50MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/50)*100
                case "100MV":
                    var visitasMonumentos = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Monumentos"){visitasMonumentos = visitasMonumentos + 1}
                    }
                    return (visitasMonumentos/100)*100
                case "5CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/5)*100
                case "10CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/10)*100
                case "25CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/25)*100
                case "50CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/50)*100
                case "100CV":
                    var visitasCalles = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Calles"){visitasCalles = visitasCalles + 1}
                    }
                    return (visitasCalles/100)*100
                case "5MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/5)*100
                case "10MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/10)*100
                case "25MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/25)*100
                case "50MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/50)*100
                case "100MIV":
                    var visitasMiradores = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Miradores"){visitasMiradores = visitasMiradores + 1}
                    }
                    return (visitasMiradores/100)*100
                case "5EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/5)*100
                case "10EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/10)*100
                case "25EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/25)*100
                case "50EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/50)*100
                case "100EV":
                    var visitasEdificios = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Edificios"){visitasEdificios = visitasEdificios + 1}
                    }
                    return (visitasEdificios/100)*100
                case "5PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/5)*100
                case "10PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/10)*100
                case "25PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/25)*100
                case "50PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/50)*100
                case "100PAV":
                    var visitasParques = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Parques"){visitasParques = visitasParques + 1}
                    }
                    return (visitasParques/100)*100
                case "5PL":
                    var visitasPlayas = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Playas"){visitasPlayas = visitasPlayas + 1}
                    }
                    return (visitasPlayas/5)*100
                case "10PL":
                    var visitasPlayas = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Playas"){visitasPlayas = visitasPlayas + 1}
                    }
                    return (visitasPlayas/10)*100
                case "25PL":
                    var visitasPlayas = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Playas"){visitasPlayas = visitasPlayas + 1}
                    }
                    return (visitasPlayas/25)*100
                case "50PL":
                    var visitasPlayas = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Playas"){visitasPlayas = visitasPlayas + 1}
                    }
                    return (visitasPlayas/50)*100
                case "100PL":
                    var visitasPlayas = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].categoria == "Playas"){visitasPlayas = visitasPlayas + 1}
                    }
                    return (visitasPlayas/100)*100
                default:
                    return 0
                
            }
        } else if (logro.grupo == "CCAA"){
            switch(logro.logroToken){
                case "5GA":
                    var visitasGalicia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Galicia"){visitasGalicia = visitasGalicia + 1}
                    }
                    return (visitasGalicia/5)*100
                case "10GA":
                    var visitasGalicia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Galicia"){visitasGalicia = visitasGalicia + 1}
                    }
                    return (visitasGalicia/10)*100
                case "25GA":
                    var visitasGalicia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Galicia"){visitasGalicia = visitasGalicia + 1}
                    }
                    return (visitasGalicia/25)*100
                case "50GA":
                    var visitasGalicia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Galicia"){visitasGalicia = visitasGalicia + 1}
                    }
                    return (visitasGalicia/50)*100
                case "100GA":
                    var visitasGalicia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Galicia"){visitasGalicia = visitasGalicia + 1}
                    }
                    return (visitasGalicia/100)*100
                case "5AS":
                    var visitasAsturias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Asturias"){visitasAsturias = visitasAsturias + 1}
                    }
                    return (visitasAsturias/5)*100
                case "10AS":
                    var visitasAsturias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Asturias"){visitasAsturias = visitasAsturias + 1}
                    }
                    return (visitasAsturias/10)*100
                case "25AS":
                    var visitasAsturias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Asturias"){visitasAsturias = visitasAsturias + 1}
                    }
                    return (visitasAsturias/25)*100
                case "50AS":
                    var visitasAsturias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Asturias"){visitasAsturias = visitasAsturias + 1}
                    }
                    return (visitasAsturias/50)*100
                case "100AS":
                    var visitasAsturias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Asturias"){visitasAsturias = visitasAsturias + 1}
                    }
                    return (visitasAsturias/100)*100
                case "5CA":
                    var visitasCantabria = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cantabria"){visitasCantabria = visitasCantabria + 1}
                    }
                    return (visitasCantabria/5)*100
                case "10CA":
                    var visitasCantabria = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cantabria"){visitasCantabria = visitasCantabria + 1}
                    }
                    return (visitasCantabria/10)*100
                case "25CA":
                    var visitasCantabria = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cantabria"){visitasCantabria = visitasCantabria + 1}
                    }
                    return (visitasCantabria/25)*100
                case "50CA":
                    var visitasCantabria = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cantabria"){visitasCantabria = visitasCantabria + 1}
                    }
                    return (visitasCantabria/50)*100
                case "100CA":
                    var visitasCantabria = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cantabria"){visitasCantabria = visitasCantabria + 1}
                    }
                    return (visitasCantabria/100)*100
                case "5EU":
                    var visitasPaisVasco = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Pais Vasco"){visitasPaisVasco = visitasPaisVasco + 1}
                    }
                    return (visitasPaisVasco/5)*100
                case "10EU":
                    var visitasPaisVasco = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Pais Vasco"){visitasPaisVasco = visitasPaisVasco + 1}
                    }
                    return (visitasPaisVasco/10)*100
                case "25EU":
                    var visitasPaisVasco = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Pais Vasco"){visitasPaisVasco = visitasPaisVasco + 1}
                    }
                    return (visitasPaisVasco/25)*100
                case "50EU":
                    var visitasPaisVasco = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Pais Vasco"){visitasPaisVasco = visitasPaisVasco + 1}
                    }
                    return (visitasPaisVasco/50)*100
                case "100EU":
                    var visitasPaisVasco = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Pais Vasco"){visitasPaisVasco = visitasPaisVasco + 1}
                    }
                    return (visitasPaisVasco/100)*100
                case "5NA":
                    var visitasNavarra = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Navarra"){visitasNavarra = visitasNavarra + 1}
                    }
                    return (visitasNavarra/5)*100
                case "10NA":
                    var visitasNavarra = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Navarra"){visitasNavarra = visitasNavarra + 1}
                    }
                    return (visitasNavarra/10)*100
                case "25NA":
                    var visitasNavarra = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Navarra"){visitasNavarra = visitasNavarra + 1}
                    }
                    return (visitasNavarra/25)*100
                case "50NA":
                    var visitasNavarra = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Navarra"){visitasNavarra = visitasNavarra + 1}
                    }
                    return (visitasNavarra/50)*100
                case "100NA":
                    var visitasNavarra = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Navarra"){visitasNavarra = visitasNavarra + 1}
                    }
                    return (visitasNavarra/100)*100
                case "5LR":
                    var visitasLaRioja = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "La Rioja"){visitasLaRioja = visitasLaRioja + 1}
                    }
                    return (visitasLaRioja/5)*100
                case "10LR":
                    var visitasLaRioja = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "La Rioja"){visitasLaRioja = visitasLaRioja + 1}
                    }
                    return (visitasLaRioja/10)*100
                case "25LR":
                    var visitasLaRioja = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "La Rioja"){visitasLaRioja = visitasLaRioja + 1}
                    }
                    return (visitasLaRioja/25)*100
                case "50LR":
                    var visitasLaRioja = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "La Rioja"){visitasLaRioja = visitasLaRioja + 1}
                    }
                    return (visitasLaRioja/50)*100
                case "100LR":
                    var visitasLaRioja = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "La Rioja"){visitasLaRioja = visitasLaRioja + 1}
                    }
                    return (visitasLaRioja/100)*100
                case "5AR":
                    var visitasAragon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Aragon"){visitasAragon = visitasAragon + 1}
                    }
                    return (visitasAragon/5)*100
                case "10AR":
                    var visitasAragon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Aragon"){visitasAragon = visitasAragon + 1}
                    }
                    return (visitasAragon/10)*100
                case "25AR":
                    var visitasAragon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Aragon"){visitasAragon = visitasAragon + 1}
                    }
                    return (visitasAragon/25)*100
                case "50AR":
                    var visitasAragon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Aragon"){visitasAragon = visitasAragon + 1}
                    }
                    return (visitasAragon/50)*100
                case "100AR":
                    var visitasAragon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Aragon"){visitasAragon = visitasAragon + 1}
                    }
                    return (visitasAragon/100)*100
                case "5CAT":
                    var visitasCataluna = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cataluna"){visitasCataluna = visitasCataluna + 1}
                    }
                    return (visitasCataluna/5)*100
                case "10CAT":
                    var visitasCataluna = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cataluna"){visitasCataluna = visitasCataluna + 1}
                    }
                    return (visitasCataluna/10)*100
                case "25CAT":
                    var visitasCataluna = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cataluna"){visitasCataluna = visitasCataluna + 1}
                    }
                    return (visitasCataluna/25)*100
                case "50CAT":
                    var visitasCataluna = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cataluna"){visitasCataluna = visitasCataluna + 1}
                    }
                    return (visitasCataluna/50)*100
                case "100CAT":
                    var visitasCataluna = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Cataluna"){visitasCataluna = visitasCataluna + 1}
                    }
                    return (visitasCataluna/100)*100
                case "5CYL":
                    var visitasCastillaLeon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla y Leon"){visitasCastillaLeon = visitasCastillaLeon + 1}
                    }
                    return (visitasCastillaLeon/5)*100
                case "10CYL":
                    var visitasCastillaLeon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla y Leon"){visitasCastillaLeon = visitasCastillaLeon + 1}
                    }
                    return (visitasCastillaLeon/10)*100
                case "25CYL":
                    var visitasCastillaLeon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla y Leon"){visitasCastillaLeon = visitasCastillaLeon + 1}
                    }
                    return (visitasCastillaLeon/25)*100
                case "50CYL":
                    var visitasCastillaLeon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla y Leon"){visitasCastillaLeon = visitasCastillaLeon + 1}
                    }
                    return (visitasCastillaLeon/50)*100
                case "100CYL":
                    var visitasCastillaLeon = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla y Leon"){visitasCastillaLeon = visitasCastillaLeon + 1}
                    }
                    return (visitasCastillaLeon/100)*100
                case "5MA":
                    var visitasMadrid = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Madrid"){visitasMadrid = visitasMadrid + 1}
                    }
                    return (visitasMadrid/5)*100
                case "10MA":
                    var visitasMadrid = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Madrid"){visitasMadrid = visitasMadrid + 1}
                    }
                    return (visitasMadrid/10)*100
                case "25MA":
                    var visitasMadrid = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Madrid"){visitasMadrid = visitasMadrid + 1}
                    }
                    return (visitasMadrid/25)*100
                case "50MA":
                    var visitasMadrid = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Madrid"){visitasMadrid = visitasMadrid + 1}
                    }
                    return (visitasMadrid/50)*100
                case "100MA":
                    var visitasMadrid = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Madrid"){visitasMadrid = visitasMadrid + 1}
                    }
                    return (visitasMadrid/100)*100
                case "5VA":
                    var visitasValencia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Valencia"){visitasValencia = visitasValencia + 1}
                    }
                    return (visitasValencia/5)*100
                case "10VA":
                    var visitasValencia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Valencia"){visitasValencia = visitasValencia + 1}
                    }
                    return (visitasValencia/10)*100
                case "25VA":
                    var visitasValencia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Valencia"){visitasValencia = visitasValencia + 1}
                    }
                    return (visitasValencia/25)*100
                case "50VA":
                    var visitasValencia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Valencia"){visitasValencia = visitasValencia + 1}
                    }
                    return (visitasValencia/50)*100
                case "100VA":
                    var visitasValencia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Valencia"){visitasValencia = visitasValencia + 1}
                    }
                    return (visitasValencia/100)*100
                case "5EX":
                    var visitasExtremadura = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Extremadura"){visitasExtremadura = visitasExtremadura + 1}
                    }
                    return (visitasExtremadura/5)*100
                case "10EX":
                    var visitasExtremadura = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Extremadura"){visitasExtremadura = visitasExtremadura + 1}
                    }
                    return (visitasExtremadura/10)*100
                case "25EX":
                    var visitasExtremadura = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Extremadura"){visitasExtremadura = visitasExtremadura + 1}
                    }
                    return (visitasExtremadura/25)*100
                case "50EX":
                    var visitasExtremadura = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Extremadura"){visitasExtremadura = visitasExtremadura + 1}
                    }
                    return (visitasExtremadura/50)*100
                case "100EX":
                    var visitasExtremadura = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Extremadura"){visitasExtremadura = visitasExtremadura + 1}
                    }
                    return (visitasExtremadura/100)*100
                case "5CYLA":
                    var visitasCastillaLaMancha = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla La Mancha"){visitasCastillaLaMancha = visitasCastillaLaMancha + 1}
                    }
                    return (visitasCastillaLaMancha/5)*100
                case "10CYLA":
                    var visitasCastillaLaMancha = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla La Mancha"){visitasCastillaLaMancha = visitasCastillaLaMancha + 1}
                    }
                    return (visitasCastillaLaMancha/10)*100
                case "25CYLA":
                    var visitasCastillaLaMancha = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla La Mancha"){visitasCastillaLaMancha = visitasCastillaLaMancha + 1}
                    }
                    return (visitasCastillaLaMancha/25)*100
                case "100CYLA":
                    var visitasCastillaLaMancha = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Castilla La Mancha"){visitasCastillaLaMancha = visitasCastillaLaMancha + 1}
                    }
                    return (visitasCastillaLaMancha/100)*100
                case "5MU":
                    var visitasMurcia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Murcia"){visitasMurcia = visitasMurcia + 1}
                    }
                    return (visitasMurcia/5)*100
                case "10MU":
                    var visitasMurcia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Murcia"){visitasMurcia = visitasMurcia + 1}
                    }
                    return (visitasMurcia/10)*100
                case "25MU":
                    var visitasMurcia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Murcia"){visitasMurcia = visitasMurcia + 1}
                    }
                    return (visitasMurcia/25)*100
                case "50MU":
                    var visitasMurcia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Murcia"){visitasMurcia = visitasMurcia + 1}
                    }
                    return (visitasMurcia/50)*100
                case "100MU":
                    var visitasMurcia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Murcia"){visitasMurcia = visitasMurcia + 1}
                    }
                    return (visitasMurcia/100)*100
                case "5AN":
                    var visitasAndalucia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Andalucia"){visitasAndalucia = visitasAndalucia + 1}
                    }
                    return (visitasAndalucia/5)*100
                case "10AN":
                    var visitasAndalucia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Andalucia"){visitasAndalucia = visitasAndalucia + 1}
                    }
                    return (visitasAndalucia/10)*100
                case "25AN":
                    var visitasAndalucia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Andalucia"){visitasAndalucia = visitasAndalucia + 1}
                    }
                    return (visitasAndalucia/25)*100
                case "50AN":
                    var visitasAndalucia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Andalucia"){visitasAndalucia = visitasAndalucia + 1}
                    }
                    return (visitasAndalucia/50)*100
                case "100AN":
                    var visitasAndalucia = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Andalucia"){visitasAndalucia = visitasAndalucia + 1}
                    }
                    return (visitasAndalucia/100)*100
                case "5CAN":
                    var visitasCanarias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Canarias"){visitasCanarias = visitasCanarias + 1}
                    }
                    return (visitasCanarias/5)*100
                case "10CAN":
                    var visitasCanarias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Canarias"){visitasCanarias = visitasCanarias + 1}
                    }
                    return (visitasCanarias/10)*100
                case "25CAN":
                    var visitasCanarias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Canarias"){visitasCanarias = visitasCanarias + 1}
                    }
                    return (visitasCanarias/25)*100
                case "50CAN":
                    var visitasCanarias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Canarias"){visitasCanarias = visitasCanarias + 1}
                    }
                    return (visitasCanarias/50)*100
                case "100CAN":
                    var visitasCanarias = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Canarias"){visitasCanarias = visitasCanarias + 1}
                    }
                    return (visitasCanarias/100)*100
                case "5IB":
                    var visitasIslasBaleares = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Islas Baleares"){visitasIslasBaleares = visitasIslasBaleares + 1}
                    }
                    return (visitasIslasBaleares/5)*100
                case "10IB":
                    var visitasIslasBaleares = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Islas Baleares"){visitasIslasBaleares = visitasIslasBaleares + 1}
                    }
                    return (visitasIslasBaleares/10)*100
                case "25IB":
                    var visitasIslasBaleares = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Islas Baleares"){visitasIslasBaleares = visitasIslasBaleares + 1}
                    }
                    return (visitasIslasBaleares/25)*100
                case "50IB":
                    var visitasIslasBaleares = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Islas Baleares"){visitasIslasBaleares = visitasIslasBaleares + 1}
                    }
                    return (visitasIslasBaleares/50)*100
                case "100IB":
                    var visitasIslasBaleares = 0
                    for(var i=0;i<lugaresVisitados.length;i++){
                        if(lugaresVisitados[i].ccaa == "Islas Baleares"){visitasIslasBaleares = visitasIslasBaleares + 1}
                    }
                    return (visitasIslasBaleares/100)*100
                default: 
                    return 0
            }
            
        }else {
            for(var i=0;i<logrosUsuario.length;i++){
                if (logrosUsuario[i].logroToken == logro.logroToken){return 100}
            }
            return 0
        }

    };

module.exports = {divideIntoGroups,calculatePercent};