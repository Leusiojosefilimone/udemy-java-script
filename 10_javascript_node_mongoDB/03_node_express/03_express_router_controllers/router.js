const express = require('express')
const routes = express.Router()
const homeController = require('./controllers/homeController')

routes.get('/', homeController.paginaInicial)
routes.post('/', homeController.postInicial)

module.exports = routes