const express = require('express')
const Routes = require('./router')
const path = require('path')
const app = express()

app.use(express.urlencoded( {extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(Routes)

app.listen(3800,() => {
    console.log('servidor executando na porta 3800')
})