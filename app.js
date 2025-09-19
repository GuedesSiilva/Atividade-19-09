
const botaoAcao = document.getElementById('actionButton');

const nome = document.getElementById('userInput');

const divResposta = document.getElementById('resposta');

botaoAcao.addEventListener('click', function() {

    divResposta.innerHTML = `<p>Olá, ${nome.value}, Bem-vindo a mágia</p>`;

});