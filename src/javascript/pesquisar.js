import { Api } from "../controller/Api.js"
import { templateCards } from "./templateCards.js"

const produtos = await Api.listarProdutos()


const inputPesquisa = document.getElementById('pesquisaHome')
inputPesquisa.addEventListener('keypress', pesquisaProdutos)
inputPesquisa.addEventListener('keydown', (event) => {
    if(event.key === 'Backspace'){
    
    let produtosPesquisados = []
    let textInput0 = (inputPesquisa.value)
    let textInput = textInput0.substring(0, textInput0.length - 1)

    if(textInput === ''){
        templateCards(produtos)
    }else{
    produtos.forEach((elem) =>{
        let textProduto = ''
        for(let i = 0; i < textInput.length; i ++){
                textProduto += elem.nome[i]
        }
        if(textProduto.toLocaleLowerCase() === textInput.toLocaleLowerCase()){
            produtosPesquisados.push(elem)
        }
    })
    templateCards(produtosPesquisados)
    }
    }
})

function pesquisaProdutos(e){
let produtosPesquisados = []
let textInput = (inputPesquisa.value + String.fromCharCode(e.keyCode))
    produtos.forEach((elem) =>{
        let textProduto = ''
        for(let i = 0; i < textInput.length; i ++){
                textProduto += elem.nome[i]
        }
        if(textProduto.toLocaleLowerCase() === textInput.toLocaleLowerCase()){
            produtosPesquisados.push(elem)
        }
    })
    templateCards(produtosPesquisados)
}
