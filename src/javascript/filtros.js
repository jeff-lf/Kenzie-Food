import { Api } from "../controller/Api.js"
import { templateCards } from "./templateCards.js"

const vitrineDaHome = await Api.listarProdutos()
console.log(vitrineDaHome)

function filtrarPanificadora() {
    const panificadora = vitrineDaHome.filter((produtos) => {
        return produtos.categoria === 'Panificadora'
    })
    templateCards(panificadora)
}

const buscaPao = document.querySelector('#buttonPao')
buscaPao.addEventListener('click', filtrarPanificadora)

function filtrarFrutas() {
    const frutas = vitrineDaHome.filter((produtos) => {
        return produtos.categoria === 'Frutas'
    })
    templateCards(frutas)
}

const buscaFrutas = document.querySelector('#buttonFrutas')
buscaFrutas.addEventListener('click', filtrarFrutas)

function filtrarBebidas() {
    const bebidas = vitrineDaHome.filter((produtos) => {
        return produtos.categoria === 'Bebidas'
    })
    templateCards(bebidas)
}

const buscaBebidas = document.querySelector('#buttonBebidas')
buscaBebidas.addEventListener('click', filtrarBebidas)

function mostrarTodos() {
    templateCards(vitrineDaHome)
}

const buscaTodos = document.querySelector('#buttonTodos')
buscaTodos.addEventListener('click', mostrarTodos)