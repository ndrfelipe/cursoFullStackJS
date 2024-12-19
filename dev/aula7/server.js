const express = require('express');
const app = express();


app.get('/', (req, res) => {
   res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="input-text">
            <button>Enviar form</button>
        </form>
    `);
});


app.post('/', (req, res) => {
    res.send(`Formulário enviado com sucesso.`)
});

app.get('/postagens', (req, res) => {
    res.send("Seja bem vindo à aba de postagens. ")
})


// meu método
// const port = 3000
// if (app.listen(port)) console.log("Servidor iniciado na porta: " + port)

app.listen(3000, () =>{
    console.log("http://localhost:3000")
    console.log("Servidor rodando na porta 3000")
})
