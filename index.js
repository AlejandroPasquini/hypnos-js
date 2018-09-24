
var models = require('./models');

models.query(() => models.clients.findOne({ where: {email: 'asd@asd.com'} }).then(clients => {

}))


console.log("hola")
