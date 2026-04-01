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
        alert("O seu carrinho está vazio! ✨");
        return;
    }

    // Calcula o total somado de todos os itens (cursos e produtos)em) => acc + item.preco, 0);
    
    // Criar a descrição dos itens para o checkout
    const descricao = carrinho.map(item => item.nome).join(', ');
    
    console.log(`Iniciando pagamento de R$ ${totalVenda.toFixed(2)} para: ${descricao}`);

    // Aqui tu vais colocar a URL do teu checkout que aceita o parâmetro de valor
    const urlCheckout = `https://link-de-pagamento.com/joyce-correia?valor=${totalVenda}&pedido=${encodeURIComponent(descricao)}`;
    
    window.location.href = urlCheckout;
}
// 4. FUNÇÃO DE ADICIONAR
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    renderizarCarrinho();
}

function agendarComHorario() {
    // 1. Captura o valor do select
    const select = document.getElementById('horario-escolhido');
    const horario = select.value;

    // 2. Validação: A cliente escolheu um horário?
    if (horario === "") {
        alert("Por favor, selecione uma preferência de horário antes de agendar! ✨");
        select.focus(); // Coloca o cursor no select para ajudar a cliente
        return;
    }

    // 3. Monta a mensagem personalizada
    const mensagem = `Olá Joyce! Gostaria de agendar um serviço.\nMinha preferência de horário é às *${horario}*.\nPodemos confirmar a disponibilidade?`;

    // 4. Redireciona para o WhatsApp
    const telefone = "5561999673578";
    const urlWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsapp, '_blank');
}