//importamos express y rutas
const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const bodyParser = require('body-parser');
// importamos rutas resumidas en routes/index.js
const routes = require('./routes/index.js');

//Incializamos el server
const server = express();

//para que reconozca formato json
server.use(express.json());

server.name = 'API';

server.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
server.use(bodyParser.json({limit: '50mb'}));
server.use(cookieParser());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  // ir a las rutas
  server.use('/', routes);

  
  // Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

  module.exports = server;

