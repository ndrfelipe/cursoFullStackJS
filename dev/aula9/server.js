//Express Routers e Controllers (padrão full MVC)

const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.urlencoded( {extended: true} ));
app.use(routes);



app.listen(3000, () =>{
    console.log("http://localhost:3000")
    console.log("Servidor rodando na porta 3000")
})
