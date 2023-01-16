const path = require('path')
const escreve = require('./escrever.js')
const ler = require('./ler')

const pessoas = [
    {nome:'Carlos', empresa:'facebook',},
    {nome:'Luisa', empresa:'Twiter',},
    {nome:'Maria', empresa:'Twiter',}
]

const caminhoDoArquivo = path.resolve(__dirname, 'text.json');
const json = JSON.stringify(pessoas, '', 2)
//escreve(caminhoDoArquivo, json)

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    mostrarDados(dados)
}

function mostrarDados(dados){
    console.log(dados)
}
lerArquivo(caminhoDoArquivo)