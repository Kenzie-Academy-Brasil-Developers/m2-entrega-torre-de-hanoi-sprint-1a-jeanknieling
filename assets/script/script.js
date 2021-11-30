//const musica = document.getElementById('musica');
const erro = document.getElementById('erro');
function criarEstruturaHTML() {
    const main = document.querySelector('.container');
    const section = document.createElement('section');
    section.classList.add('sectionContainer');
    const section2 = document.createElement('section');
    section2.classList.add('sectionContainer2');
    const section3 = document.createElement('section');
    section3.classList.add('sectionContainer3');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Torre de Hanói';
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset';
    const pContadorJogadas = document.createElement('p');
    pContadorJogadas.innerHTML = 'Quantidade mínima de movimentos: ';
    const pQtdMinJogadas = document.createElement('p');
    pQtdMinJogadas.id = 'contador-jogadas';
    pQtdMinJogadas.innerText = 'Movimentos efetuados: 0';
    
    section.appendChild(resetButton);
    section.appendChild(pQtdMinJogadas);
    section.appendChild(pContadorJogadas);
    main.appendChild(section);
    main.appendChild(section2);
    main.appendChild(section3);
    document.body.appendChild(resetButton);
    document.body.appendChild(pQtdMinJogadas);
    document.body.appendChild(pContadorJogadas);
    main.appendChild(section);
    main.appendChild(section2);
    main.appendChild(section3);
    document.body.appendChild(main);
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resete);
}
criarEstruturaHTML();

const sectionContainer = document.querySelector('.sectionContainer');
const sectionContainer2 = document.querySelector('.sectionContainer2');
const sectionContainer3 = document.querySelector('.sectionContainer3');
function criarToco(){
   
    let toco = document.createElement('div');
    toco.id = `toco1`;
    let toco2 = document.createElement('div');
    toco2.id = `toco2`;
    let toco3 = document.createElement('div');
    toco3.id = `toco3`;
    sectionContainer.appendChild(toco);
    sectionContainer2.appendChild(toco2);
    sectionContainer3.appendChild(toco3);
}
criarToco()

const primeiraTorre = document.querySelector('#toco1');
function criarBlocos(numeroDeBlocos) {
    for(let i = numeroDeBlocos; i > 0 ; i--) {
        let blocos = document.createElement('span');
        blocos.id = `bloco${i}`;
        primeiraTorre.appendChild(blocos);
    }
}

let blocoSelecionado = "";
function capturarBlocos(event) {
    blocoSelecionado = event.currentTarget.querySelector('div').lastElementChild;

    console.log(blocoSelecionado)
   
}
sectionContainer.addEventListener('click', capturarBlocos);
sectionContainer2.addEventListener('click', capturarBlocos);
sectionContainer3.addEventListener('click', capturarBlocos);

let torreSelecionada = "";
function capturarTorres(event) {
    if(event.target.tagName === "DIV" && blocoSelecionado !== "") {
        torreSelecionada = event.target;
        moveBlocos()
    }
}
const torre1 = document.querySelector('#toco1');
torre1.addEventListener('click', capturarTorres);
const torre2 = document.querySelector('#toco2');
torre2.addEventListener('click', capturarTorres);
const torre3 = document.querySelector('#toco3');
torre3.addEventListener('click', capturarTorres);

let movimentos = 0;
function moveBlocos() {
    if(torreSelecionada.lastElementChild === null || torreSelecionada.lastElementChild.clientWidth > blocoSelecionado.clientWidth) {
        torreSelecionada.appendChild(blocoSelecionado);
        contarMovimentos();
    } else {
        erro.play();
    }
}

function contarMovimentos() {
    movimentos++;
    const pContadorMovimentos = document.querySelector('#contador-jogadas');
    pContadorMovimentos.innerHTML = `Movimentos efetuados: ${movimentos}`;
}

function popupvitoria(){
    const vitoria = document.createElement('p');
   vitoria.innerHTML = 'Parabéns você venceu!';
    document.body.appendChild(vitoria);
}

function selecaodejogos(){
    const butoes = document.createElement('div');
    butoes.classList.add('menu');
    const main = document.querySelector('.container');
    const opDeJogo = document.createElement('p');
    opDeJogo.innerHTML = 'Dificuldades:';
    butoes.appendChild(opDeJogo);
    const easyButton = document.createElement('button');
    easyButton.innerHTML = 'Gennin';
    easyButton.id = 3;
    butoes.appendChild(easyButton);
    const mediumButton = document.createElement('button');
    mediumButton.innerHTML = 'Chunnin';
    mediumButton.id = 4;
    butoes.appendChild(mediumButton);
    const hardButton = document.createElement('button');
    hardButton.innerHTML = 'Jonnin';
    hardButton.id = 5;
    butoes.appendChild(hardButton);
    main.appendChild(butoes);
    easyButton.addEventListener("click", trocamodal);
    mediumButton.addEventListener("click", trocamodal);
    hardButton.addEventListener("click", trocamodal);
    
    function trocamodal(){
        sectionContainer.classList.add('flex');
        sectionContainer2.classList.add('flex');
        sectionContainer3.classList.add('flex');
        opDeJogo.classList.add('none');
        easyButton.classList.add('none');
        mediumButton.classList.add('none');
        hardButton.classList.add('none');
        criarBlocos(event.target.id);
        //musica.play()
    }
}
selecaodejogos()
function popupvitoria(){
    const vitoria = document.createElement('p');
   vitoria.innerHTML = 'Parabéns você venceu!';
    document.body.appendChild(vitoria);
}
function resete(){
    location.reload();
}
//popupvitoria()
