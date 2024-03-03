let cartela = {}; // Objeto para armazenar a cartela carregada

// Evento para carregar uma cartela específica pelo código ID
document.getElementById('carregarCartela').addEventListener('click', function() {
    const codigoId = document.getElementById('codigoIdInput').value;
    carregarCartela(codigoId); // Substitua esta função pela sua lógica para carregar a cartela pelo código ID
});

// Função para carregar a cartela e exibir os termos na tela
function carregarCartela(codigoId) {
    // Sua lógica para carregar a cartela usando o código ID
    // Por exemplo, você pode buscar a cartela de um armazenamento local, um banco de dados ou de uma API

    const termosDaCartela = cartela[codigoId]; // Substitua pela sua lógica de obter os termos da cartela

    const cartelaEl = document.getElementById('cartela');
    cartelaEl.innerHTML = ''; // Limpa a cartela atual

    termosDaCartela.forEach(termo => {
        const termoEl = document.createElement('div');
        termoEl.classList.add('termo');
        termoEl.textContent = termo;
        termoEl.onclick = () => termoEl.classList.toggle('marcado'); // Marca ou desmarca o termo ao clicar
        cartelaEl.appendChild(termoEl);
    });
}
