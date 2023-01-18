const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const {globalMiddleware} = require('./src/middlewares/middleware')

// Rotas da home
route.get('/',  globalMiddleware, homeController.paginaInicial, globalMiddleware);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
