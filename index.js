
var models = require('./models');

models.query(() => models.clients.findAll({
    include: models.client_services }).then(clients => {
console.log(clients[0].client_services)
}))


console.log("hola")
