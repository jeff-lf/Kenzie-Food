import { Api } from "../controller/Api.js"
//import { addCarrinhoDinamico } from "./addcarrinho.js"

let carrinhoAtual = []
console.log(carrinhoAtual)

const vitrineDaHome = await Api.listarProdutos()

export async function templateCards(dadosDoCard) {

    const template = document.querySelector('#templatesCards')
    template.innerHTML = ''

    const startTemplate = document.querySelector('#templatesCards')
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
        const button = document.createElement('button')
        button.id = elementoAtual.id
        button.classList.add('clickCarrinho')
        button.addEventListener('click', () => {
            const carrinho = document.querySelector('#carrinhoDeComprasDinamico')
            const li = document.createElement('li')
            const imgDoItem = document.createElement('img')
            const containerCarrinho = document.createElement('div')
            containerCarrinho.id = 'containerCarrinho'
            const nome = document.createElement('h3')
            const categoria = document.createElement('p')
            const valor = document.createElement('span')
            const id = button.getAttribute('id')

            const productFind = vitrineDaHome.find((elementoAtual) => {
                console.log(elementoAtual)
                return elementoAtual.id == id
            })

            carrinhoAtual.push(productFind)
            console.log(productFind)
            imgDoItem.src = elementoAtual.imagem
            nome.innerText = elementoAtual.nome
            categoria.innerText = elementoAtual.categoria
            valor.innerText = elementoAtual.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
            })

            carrinho.appendChild(li)
            li.appendChild(imgDoItem)
            li.appendChild(containerCarrinho)
            containerCarrinho.appendChild(nome)
            containerCarrinho.appendChild(categoria)
            containerCarrinho.appendChild(valor)

            let total = carrinhoAtual.reduce((a, elementoAtual) => {
                return a + Number(elementoAtual.preco)
            }, 0)
            const quantidade = document.querySelector('#quantidade')
            const totalValor = document.querySelector('#totalValor')
            quantidade.innerText = `${carrinhoAtual.length}`
            totalValor.innerText = ` Total: R$${total},00`
        })
        const pngCarrinho = document.createElement('img')
        pngCarrinho.id = 'pngCarrinho'


        imgProduto.src = elementoAtual.imagem
        nomeProduto.innerText = elementoAtual.nome
        descricaoProduto.innerText = elementoAtual.descricao
        categoria.innerText = elementoAtual.categoria
        valor.innerText = elementoAtual.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        })



        pngCarrinho.src = "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg"

        li.appendChild(imgProduto)
        li.appendChild(nomeProduto)
        li.appendChild(descricaoProduto)
        li.appendChild(categoria)
        li.appendChild(div)
        div.appendChild(valor)
        button.appendChild(pngCarrinho)
        div.appendChild(button)

        ul.appendChild(li)


    })

}

templateCards(vitrineDaHome)