function getDados(mes ,temp){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof mes !== 'string') reject(new Error)
            resolve(mes)
        }, temp);        
    })
}
const promises = [
    getDados('1-API ', 3000),
    getDados('2-API ', 2000),
    getDados('3-API ', 1000),
    getDados('4-API ', 1090),
    //'Renderizar os dados da API'

]
Promise.all(promises)
.then(valor => console.log(valor))
.catch(e => console.log(e))

Promise.race(promises)
.then(res => console.log(res))
.catch(e => console.log(e))


function BaixarPagina(){
    const emCache = false
    if (emCache) {
        return Promise.reject('Cache encotrado!')
    }else{
        return getDados('baixou a pagina', 5000)
    }
}
BaixarPagina()
.then(res => console.log(res))
.catch(e => console.log(e))