const express = require('express')
const app = express()
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="name"></br>
    Empresa do cliente: <input type="text" name="empresa">
    <button>Olá Mundo</button>
</form>`);
})

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params.idUsuarios)
    console.log(req.query.nome)
    res.send('Oi ' + req.params.idUsuarios)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`<p>O teu nome é ${ req.body.name}</p>
    <p>A tua empresa é ${ req.body.empresa}</p>`)
})

app.post('/', (req, res) => {
    res.send('Ola Mundo')
})

app.get('/contacto', (req, res) => {
    res.send('Hello <b>obrigado</b> por entrar em contacto conosco!');
})

app.listen(3800,() => {
    console.log('servidor executando na porta 3800')
})