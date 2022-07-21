import {Api} from '/src/controller/Api.js'

const dados = await Api.listarMeusProdutos()
export async function  obterInformacoesProdutos(arr, filtro,tipoFiltro ){
    document.querySelector(".produtos").innerHTML = ''


     arr.forEach((element)=>{
        const imagemProduto     = element.imagem
        const nomeProduto       = element.nome
        const categoriaProduto  = element.categoria
        const descProduto       = element.descricao.slice(0,35) + '...'
        const idProduto         = element.id

        if(tipoFiltro == "Categoria"){
            if(categoriaProduto == filtro){
                renderizarProdutos(imagemProduto,nomeProduto,categoriaProduto,descProduto,idProduto)
            }
            else if(filtro == "Todos"){
                renderizarProdutos(imagemProduto,nomeProduto,categoriaProduto,descProduto,idProduto)
            }
        }
        else if(tipoFiltro=="Input"){
            if(nomeProduto==filtro){
                renderizarProdutos(imagemProduto,nomeProduto,categoriaProduto,descProduto,idProduto)
            }
        }
        

    })
    
}

async function renderizarProdutos(imagemProduto, nomeProduto, categoriaProduto,descProduto,idProduto){
    
    //criar os elementos do produto
    const li            = document.createElement('li');
    const div           = document.createElement("div")
    const divImg        = document.createElement("div")
    const img           = document.createElement("img")
    const nome          = document.createElement("h2")
    const categorias    = document.createElement("span")
    const divCategoria  = document.createElement("div")
    const desc          = document.createElement("span")
    const divBotoes     = document.createElement("div")
    const btnEditar     = document.createElement("button")
    const btnExcluir    = document.createElement("button")

    //setar as propriedades

    img.src              = imagemProduto
    nome.innerText       = nomeProduto
    categorias.innerText = categoriaProduto
    desc.innerText       = descProduto
    btnEditar.innerHTML  = '&#128393'
    btnExcluir.innerHTML = '&#128465'


    //Deletar Produto
    btnExcluir.addEventListener('click',async function(){
        const divDel = document.getElementById('divExcluir')
        divDel.classList.remove('excluir-off')
        divDel.classList.add('excluir-on')

        const btnDeletar  = document.querySelector("#btnDeletar")
        btnDeletar.addEventListener("click",async function(){
            await Api.deletarProduto(idProduto)
            obterInformacoesProdutos("Todos","Categoria")
            divDel.classList.remove('excluir-on')
            divDel.classList.add('excluir-off')
            window.location = '../pages/dashboard.html'
        })   
    })


    //Editar Produto
    btnEditar.addEventListener('click',async function(){
        const divDel = document.getElementById('modalEditar')
        divDel.classList.remove('modal-off')
        divDel.classList.add('modal-on')
        
        let produtoParaEditar = {}
        const meuProduto = await Api.listarMeusProdutos()
        meuProduto.forEach((elem)=>{
            if(elem.id === idProduto){
                produtoParaEditar = elem
                return elem
            }
        })
        const nomeEditar = document.getElementById('NomeEditar')
        nomeEditar.value = produtoParaEditar.nome

        const descricaoEditar = document.getElementById('DescricaoEditar')
        descricaoEditar.value = produtoParaEditar.descricao

        const precoEditar = document.getElementById('precoEditar')
        precoEditar.value = produtoParaEditar.preco

        const imagemEditar = document.getElementById('imagemEditar')
        imagemEditar.value = produtoParaEditar.imagem

        console.log(produtoParaEditar)

        const buttonEditar = document.getElementById('buttonEditar')
        buttonEditar.addEventListener('click', async (e)=>{
            const newObj = {}
            if(produtoParaEditar.nome !== nomeEditar.value){
                newObj.nome = nomeEditar.value
            }
            if(produtoParaEditar.descricao !== descricaoEditar.value){
               newObj.descricao = descricaoEditar.value
            }
            if(produtoParaEditar.preco !== parseInt(precoEditar.value)){
                newObj.preco = parseInt(precoEditar.value)
            }
            if(produtoParaEditar.imagem !== imagemEditar.value){
                newObj.imagem = imagemEditar.value
            }

            await Api.atualizarProduto(newObj, produtoParaEditar.id)

            divDel.classList.remove('modal-on')
            divDel.classList.add('modal-off')
            obterInformacoesProdutos(dados, "Todos","Categoria")
            window.location = '../pages/dashboard.html'
        })

       
    })

    
    //setar as classes
    div.classList.add('produtoItem')
    desc.classList.add('descricaoProduto')
    divCategoria.classList.add('categoria')
    divImg.classList.add("divImg")
    desc.classList.add('descricao')
    divBotoes.classList.add('divBotoes')


    //appends
    divBotoes.append(btnEditar,btnExcluir)
    divImg.append(img,nome)
    divCategoria.append(categorias)
    div.append(divImg,divCategoria,desc,divBotoes)
    li.append(div)


    document.querySelector(".produtos").append(li)
}

