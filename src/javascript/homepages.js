//HEADER - Titulo

const header = document.querySelector('header')

const h1 = document.createElement('h1')
h1.classList.add('h1-kenzie-header')
h1.innerText = 'Kenzie'

const span = document.createElement('span')
span.classList.add('span-food-header')
span.innerText = 'Food'

header.appendChild(h1)
header.appendChild(span)

// HEADER - Botão Pesquisa

const input = document.createElement('input')
input.setAttribute("type", "text")
input.classList.add('input-pesquisar')
input.placeholder = 'Pesquisar por produto'

header.appendChild(input)

// HEADER - Botão Login

const buttonLogin = document.createElement('button');
buttonLogin.classList.add('buttonLogin')

const imgLogin = document.createElement('img')
imgLogin.src = 'src/style/imgHomePage/Frame1.png'
imgLogin.classList.add('img-login')

header.appendChild(buttonLogin)
buttonLogin.appendChild(imgLogin)

//VITRINE - Filtros

const main = document.querySelector('main')
const sectionFiltros = document.createElement('section')
const nav = document.createElement('nav')

const ul = document.createElement('ul')
ul.classList.add('filtros')

const liTodos = document.createElement('li')
liTodos.classList.add('filtro-todos')
liTodos.innerText = 'Todos'

const liPanificadora = document.createElement('li')
liPanificadora.classList.add('filtro-panificadora')
liPanificadora.innerHTML = '&#129366 Panificadora'

const liFrutas = document.createElement('li')
liFrutas.classList.add('filtro-frutas')
liFrutas.innerHTML = '&#127824; Frutas'

const liBebidas = document.createElement('li')
liBebidas.classList.add('filtro-bebidas')
liBebidas.innerHTML = '&#127863 Bebidas'


main.appendChild(sectionFiltros)
sectionFiltros.appendChild(nav)
nav.appendChild(ul)
ul.appendChild(liTodos)
ul.appendChild(liPanificadora)
ul.appendChild(liFrutas)
ul.appendChild(liBebidas)

//VITRINE - Produtos(Cards)

const sectionVitrine = document.createElement('section')
sectionVitrine.classList.add('vitrine-cards')

main.appendChild(sectionVitrine)

//VITRINE - Carrinho

const buttonCarrinho = document.createElement('button');
buttonCarrinho.classList.add('button-carrinho')

const pcarrinho = document.createElement('p')
pcarrinho.classList.add('p-carrinho')
pcarrinho.innerHTML = '&#128722 Carrinho'

const divCarrinho = document.createElement('div')
divCarrinho.classList.add('div-carrinho')

const carrinhoVazio = document.createElement('div')
carrinhoVazio.classList.add('carrinho-vazio')

const imgCarrinho = document.createElement('img')
imgCarrinho.src = 'src/style/imgHomePage/carrinho2.png'
imgCarrinho.classList.add('img-carrinho')

const spanCarrinho = document.createElement('span')
spanCarrinho.innerText = 'Por enquanto não temos produtos no carrinho'
spanCarrinho.classList.add('span-carrinho')

sectionVitrine.appendChild(buttonCarrinho)
sectionVitrine.appendChild(divCarrinho)
divCarrinho.appendChild(carrinhoVazio)
carrinhoVazio.appendChild(imgCarrinho)
carrinhoVazio.appendChild(spanCarrinho)
buttonCarrinho.appendChild(pcarrinho)
