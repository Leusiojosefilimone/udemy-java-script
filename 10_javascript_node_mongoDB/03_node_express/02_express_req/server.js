const express = require('express')
console.log(express)
const app = express()

app.get('/', (req, res) => {
    res.send('Hello <b>world</b>!');
})
app.get('/contacto', (req, res) => {
    res.send('Hello <b>obrigado</b> por entrar em contacto conosco!');
})

app.listen(3100,() => {
    console.log('servidor executando na porta 3100')
})