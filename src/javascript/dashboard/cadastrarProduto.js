import {Api} from '/src/controller/Api.js'
import {obterInformacoesProdutos} from './renderizarProdutos.js'

localStorage.setItem('Token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4N2UyZjRhLTRiN2ItNDdlZi05ZjBlLTlmNTllZDI5YzMxYyIsImlhdCI6MTY1MjgxOTgzNCwiZXhwIjoxNjUzNjgzODM0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.X8L-U8dzTMrftrdZHt7gyg54dREulC7yB0YSwLrQoks')

let categoriaDefinida = ""

async function cadastarNovoProduto(){
    const nome = document.getElementById("Nome").value
    const preco = document.getElementById("preco").value
    const categoria = categoriaDefinida
    const img = document.getElementById("imagem").value
    const desc = document.getElementById("Descricao").value

    const dadosProduto = {
        "nome":nome,
        "preco":preco,
        "categoria":categoria,
        "imagem":img,
        "descricao":desc
    }

    const resposta = await Api.criarProduto(dadosProduto)

    let model = document.querySelector("#modal")
    model.classList.remove("modal-on")
    model.classList.add("modal-off")

    obterInformacoesProdutos("Todos")

    const form = document.getElementById('dados').children
    for(let i = 0; i < form.length; i++){
        form[i].value = ''
    }
 
}
function definirCategoria(txt){
    categoriaDefinida = txt
    
}

const btnCadastrar = document.getElementById("btnCadastrar")
const btnCategoria = document.querySelectorAll(".Categoria")

btnCategoria.forEach(element => {
    element.onclick = () =>{
        definirCategoria(element.value)
    }
})

btnCadastrar.addEventListener("click",()=>{
    cadastarNovoProduto()
})
