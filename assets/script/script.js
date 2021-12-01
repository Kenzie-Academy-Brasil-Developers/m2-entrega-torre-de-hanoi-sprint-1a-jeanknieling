function criarEstruturaHTML() {
  const main = document.querySelector(".container");
  const section = document.createElement("section");
  section.classList.add("sectionContainer");
  const section2 = document.createElement("section");
  section2.classList.add("sectionContainer2");
  const section3 = document.createElement("section");
  section3.classList.add("sectionContainer3");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Torre de Hanói";

  main.appendChild(section);
  main.appendChild(section2);
  main.appendChild(section3);
  document.body.appendChild(h1);
  document.body.appendChild(main);
}
criarEstruturaHTML();
const sectionContainer = document.querySelector(".sectionContainer");
const sectionContainer2 = document.querySelector(".sectionContainer2");
const sectionContainer3 = document.querySelector(".sectionContainer3");
function criarToco() {
  let toco = document.createElement("div");
  toco.id = `toco1`;
  let toco2 = document.createElement("div");
  toco2.id = `toco2`;
  let toco3 = document.createElement("div");
  toco3.id = `toco3`;
  sectionContainer.appendChild(toco);
  sectionContainer2.appendChild(toco2);
  sectionContainer3.appendChild(toco3);
}
let contador = 0;
criarToco();
const primeiraTorre = document.querySelector("#toco1");
function criarBlocos(numeroDeBlocos) {
  const pContadorJogadas = document.createElement("p");

  if (numeroDeBlocos == 3) {
    pContadorJogadas.innerHTML = "Quantidade mínima de movimentos: 7";
  } else if (numeroDeBlocos == 4) {
    pContadorJogadas.innerHTML = "Quantidade mínima de movimentos: 15";
  } else if (numeroDeBlocos == 5) {
    pContadorJogadas.innerHTML = "Quantidade mínima de movimentos: 31";
  }

  for (let i = numeroDeBlocos; i > 0; i--) {
    let blocos = document.createElement("span");
    blocos.id = `bloco${i}`;
    primeiraTorre.appendChild(blocos);
  }

  const pQtdMinJogadas = document.createElement("p");
  pQtdMinJogadas.id = "contador-jogadas";
  pQtdMinJogadas.innerText = "Movimentos efetuados: 0";
  document.body.appendChild(pContadorJogadas);
  document.body.appendChild(pQtdMinJogadas);
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset";
  document.body.appendChild(resetButton);

  resetButton.addEventListener("click", function () {
    resetButton.classList.add("none");
    pContadorJogadas.remove();
    pQtdMinJogadas.remove();
    vitoria.innerHTML = "";
    sectionContainer.classList.remove("flex");
    sectionContainer2.classList.remove("flex");
    sectionContainer3.classList.remove("flex");

    const remover = sectionContainer.lastChild;
    const remover2 = sectionContainer2.lastChild;
    const remover3 = sectionContainer3.lastChild;
    const removendo = sectionContainer.children;
    const filho = remover.children;
    const filho2 = remover2.children;
    const filho3 = remover3.children;

    for (let i = numeroDeBlocos; i >= 0; i--) {
      if (filho[i] !== undefined) remover.removeChild(filho[i]);
    }
    for (let i = numeroDeBlocos; i >= 0; i--) {
      if (filho2[i] !== undefined) remover2.removeChild(filho2[i]);
    }
    for (let i = numeroDeBlocos; i >= 0; i--) {
      if (filho3[i] !== undefined) remover3.removeChild(filho3[i]);
    }

    selecaodejogos();
    //TENTANDO ADDS OS EVENTOS   DOS CAPTURAS
    torre1.addEventListener("click", capturarTorres);
    torre2.addEventListener("click", capturarTorres);
    torre3.addEventListener("click", capturarTorres);

    movimentos = 0;
    blocoSelecionado = "";
  });
}

function resete() {}

