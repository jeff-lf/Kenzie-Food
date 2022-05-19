import { Api } from "../controller/Api.js"

const dadosDoCard = await Api.listarProdutos()

function filtrarPanificadora() {
    const panificadora = dadosDoCard.filter((produtos) => {
        return produtos.categoria === 'Panificadora'
    })
    templateCards(panificadora)
}