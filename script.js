/* ================= PRODUTOS ================= */

const produtos = [
    { id: 1, nome: "Heineken", categoria: "cerveja", preco: 10.00, imagem: "https://www.piramidesdistribuidora.com.br/images/original/3328-heineken-long-neck-330ml-normal-24un.20251201102027.png" },
    { id: 2, nome: "Budweiser", categoria: "cerveja", preco: 9.00, imagem: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Cerveja-Budweiser-330ml.png" },
    { id: 3, nome: "Stella Artois", categoria: "cerveja", preco: 7.00, imagem: "https://www.piramidesdistribuidora.com.br/images/products/11436-stella-artois-long-neck-330ml-24un.20251024104057.png" },
    { id: 4, nome: "Império Ultra", categoria: "cerveja", preco: 7.00, imagem: "https://cervejaimperio.com.br/img/large/garrafa-275-ultra.png" },
    { id: 5, nome: "Corona", categoria: "cerveja", preco: 10.00, imagem: "https://assets.jokrtech.com/small_PROD_150601004_P1_53bc22235a.png" },
    { id: 6, nome: "Michelob Ultra", categoria: "cerveja", preco: 8.00, imagem: "https://hiperideal.vtexassets.com/arquivos/ids/223923/212565.png?v=638590837314400000" },
    { id: 7, nome: "Spaten", categoria: "cerveja", preco: 7.00, imagem: "https://www.cervejaspaten.com.br/sites/g/files/wnfebl12221/files/styles/webp/public/2025-09/330ml%20%281%29.png.webp?itok=7mtQ2wig" },

    { id: 8, nome: "Coca-Cola", categoria: "refrigerante", preco: 12.00, imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/960px-Coca-Cola_logo.svg.png" },
    { id: 9, nome: "Fanta", categoria: "refrigerante", preco: 10.00, imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Fanta_logo_%282018%29.png" },
    { id: 10, nome: "Cajuína", categoria: "refrigerante", preco: 8.00, imagem: "https://cajuinasaogeraldo.com.br/wordpress/wp-content/uploads/2021/01/cropped-ico-cajuina-sao-geraldo.png" },
    { id: 11, nome: "Sprite", categoria: "refrigerante", preco: 8.00, imagem: "https://pngimg.com/d/sprite_PNG98771.png" },
    { id: 12, nome: "Guaraná", categoria: "refrigerante", preco: 8.00, imagem: "https://logodownload.org/wp-content/uploads/2014/09/guarana-antarctica-logo.png" },

    { id: 13, nome: "Red Label", categoria: "whisky", preco: 90.00, imagem: "https://cdn.awsli.com.br/800x800/2649/2649600/produto/234522026/jw-red-label---750ml--2xw11xihix.png" },
    { id: 14, nome: "Old Parr", categoria: "whisky", preco: 140.00, imagem: "https://cdn.awsli.com.br/800x800/2649/2649600/produto/234522037/old-parr-aged-12-years---1-0l-x-12---sc-2fhd03rzyx.png" },
    { id: 15, nome: "Buchanan's", categoria: "whisky", preco: 180.00, imagem: "https://cdn.awsli.com.br/800x800/2649/2649600/produto/234522006/buchanan-s-deluxe-aged-12-years---0-75l-x-12---sc-qopwbqo073.png" },

    { id: 16, nome: "Ypióca", categoria: "cachaca", preco: 12.00, imagem: "https://donizete.agilecdn.com.br/1195.png" },
    { id: 17, nome: "51", categoria: "cachaca", preco: 15.00, imagem: "https://lojaciamuller.vtexassets.com/arquivos/ids/155624/7896002100441-1.png?v=638744404064300000" },
    { id: 18, nome: "Pitú", categoria: "cachaca", preco: 10.00, imagem: "https://nossadistribuidorabebidas.com.br/wp-content/uploads/2021/12/Pitu-350ml.png" },
    { id: 19, nome: "Matuta", categoria: "cachaca", preco: 18.00, imagem: "https://agrobr.org/wp-content/uploads/2024/09/rainha.png.webp" }
];

/* ================= VARIÁVEIS ================= */

let carrinho = [];
let indicador;

/* ================= FILTROS ================= */

function moverIndicador(elemento) {
    if (!elemento || !indicador) return;

    const rect = elemento.getBoundingClientRect();
    const parentRect = elemento.parentElement.getBoundingClientRect();

    indicador.style.width = rect.width + "px";
    indicador.style.left = (rect.left - parentRect.left) + "px";
}

function filtrar(categoria, elemento) {
    document.querySelectorAll(".filtros button")
        .forEach(btn => btn.classList.remove("ativo"));

    if (elemento) {
        elemento.classList.add("ativo");
        moverIndicador(elemento);
    }

    const lista = categoria === "todos"
        ? produtos
        : produtos.filter(p => p.categoria === categoria);

    mostrarProdutos(lista);
}

/* ================= PRODUTOS ================= */

function mostrarProdutos(lista) {
    const cardapio = document.getElementById("cardapio");
    cardapio.innerHTML = "";

    lista.forEach(produto => {
        const item = document.createElement("div");
        item.className = "produto-lista";

        item.innerHTML = `
            <img src="${produto.imagem}" class="produto-img">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>${produto.categoria}</p>
            </div>
            <div class="produto-acoes">
                <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
                <button class="btn-add">+</button>
            </div>
        `;

        item.querySelector(".btn-add")
            .addEventListener("click", () => {
                adicionarAoCarrinho(produto.id);
                animarAdd(item);
            });

        cardapio.appendChild(item);
    });
}

/* ================= ANIMAÇÃO ================= */

function animarAdd(elemento) {
    elemento.style.transform = "scale(0.95)";
    elemento.style.boxShadow = "0 0 20px rgba(255,106,0,0.5)";
    
    setTimeout(() => {
        elemento.style.transform = "";
        elemento.style.boxShadow = "";
    }, 150);
}

/* ================= CARRINHO NOVO ================= */

const carrinhoEl = document.getElementById("carrinho");
const overlay = document.getElementById("overlay");
const lista = document.getElementById("lista-carrinho");
const totalEl = document.getElementById("total");
const count = document.getElementById("cart-count");

/* ABRIR / FECHAR */

document.querySelector(".cart-btn").addEventListener("click", abrirCarrinho);
document.getElementById("fechar-carrinho").addEventListener("click", fecharCarrinho);
overlay.addEventListener("click", fecharCarrinho);

function abrirCarrinho() {
    carrinhoEl.classList.add("ativo");
    overlay.classList.add("ativo");
}

function fecharCarrinho() {
    carrinhoEl.classList.remove("ativo");
    overlay.classList.remove("ativo");
}

/* ADICIONAR */

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    const item = carrinho.find(p => p.id === id);

    if (item) item.qtd++;
    else carrinho.push({ ...produto, qtd: 1 });

    atualizarCarrinho();
    abrirCarrinho();
}

/* ATUALIZAR UI */

function atualizarCarrinho() {
    lista.innerHTML = "";

    let total = 0;
    let totalItens = 0;

    carrinho.forEach(item => {
        total += item.preco * item.qtd;
        totalItens += item.qtd;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.nome}</span>
            <div>
                <button class="menos">-</button>
                <span>${item.qtd}</span>
                <button class="mais">+</button>
            </div>
        `;

        li.querySelector(".menos").addEventListener("click", () => {
            if (item.qtd > 1) item.qtd--;
            else removerItem(item.id);
            atualizarCarrinho();
        });

        li.querySelector(".mais").addEventListener("click", () => {
            item.qtd++;
            atualizarCarrinho();
        });

        lista.appendChild(li);
    });

    totalEl.textContent = total.toFixed(2);
    count.textContent = totalItens;
}

/* REMOVER */

function removerItem(id) {
    const index = carrinho.findIndex(p => p.id === id);
    if (index !== -1) carrinho.splice(index, 1);
}

/* PAGAMENTO */

const btnPagamento = document.getElementById("btn-pagamento");
const opcoes = document.getElementById("opcoes-pagamento");
const inputPagamento = document.getElementById("pagamento");

btnPagamento.addEventListener("click", () => {
    opcoes.classList.toggle("ativo");
});

opcoes.querySelectorAll("div").forEach(op => {
    op.addEventListener("click", () => {
        const valor = op.dataset.pag;
        inputPagamento.value = valor;
        btnPagamento.textContent = valor;
        opcoes.classList.remove("ativo");
    });
});

/* FINALIZAR */

document.getElementById("finalizar").addEventListener("click", () => {

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const pagamento = inputPagamento.value;

    if (!nome || !endereco || !pagamento) {
        alert("Preencha todos os dados!");
        return;
    }

    let mensagem = `🛒 Pedido:%0A%0A`;
    mensagem += `👤 ${nome}%0A📍 ${endereco}%0A💳 ${pagamento}%0A%0A`;

    let total = 0;

    carrinho.forEach(item => {
        mensagem += `• ${item.nome} x${item.qtd}%0A`;
        total += item.preco * item.qtd;
    });

    mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/5587999383956?text=${mensagem}`, "_blank");
});

/* ================= INIT ================= */

window.addEventListener("load", () => {

    indicador = document.querySelector(".indicador");

    const ativo = document.querySelector(".filtros button.ativo");
    moverIndicador(ativo);

    mostrarProdutos(produtos);
});