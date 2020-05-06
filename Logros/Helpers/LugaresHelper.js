
/*
    IDLOGROS
         1(LV) -> Ha visitado un lugar por primera vez
         2(1LV) -> Es tu 1 lugar del juego
         3(5LV) -> Es tu 5 lugar visitado
         4(10LV) -> Es tu 10 lugar visitado
         4(15LV) -> Es tu 15 lugar visitado
         5(20LV) -> Es tu 20 lugar visitado
         6(25LV) -> Es tu 25 lugar visitado
         7(30LV) -> Es tu 30 lugar visitado
         8(40LV) -> Es tu 40 lugar visitado
         9(50LV) -> Es tu 50 lugar visitado
         10(75LV) -> Es tu 75 lugar visitado
         11(100LV) -> Es tu 100 lugar visitado
         12(150LV) -> Es tu 150 lugar visitado
         13(200LV) -> Es tu 200 lugar visitado
         14(250LV) -> Es tu 250 lugar visitado
         15(300LV) -> Es tu 300 lugar visitado
         16(400LV) -> Es tu 400 lugar visitado
         17(500LV) -> Es tu 500 lugar visitado
         18(600LV) -> Es tu 600 lugar visitado
         19(750LV) -> Es tu 750 lugar visitado
         20(1000LV) -> Es tu 1000 lugar visitado
         21(1250LV) -> Es tu 1250 lugar visitado
         22(1500LV) -> Es tu 1500 lugar visitado
         23(2000LV) -> Es tu 2000 lugar visitado
         
*/

const tokenLogros = [
    '1LV',
    '5LV',
    '10LV',
    '15LV',
    '20LV',
    '25LV',
    '30LV',
    '40LV',
    '50LV',
    '75LV',
    '100LV',
    '150LV',
    '200LV',
    '250LV',
    '300LV',
    '400LV',
    '500LV',
    '600LV',
    '750LV',
    '1000LV',
    '1250LV',
    '1500LV',
    '2000LV']


    getLugaresLogros = function(visitas){
        var logros = []
        switch(visitas.length){
            case 0:
                logros.push(tokenLogros[0]);
                break;
            case 4:
                logros.push(tokenLogros[1]);
                break;
            case 9:
                logros.push(tokenLogros[2]);
                break;
            case 14:
                logros.push(tokenLogros[3]);
                break;
            case 19:
                logros.push(tokenLogros[4]);
                break;
            case 24:
                logros.push(tokenLogros[5]);
                break;
            case 29:
                logros.push(tokenLogros[6]);
                break;
            case 39:
                logros.push(tokenLogros[7]);
                break;
            case 49:
                logros.push(tokenLogros[8]);
                break;
            case 74:
                logros.push(tokenLogros[9]);
                break;
            case 99:
                logros.push(tokenLogros[10]);
                break;
            case 149:
                logros.push(tokenLogros[11]);
                break;
            case 199:
                logros.push(tokenLogros[12]);
                break;
            case 249:
                logros.push(tokenLogros[13]);
                break;
            case 299:
                logros.push(tokenLogros[14]);
                break;
            case 399:
                logros.push(tokenLogros[15]);
                break;
            case 499:
                logros.push(tokenLogros[16]);
                break;
            case 599:
                logros.push(tokenLogros[17]);
                break;
            case 749:
                logros.push(tokenLogros[18]);
                break;
            case 999:
                logros.push(tokenLogros[19]);
                break;
            case 1249:
                logros.push(tokenLogros[20]);
                break;
            case 1499:
                logros.push(tokenLogros[21]);
                break;
            case 1999:
                logros.push(tokenLogros[22]);
                break;
            default:
                break;
        }
        return logros;
    }


    module.exports = {getLugaresLogros}