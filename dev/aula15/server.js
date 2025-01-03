//MongoDB - Conexão e primeir model
require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() =>{
        app.emit('ready');
    })
    .catch(e => console.log(e));


const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');
const session = require("express-session");
const MongoStore = require("connect-mongo")
const flash = require('connect-flash');

// Processa os dados enviados no corpo da requisição (como formulários).
app.use(express.urlencoded( {extended: true} ));

// Configura um diretório estático para servir arquivos ao cliente.
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'aula 15',
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash())

// Define o diretório onde estão os arquivos de templates
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Configura o EJS como o mecanismo de templates para gerar HTML dinâmico.
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('ready', ()=>{
    app.listen(3000, () =>{
        console.log("http://localhost:3000")
        console.log("Servidor rodando na porta 3000")
    });
});


