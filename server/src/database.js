const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost/mean-employees", {
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        // useFindAndModify: false
    })
    .then((db) => console.log("Base de Datos conectada"))
    .catch((err) => console.log(err))

