require('./database')
const app = require('./app')


app.listen(app.get('port'))
console.log('Servidor conectado', app.get('port'));