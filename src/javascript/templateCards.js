import { Api } from "../controller/Api.js"

const vitrineDaHome = await Api.listarProdutos()

export async function templateCards(dadosDoCard) {

    const startTemplate = document.querySelector('#templatesCards')
    startTemplate.innerHTML = ''
    const ul = document.createElement('ul')
    ul.classList.add('startTemplate')
    startTemplate.appendChild(ul)
    ul.innerHTML = ''


    // const dadosDoCard = await Api.listarProdutos()
    // console.log(dadosDoCard)
    dadosDoCard.forEach((elementoAtual) => {
        const li = document.createElement('li')
        li.classList.add('liVitrine')
        const imgProduto = document.createElement('img')
        imgProduto.id = 'imgProduto'
        const nomeProduto = document.createElement('h3')
        const descricaoProduto = document.createElement('h5')
        const categoria = document.createElement('span')
        const div = document.createElement('div')
        div.id = "divAlinharPrecoEcarrinho"
        const valor = document.createElement('span')
        valor.id = 'valor'
        const pngCarrinho = document.createElement('img')
        pngCarrinho.id = 'pngCarrinho'

        imgProduto.src = elementoAtual.imagem
        nomeProduto.innerText = elementoAtual.nome
        descricaoProduto.innerText = elementoAtual.descricao
        categoria.innerText = elementoAtual.categoria
        valor.innerText = `R$${elementoAtual.preco},00`
        pngCarrinho.src = "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg"

        li.appendChild(imgProduto)
        li.appendChild(nomeProduto)
        li.appendChild(descricaoProduto)
        li.appendChild(categoria)
        li.appendChild(div)
        div.appendChild(valor)
        div.appendChild(pngCarrinho)

        ul.appendChild(li)


    })

}

templateCards(vitrineDaHome)