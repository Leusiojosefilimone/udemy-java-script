const mongoose = require('mongoose')
const homeShema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
})
const HomeModel = mongoose.model('home', homeShema)
class Home{


}
exports = Home
