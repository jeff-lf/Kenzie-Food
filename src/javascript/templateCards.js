import { Api } from "../controller/Api.js";
//import { addCarrinhoDinamico } from "./addcarrinho.js"

let carrinhoAtual = [];

const vitrineDaHome = await Api.listarProdutos();

export async function templateCards(dadosDoCard) {
  const startTemplate = document.querySelector("#templatesCards");
  startTemplate.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("startTemplate");
  startTemplate.appendChild(ul);
  ul.innerHTML = "";

  // const dadosDoCard = await Api.listarProdutos()
  // console.log(dadosDoCard)
  dadosDoCard.forEach((elementoAtual) => {
    const li = document.createElement("li");
    li.classList.add("liVitrine");
    const imgProduto = document.createElement("img");
    imgProduto.id = "imgProduto";
    const nomeProduto = document.createElement("h3");
    const descricaoProduto = document.createElement("h5");
    const categoria = document.createElement("span");
    const div = document.createElement("div");
    div.id = "divAlinharPrecoEcarrinho";
    const valor = document.createElement("span");
    valor.id = "valor";
    const button = document.createElement("button");
    button.id = elementoAtual.id;
    button.classList.add("clickCarrinho");

    button.addEventListener("click", (e) => {
      let idProduto = e.target.parentNode.id;
      dadosDoCard.forEach((produto) => {
        if (produto.id == idProduto) {
          carrinhoAtual.push(produto);
          console.log(carrinhoAtual);
        }
      });
      templateCarrinhoCompras(carrinhoAtual);
    });

    const pngCarrinho = document.createElement("img");
    pngCarrinho.id = "pngCarrinho";

    imgProduto.src = elementoAtual.imagem;
    nomeProduto.innerText = elementoAtual.nome;
    descricaoProduto.innerText = elementoAtual.descricao;
    categoria.innerText = elementoAtual.categoria;
    valor.innerText = elementoAtual.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    pngCarrinho.src =
      "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg";

    li.appendChild(imgProduto);
    li.appendChild(nomeProduto);
    li.appendChild(descricaoProduto);
    li.appendChild(categoria);
    li.appendChild(div);
    div.appendChild(valor);
    button.appendChild(pngCarrinho);
    div.appendChild(button);

    ul.appendChild(li);
  });
}

templateCards(vitrineDaHome);

async function templateCarrinhoCompras(array) {
  const carrinho = await document.querySelector("#carrinhoDeComprasDinamico");
  carrinho.innerHTML = "";

  array.forEach((produto) => {
    const li = document.createElement("li");
    const imgDoItem = document.createElement("img");
    const containerCarrinho = document.createElement("div");
    containerCarrinho.id = "containerCarrinho";
    const nome = document.createElement("h3");
    const categoria = document.createElement("p");
    const valor = document.createElement("span");
    const buttonDeletardoCarrinho = document.createElement("button");
    buttonDeletardoCarrinho.innerText = "Deletar";
    buttonDeletardoCarrinho.id = produto.id;

    imgDoItem.src = produto.imagem;
    nome.innerText = produto.nome;
    categoria.innerText = produto.categoria;
    valor.innerText = `R$${produto.preco}`;

    li.appendChild(imgDoItem);
    li.appendChild(containerCarrinho);
    containerCarrinho.appendChild(nome);
    containerCarrinho.appendChild(categoria);
    containerCarrinho.appendChild(valor);
    containerCarrinho.appendChild(buttonDeletardoCarrinho);
    carrinho.appendChild(li);

    const quantidade = document.querySelector("#quantidade");
    const totalValor = document.querySelector("#totalValor");

    let total = carrinhoAtual.reduce((a, elementoAtual) => {
      return a + Number(elementoAtual.preco);
    }, 0);

    quantidade.innerText = `Qtd: ${array.length}`;

    totalValor.innerText = ` Total: R$${total}`;

    buttonDeletardoCarrinho.addEventListener("click", deletarProdutoCarrinho);
  });
}

async function deletarProdutoCarrinho(e) {
  const idProdutoDelet = e.target.id;

  await carrinhoAtual.forEach((produto) => {
    if (produto.id == idProdutoDelet) {
      const indiceProduto = carrinhoAtual.indexOf(produto);
      carrinhoAtual.splice(indiceProduto, 1);
      templateCarrinhoCompras(carrinhoAtual);

      const quantidade = document.querySelector("#quantidade");
      const totalValor = document.querySelector("#totalValor");

      let total = carrinhoAtual.reduce((a, elementoAtual) => {
        return a + Number(elementoAtual.preco);
      }, 0);

      quantidade.innerText = `Qtd:${carrinhoAtual.length}`;

      totalValor.innerText = ` Total: R$${total}`;
    }
  });
}
