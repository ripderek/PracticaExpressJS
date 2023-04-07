//Crear el servidor 
const { json } = require('express');
const express = require('express');
const server = express();

//motor de plantillas
//npm install ejs
server.set('view engine','ejs');

server.use(express.urlencoded({extended:false}));
server.use(express(json));

server.use('/',require('./router'));


//Servidor
server.listen('3000', function(){
    console.log('server port 3000');
});