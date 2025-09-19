
const botaoAcao = document.getElementById('actionButton');

const nome = document.getElementById('userInput');

const divResposta = document.getElementById('resposta');

botaoAcao.addEventListener('click', function() {
  if (nome.value.trim() === "") {
        divResposta.innerHTML = `<p style = "color: red;" >Por favor, insira seu nome para entrar no mundo mágico!</p>`;
    } else {
    divResposta.innerHTML = `<p>Olá ${nome.value}, Bem-vindo a magia</p>`;
    }
});