obterInformacoesProdutos(dados, "Todos","Categoria")

//coletando os botoes para os filtros

const btnTodos            = document.getElementById("filtroTodos")
const btnPanificadora     = document.getElementById("filtroPanificadora")
const btnFruta            = document.getElementById("filtroFruta")
const btnBebida           = document.getElementById("filtroBebida")
const btnAdicionarProduto = document.querySelector(".btnAdicionar")
const btnFecharModel      = document.querySelector("#fecharModal")
const btnFecharModelEditar= document.querySelector("#fecharModalEditar")
const btnFecharDeletar    = document.querySelectorAll(".fecharExcluir")


btnTodos.focus()
btnTodos.addEventListener('click', () =>{
    obterInformacoesProdutos(dados,"Todos","Categoria")
})
btnPanificadora.addEventListener('click', ()=>{
    obterInformacoesProdutos(dados,"Panificadora","Categoria")
})
btnFruta.addEventListener('click', ()=>{
    obterInformacoesProdutos(dados,"Frutas","Categoria")
})
btnBebida.addEventListener("click",()=>{
    obterInformacoesProdutos(dados,"Bebidas","Categoria")
})
btnAdicionarProduto.addEventListener("click",()=>{
    let model = document.querySelector("#modal")
    model.classList.remove("modal-off")
    model.classList.add("modal-on")
})
btnFecharModel.addEventListener("click",()=>{
    let model = document.querySelector("#modal")
    model.classList.remove("modal-on")
    model.classList.add("modal-off")
})


btnFecharModelEditar.addEventListener("click",()=>{
    let model = document.querySelector("#modalEditar")
    model.classList.remove("modal-on")
    model.classList.add("modal-off")
})


btnFecharDeletar.forEach(element=>{
    element.addEventListener("click", ()=>{
        const divDel = document.getElementById('divExcluir')
        divDel.classList.remove('excluir-on')
        divDel.classList.add('excluir-off')
    })
})




//pesquisar por nome
const produtos = await Api.listarMeusProdutos()


const inputPesquisa = document.getElementById('inputPesquisa')
inputPesquisa.addEventListener('keypress', pesquisaProdutos)
inputPesquisa.addEventListener('keydown', (event) => {
    if(event.key === 'Backspace'){
    
    let produtosPesquisados = []
    let textInput0 = (inputPesquisa.value)
    let textInput = textInput0.substring(0, textInput0.length - 1)

    if(textInput === ''){
        obterInformacoesProdutos(produtos,"Todos","Categoria")
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
    obterInformacoesProdutos(produtosPesquisados,"Todos","Categoria")
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
    obterInformacoesProdutos(produtosPesquisados,"Todos","Categoria")
}


//Login


const buttonLogin = document.getElementById('imgLogin')
buttonLogin.addEventListener('click', (e)=>{
    if(localStorage.Token !== undefined){
        menu.innerHTML = ''
        menu.classList.toggle('menuOff')
        const liHome = document.createElement('li')
        liHome.innerText = 'Home'
        liHome.id = 'home'
        const liDash = document.createElement('li')
        liDash.innerText = 'Dashboard'
        liDash.id = 'dash'
        const liLogout = document.createElement('li')
        liLogout.innerText = 'Logout'
        liLogout.id = 'logout'

        menu.appendChild(liHome)
        menu.appendChild(liDash)
        menu.appendChild(liLogout)

        const buttonLogout = document.getElementById('logout')
        buttonLogout.addEventListener('click', (e)=> {
            localStorage.removeItem('Token')
            menu.classList.toggle('menuOff')
            window.location.href = '../../index.html'
        })

        const buttonHome = document.getElementById('home')
        buttonHome.addEventListener('click', (e) => {
            window.location.href = '../../index.html'
        })

        const buttonDashboard = document.getElementById('dash')
        buttonDashboard.addEventListener('click', (e)=>{
            window.location = '../pages/dashboard.html'
        })

    }else{
    modalLogin.classList.remove('modal-off')
    modalLogin.classList.add('modal-on')
    }
})