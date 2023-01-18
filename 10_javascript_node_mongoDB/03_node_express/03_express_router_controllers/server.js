const express = require('express')
const Routes = require('./router')
const app = express()

app.use(express.urlencoded( {extended: true}))
app.use(Routes)

app.listen(3800,() => {
    console.log('servidor executando na porta 3800')
})