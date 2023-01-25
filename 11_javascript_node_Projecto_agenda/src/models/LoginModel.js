
const mongoose = require('mongoose');
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password:  { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
  constructor(body){
    this.body = body;
    this.erros = [];
    this.user = null;
  }

  async register(){
    this.valida()
    if(this.erros.length > 0 )return;
    try{
      this.user = await LoginModel.create(this.body)
    }
    catch(e){
      console.log(e)
    }
    
  }
  valida(){
    console.log(this.body.password)
    if(!validator.isEmail(this.body.email)) this.erros.push('Email invalido')
    if(this.body.password.length < 3 || this.body.password.length > 50) this.erros.push('A senha deve ter  de 3 a 50 caracteres')
  }

  cleanUp(){
    for (const key in this.body){
      if (this.body[key] !== 'string'){
        this.body[key] = ''
      }
    }
    this.body = {
      emai: this.body.email,
      password: this.body.password
    }
  }
}

module.exports = Login;
