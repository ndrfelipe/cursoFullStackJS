const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello World! ') 
});

// meu método
// const port = 3000
// if (app.listen(port)) console.log("Servidor iniciado na porta: " + port)

app.listen(3000, () =>{
    console.log("http://localhost:3000")
    console.log("Servidor rodando na porta 3000")
})
