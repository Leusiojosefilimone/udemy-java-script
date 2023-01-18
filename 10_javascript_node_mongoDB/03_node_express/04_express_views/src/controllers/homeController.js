module.exports.paginaInicial = (req, res) => {
    res.render('index');
}
module.exports.postInicial = (req, res) => {
    console.log(req.body)
    res.send(`
    <p>O teu nome é ${ req.body.name}</p>
    <p>A tua empresa é ${ req.body.empresa}</p>`)}

