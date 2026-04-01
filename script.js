let carrinho = [];

// 2. FUNÇÕES DE APOIO
function renderizarCarrinho() {
    const lista = document.getElementById('itens-carrinho');
    const totalElemento = document.getElementById('total-valor');
    
    if(!lista || !totalElemento) return; // Segurança caso os IDs não existam

    lista.innerHTML = '';
    let total = 0;
    
    carrinho.forEach((item, index) => {
        total += item.preco;
        lista.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
    });
    
    totalElemento.innerText = `R$ ${total.toFixed(2)}`;
}

// 3. FUNÇÃO DE COMPRA (ISSUE #7)
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá Joyce! Gostaria de agendar:\n\n";
    carrinho.forEach(item => {
        mensagem += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
    });

    const url = `https://wa.me/5561999673578?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}

// 4. FUNÇÃO DE ADICIONAR
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    renderizarCarrinho();
}