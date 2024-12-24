//Express Views 
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Processa os dados enviados no corpo da requisição (como formulários).
app.use(express.urlencoded( {extended: true} ));

// Configura um diretório estático para servir arquivos ao cliente.
app.use(express.static(path.resolve(__dirname, 'public')));

// Define o diretório onde estão os arquivos de templates
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Configura o EJS como o mecanismo de templates para gerar HTML dinâmico.
app.set('view engine', 'ejs');


app.use(routes);

app.listen(3000, () =>{
    console.log("http://localhost:3000")
    console.log("Servidor rodando na porta 3000")
})
