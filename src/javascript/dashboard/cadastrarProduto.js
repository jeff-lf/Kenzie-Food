import {Api} from '/src/controller/Api.js'
import {obterInformacoesProdutos} from './renderizarProdutos.js'

localStorage.setItem('Token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiNjA0MWMxLTRmMmMtNDg5Ni1hNThiLTMyNzI0OGViOWRiZSIsImlhdCI6MTY1Mjk2NTE0NSwiZXhwIjoxNjUzODI5MTQ1LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.kkMWmWrjf_aoPb7x0taZlDGQ_afD80jtD_M28hNljYU')

let categoriaDefinida = ""

async function cadastarNovoProduto(){
    const nome = document.getElementById("Nome").value
    const preco = document.getElementById("preco").value
    const categoria = categoriaDefinida
    const img = document.getElementById("imagem").value
    const desc = document.getElementById("Descricao").value

    const dadosProduto = {
        "nome":nome,
        "preco":parseInt(preco),
        "categoria":categoria,
        "imagem":img,
        "descricao":desc
    }
    console.log(dadosProduto)
    const resposta = await Api.criarProduto(dadosProduto)


    let model = document.querySelector("#modal")
    model.classList.remove("modal-on")
    model.classList.add("modal-off")

    if(resposta.msg==null){
        
        let status = document.querySelector("#divStatus")
        status.classList.remove("divStatus-off")
        status.classList.add("divStatus-on")

        setInterval(() => {
            status.classList.remove("divStatus-on")
            status.classList.add("divStatus-off")
        }, 10000);
    }
    else{
        let status = document.querySelector("#divStatus")
        status.classList.remove("divStatus-off")
        status.classList.add("divStatus-on")

        let statusColor = document.querySelector("#status-sucess")
        statusColor.style.backgroundColor = "#FF2253"

    }

    const dados = await Api.listarMeusProdutos()
    obterInformacoesProdutos(dados,"Todos","Categoria")

    //Limpar formulario
    const form = document.getElementById('dados').children
    for(let i = 0; i < form.length; i++){
        form[i].value = ''
    }
    window.location = '../pages/dashboard.html'
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
