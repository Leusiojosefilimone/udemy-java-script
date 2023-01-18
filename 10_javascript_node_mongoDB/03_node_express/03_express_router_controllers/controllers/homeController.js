module.exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="name"></br>
    Empresa do cliente: <input type="text" name="empresa">
    <button>Enviar</button>
</form>`);
}
module.exports.postInicial = (req, res) => {
    console.log(req.body)
    res.send(`
    <p>O teu nome é ${ req.body.name}</p>
    <p>A tua empresa é ${ req.body.empresa}</p>`)}

