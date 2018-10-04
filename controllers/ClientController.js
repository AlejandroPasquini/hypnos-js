
var models = require('./models');
const Client = models.clients

exports.Create = function(req){
    Client.create({
        firstname: "mateo",
        lastname: "lux",
        email: "alejandro@asd.com"
    })
}