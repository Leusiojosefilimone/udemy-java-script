function getDados(mes ,temp){
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof mes !== 'string') reject('Erro a mensagem não é uma string')
                resolve(mes)
            }, temp);        
        })
}
getDados('obtendo dados da API',2000 )
.then((res) => {
    console.log(res)
    return getDados('tratando os dados da API', 1000)
    .then((res) => {
        console.log(res)
        return getDados( 888, 1500).then((res) => {
            console.log(res)})
            .catch(e => console.log(e))
            .then(() => console.log('Renderizar os dados da Api'))
    })
})
console.log('isso será exibido primeiro')