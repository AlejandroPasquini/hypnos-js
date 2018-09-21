
var models = require('./models');

models.query(() => models.clients.findOne({ where: {email: 'asd'} }).then(clients => {
    console.log(clients)
}))


console.log("hola")
