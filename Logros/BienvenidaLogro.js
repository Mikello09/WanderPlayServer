/*
    LB -> LogroBienvenida
*/

isFirstTimeInTheApp = function(logros){
    var logro = []
    if(logros.length == 0){
        logro.push('LB');
    } 
    return logro;
}

module.exports = {isFirstTimeInTheApp}