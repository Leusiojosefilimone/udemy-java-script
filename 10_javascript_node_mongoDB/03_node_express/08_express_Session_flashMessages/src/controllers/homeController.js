/*const HomeModel = require('../models/HomeModel')

HomeModel.create({
  titulo: 'Ola Mundo',
  descricao:'Eu sou a descricao'
})
.then((dados) => console.log(dados))
.catch(e => console.log(e))
*/
exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
