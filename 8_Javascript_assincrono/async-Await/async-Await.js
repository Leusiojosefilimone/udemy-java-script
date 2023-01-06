function getDados(msg ,temp){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') reject('Erro a mensagem não é uma string')
            resolve(msg)
        }, temp);        
    })
}

async function Promises(){
try{
const promise1 = await getDados('Promise 1',2000 )
  console.log(promise1)
const promise2 = await getDados('Promise 2', 1000)
  console.log(promise2)
const promise3 = await getDados( 'Promise 3', 3500)
  console.log(promise3)
console.log('isso será exibido por ultimo')
}
catch{
  console.log(e => console.log(e))
}
}
Promises()