let blocoSelecionado = "";
function capturarTorres(event) {
  if (event.target.lastElementChild !== null) {
    if (event.target.tagName === "DIV") {
      toco = event.target;
      moveBlocos(toco);
      verificarVitoria(event, dificuldade);
    }
  } else {
    if (blocoSelecionado !== "") {
      toco = event.target;
      moveBlocos(toco);
      verificarVitoria(event, dificuldade);
    }
  }
}
const torre1 = document.querySelector("#toco1");
torre1.addEventListener("click", capturarTorres);
const torre2 = document.querySelector("#toco2");
torre2.addEventListener("click", capturarTorres);
const torre3 = document.querySelector("#toco3");
torre3.addEventListener("click", capturarTorres);

function moveBlocos(toco) {
  const torreAtual = toco;

  if (blocoSelecionado === "") {
    blocoSelecionado = toco.lastElementChild;
    if (blocoSelecionado.id === "bloco1") {
      blocoSelecionado.classList.add("keyframes");
    } else if (blocoSelecionado.id === "bloco2") {
      blocoSelecionado.classList.add("keyframes2");
    } else if (blocoSelecionado.id === "bloco3") {
      blocoSelecionado.classList.add("keyframes3");
    } else if (blocoSelecionado.id === "bloco4") {
      blocoSelecionado.classList.add("keyframes4");
    } else {
      blocoSelecionado.classList.add("keyframes5");
    }
  } else if (
    torreAtual.lastElementChild === null ||
    torreAtual.lastElementChild.clientWidth > blocoSelecionado.clientWidth
  ) {
    torreAtual.appendChild(blocoSelecionado);
    blocoSelecionado.className = "";
    blocoSelecionado = "";
    contarMovimentos();
  } else {
    erro.play();
    blocoSelecionado.className = "";
    blocoSelecionado = "";
  }
}

let movimentos = 0;
function contarMovimentos() {
  const pContadorMovimentos = document.querySelector("#contador-jogadas");

  movimentos++;
  pContadorMovimentos.innerHTML = `Movimentos efetuados: ${movimentos}`;
}

function verificarVitoria(event, dificuldade) {
  const contaElementosNaTorre = event.currentTarget.childElementCount;
  if (
    contaElementosNaTorre === dificuldade &&
    (event.currentTarget.id === "toco2" || event.currentTarget.id === "toco3")
  ) {
    popupvitoria();

    torre1.removeEventListener("click", capturarTorres);
    torre2.removeEventListener("click", capturarTorres);
    torre3.removeEventListener("click", capturarTorres);
  }
}

function selecaodejogos() {
  const butoes = document.createElement("div");
  butoes.classList.add("menu");
  const texto = document.createElement("div");
  texto.classList.add("texto");
  const main = document.querySelector(".container");
  const opDeJogo = document.createElement("p");
  opDeJogo.innerHTML = "Dificuldades:";
  texto.appendChild(opDeJogo);
  const easyButton = document.createElement("button");
  easyButton.innerHTML = "Gennin";
  easyButton.id = 3;
  butoes.appendChild(easyButton);
  const mediumButton = document.createElement("button");
  mediumButton.innerHTML = "Chunnin";
  mediumButton.id = 4;
  butoes.appendChild(mediumButton);
  const hardButton = document.createElement("button");
  hardButton.innerHTML = "Jonnin";
  hardButton.id = 5;
  butoes.appendChild(hardButton);
  texto.appendChild(butoes);
  main.appendChild(texto);
  easyButton.addEventListener("click", trocamodal);
  mediumButton.addEventListener("click", trocamodal);
  hardButton.addEventListener("click", trocamodal);

  function trocamodal() {
    sectionContainer.classList.add("flex");
    sectionContainer2.classList.add("flex");
    sectionContainer3.classList.add("flex");
    opDeJogo.classList.add("none");
    easyButton.classList.add("none");
    mediumButton.classList.add("none");
    hardButton.classList.add("none");

    criarBlocos(event.target.id);
    dificuldade = parseInt(event.target.id);
    //musica.play()
  }
}
selecaodejogos();
const vitoria = document.createElement("p");
function popupvitoria() {
  const main = document.querySelector(".container");
  vitoria.innerHTML = "Parabéns você venceu!";
  win.play();
  document.body.appendChild(vitoria);
}
