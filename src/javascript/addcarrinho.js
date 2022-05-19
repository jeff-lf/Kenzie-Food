// import { Api } from "../controller/Api.js"
// import { templateCards } from "./templateCards.js"

// const vitrineDaHome = await Api.listarProdutos()
// const button = document.querySelector('.clickCarrinho')

// let carrinhoAtual = []

// export function addCarrinhoDinamico() {
//     const carrinho = document.querySelector('#carrinhoDeComprasDinamico')
//     const li = document.createElement('li')
//     const imgDoItem = document.createElement('img')
//     const nome = document.createElement('h3')
//     const categoria = document.createElement('p')
//     const valor = document.createElement('span')
//     const id = button.getAttribute('id')

//     const productFind = vitrineDaHome.find((produtoAtual) => {
//         return produtoAtual.id = Number(id)
//     })

//     carrinhoAtual.push(productFind)
//     imgDoItem.src = produtoAtual.imagem
//     nome.innerText = produtoAtual.nome
//     categoria.innerText = produtoAtual.categoria
//     valor.innerText = `R$${produtoAtual.preco},00`

//     carrinho.appendChild(li)
//     li.appendChild(imgDoItem)
//     li.appendChild(nome)
//     li.appendChild(categoria)
//     li.appendChild(valor)
// }