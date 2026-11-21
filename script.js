const orbitas = document.querySelectorAll(".orbita");
const planetas = document.querySelectorAll(".planeta");

const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");
const botaoReiniciar = document.getElementById("reiniciar");

const controleVelocidade = document.getElementById("velocidade");
const valorVelocidade = document.getElementById("valorVelocidade");
const painelInformacoes = document.getElementById("informacoes");

let animacaoAtiva = true;
let velocidade = 1;

// Guarda o tempo original de cada órbita
const temposOriginais = [];

orbitas.forEach((orbita) => {
  const tempo = parseFloat(getComputedStyle(orbita).animationDuration);
  temposOriginais.push(tempo);
});

// Informações dos planetas
const dadosPlanetas = {
  "Mercúrio": "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar.",
  "Vênus": "Vênus é o planeta mais quente do Sistema Solar e possui uma atmosfera muito densa.",
  "Terra": "A Terra é o nosso planeta. Possui água líquida e é conhecida por abrigar vida.",
  "Marte": "Marte é conhecido como Planeta Vermelho por causa da cor de sua superfície.",
  "Júpiter": "Júpiter é o maior planeta do Sistema Solar e possui uma enorme tempestade chamada Grande Mancha Vermelha.",
  "Saturno": "Saturno é famoso por seus grandes anéis, formados principalmente por gelo e rochas.",
  "Urano": "Urano é um planeta muito frio e gira praticamente de lado.",
  "Netuno": "Netuno é um planeta distante do Sol e possui ventos muito fortes."
};

// Função que atualiza a velocidade
function atualizarVelocidade() {
  orbitas.forEach((orbita, indice) => {
    const novoTempo = temposOriginais[indice] / velocidade;

    orbita.style.animationDuration = novoTempo + "s";
  });
}

// Botão iniciar
function iniciarAnimacao() {
  animacaoAtiva = true;

  orbitas.forEach((orbita) => {
    orbita.style.animationPlayState = "running";
  });
}

// Botão pausar
function pausarAnimacao() {
  animacaoAtiva = false;

  orbitas.forEach((orbita) => {
    orbita.style.animationPlayState = "paused";
  });
}

// Botão reiniciar
function reiniciarAnimacao() {
  orbitas.forEach((orbita) => {
    orbita.style.animation = "none";
  });

  // Reinicia as animações
  document.body.offsetHeight;

  orbitas.forEach((orbita, indice) => {
    orbita.style.animation = "";
    orbita.style.animationDuration =
      (temposOriginais[indice] / velocidade) + "s";
    orbita.style.animationPlayState = "running";
  });

  animacaoAtiva = true;
}

// Evento do botão iniciar
botaoIniciar.addEventListener("click", iniciarAnimacao);

// Evento do botão pausar
botaoPausar.addEventListener("click", pausarAnimacao);

// Evento do botão reiniciar
botaoReiniciar.addEventListener("click", reiniciarAnimacao);

// Evento do controle de velocidade
controleVelocidade.addEventListener("input", function () {
  velocidade = Number(controleVelocidade.value);

  valorVelocidade.textContent = velocidade + "x";

  atualizarVelocidade();
});

// Evento de clique nos planetas
planetas.forEach((planeta) => {
  planeta.addEventListener("click", function () {
    const nome = planeta.dataset.planeta;
    const texto = dadosPlanetas[nome];

    painelInformacoes.innerHTML = `
      <h2>${nome}</h2>
      <p>${texto}</p>
    `;
  });
});

// Mensagem inicial
painelInformacoes.innerHTML = `
  <h2>🌎 Sistema Solar</h2>
  <p>Clique em um planeta para conhecer mais sobre ele!</p>
`;

console.log("Sistema Solar iniciado com sucesso!");
