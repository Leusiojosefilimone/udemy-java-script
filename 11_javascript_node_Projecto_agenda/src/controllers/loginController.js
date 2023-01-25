const Login = require('../models/LoginModel')
module.exports.index = (req, res) => {
    res.render('Login')
}
module.exports.register = async function(req, res){
    const login = new Login(req.body)
    await  login.register();

     if(login.erros.length > 0){
        req.flash('erros', login.erros)
        req.session.save(function(){
            return res.redirect('/login/index')
        });
      return
     }

    res.send(login)
}