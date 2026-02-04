let selectedService = "";

// Função para selecionar o serviço
function selectService(name, price) {
    selectedService = name;
    alert(`Você selecionou: ${name} (R$ ${price})`);
    document.getElementById('calendar-container').classList.remove('hidden');
}

// Lógica do botão principal
document.getElementById('btn-agendar').addEventListener('click', () => {
    const container = document.getElementById('calendar-container');
    container.classList.toggle('hidden');
});

// Confirmação final
function confirmBooking() {
    const date = document.getElementById('date-picker').value;
    if (!date) {
        alert("Por favor, selecione uma data.");
        return;
    }
    alert(`Sucesso! Seu agendamento de ${selectedService} para o dia ${date} foi solicitado.`);
}