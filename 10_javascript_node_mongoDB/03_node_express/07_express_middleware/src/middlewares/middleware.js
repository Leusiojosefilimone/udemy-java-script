module.exports.globalMiddleware = (req, res, next)=>{
    console.log()
    console.log('Eu aqui de Novo')
    console.log()
    next()
} 