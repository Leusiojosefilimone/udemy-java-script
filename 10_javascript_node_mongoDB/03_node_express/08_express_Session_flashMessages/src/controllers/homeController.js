/*const HomeModel = require('../models/HomeModel')

HomeModel.create({
  titulo: 'Ola Mundo',
  descricao:'Eu sou a descricao'
})
.then((dados) => console.log(dados))
.catch(e => console.log(e))
*/
exports.paginaInicial = (req, res) => {
  req.flash('info', 'ola mundo')
  res.render('index',{
    titulo: 'este é o titulo da página',
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
