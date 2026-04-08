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
    // 1. Captura as escolhas da cliente
    const selectServico = document.getElementById('servico-escolhido');
    const servico = selectServico.value;

    const selectHorario = document.getElementById('horario-escolhido');
    const horario = selectHorario.value;

    // 2. Validação Dupla (Garante que ela preencheu tudo)
    if (servico === "") {
        alert("Por favor, selecione qual serviço você deseja primeiro! ✨");
        selectServico.focus();
        return;
    }

    if (horario === "") {
        alert("Por favor, selecione uma preferência de horário! ✨");
        selectHorario.focus();
        return;
    }

    // 3. Monta a mensagem personalizada super profissional
    const mensagem = `Olá Joyce! Gostaria de agendar um(a) *${servico}*.\nMinha preferência de horário é às *${horario}*.\nPodemos confirmar a disponibilidade?`;

    // 4. Redireciona para o WhatsApp
    const telefone = "5561999673578"; // Mantive o número de Brasília que estávamos usando
    const urlWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsapp, '_blank');
}

// Função para quando a cliente clica no preço do serviço
function prepararAgendamento(nomeDoServico) {
    // 1. Pega o select de serviços lá embaixo e muda para o serviço clicado
    const selectServico = document.getElementById('servico-escolhido');
    selectServico.value = nomeDoServico;

    // 2. Encontra a área de agendamento
    const areaAgendamento = document.getElementById('area-agendamento');

    // 3. Rola a página suavemente até lá
    areaAgendamento.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 4. Dá um foco visual no select de horários
    setTimeout(() => {
        document.getElementById('horario-escolhido').focus();
    }, 800); 
}

// Função para o botão final do WhatsApp
function agendarComHorario() {
    const servico = document.getElementById('servico-escolhido').value;
    const horario = document.getElementById('horario-escolhido').value;

    if (servico === "") {
        alert("Por favor, confirme qual serviço você deseja na caixinha! ✨");
        return;
    }

    if (horario === "") {
        alert("Por favor, escolha uma preferência de horário! ✨");
        return;
    }

    const mensagem = `Olá Joyce! Gostaria de agendar um(a) *${servico}*.\nMinha preferência de horário é às *${horario}*.\nPodemos confirmar a disponibilidade?`;
    
    const telefone = "5561999673578";
    const urlWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsapp, '_blank');
}