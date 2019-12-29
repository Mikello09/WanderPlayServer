isUserAuthenticated = function(token){
    let validationToken = "AAAAA";
    return token == validationToken
};


module.exports = {isUserAuthenticated};