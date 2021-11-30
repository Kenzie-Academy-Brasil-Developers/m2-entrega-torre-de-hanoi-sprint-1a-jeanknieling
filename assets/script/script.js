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
    
    
    main.appendChild(section);
    main.appendChild(section2);
    main.appendChild(section3);
    document.body.appendChild(h1);
    document.body.appendChild(main);
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

    const pContadorJogadas = document.createElement('p');
    
    const pQtdMinJogadas = document.createElement('p');
    pQtdMinJogadas.id = 'contador-jogadas';
    pQtdMinJogadas.innerText = 'Movimentos efetuados: 0';
    document.body.appendChild(pContadorJogadas);
    document.body.appendChild(pQtdMinJogadas);
    const resetButton = document.createElement('button');
        resetButton.innerHTML = 'Reset';
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", reset);
    for(let i = numeroDeBlocos; i > 0 ; i--) {
        let blocos = document.createElement('span');
        blocos.id = `bloco${i}`;
        primeiraTorre.appendChild(blocos);
    }
    if (numeroDeBlocos == 3){
        pContadorJogadas.innerHTML = 'Quantidade mínima de movimentos: 7';
    }else if (numeroDeBlocos == 4){
        pContadorJogadas.innerHTML = 'Quantidade mínima de movimentos: 15';
    }else if (numeroDeBlocos == 5){
        pContadorJogadas.innerHTML = 'Quantidade mínima de movimentos: 31';
    }
}

let blocoSelecionado = "";
let counter = 0;
function capturarBlocos(event) {
    blocoSelecionado = event.currentTarget.querySelector('div').lastElementChild;
    const efeitoMover = blocoSelecionado.id;
   if(blocoSelecionado.class !== ""){
        if ( efeitoMover === "bloco1"){
        blocoSelecionado.classList.toggle("keyframes");
       
   }else{
        blocoSelecionado.classList.remove("keyframes");
   }
   counter++;
   console.log(counter);
}
}
sectionContainer.addEventListener('click', capturarBlocos);
sectionContainer2.addEventListener('click', capturarBlocos);
sectionContainer3.addEventListener('click', capturarBlocos);
let torreSelecionada = "";
function capturarTorres(event) {
   
    if(event.target.tagName === "DIV" && blocoSelecionado !== "") {
        torreSelecionada = event.target;
        moveBlocos();
        verificarVitoria(event);
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
        torreSelecionada.lastElementChild.classList.remove("keyframes")
        torreSelecionada.lastElementChild.style.backgroundColor = "green";
        //console.log(blocoSelecionado)
       // blocoSelecionado.classList.remove("keyframes")
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

//console.log(event.target)
function verificarVitoria(event, numeroBlocos) {
console.log("dentro: "+event.target)

    const contaElementosNaTorre = event.currentTarget.childElementCount;
    console.log(contaElementosNaTorre === 3 && (event.currentTarget.id === 'toco2' || event.currentTarget.id === 'toco3'))
    console.log(contaElementosNaTorre)
    if(contaElementosNaTorre === 3 && (event.currentTarget.id === 'toco2' || event.currentTarget.id === 'toco3')) {
        popupvitoria();
        console.log(torre1.removeEventListener('click', capturarTorres));
        torre2.removeEventListener('click', capturarTorres);
        torre3.removeEventListener('click', capturarTorres);
    }
}

function popupvitoria(){
    const vitoria = document.createElement('p');
   vitoria.innerHTML = 'Parabéns você venceu!';
    document.body.appendChild(vitoria);
}

function selecaodejogos(){
    const butoes = document.createElement('div');
    butoes.classList.add('menu');
    const texto = document.createElement('div');
    texto.classList.add('texto');
    const main = document.querySelector('.container');
    const opDeJogo = document.createElement('p');
    opDeJogo.innerHTML = 'Dificuldades:';
    texto.appendChild(opDeJogo);
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
    texto.appendChild(butoes);
    main.appendChild(texto);
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
    const main = document.querySelector('.container');
    const vitoria = document.createElement('p');
    vitoria.innerHTML = 'Parabéns você venceu!';
    win.play()
    document.body.appendChild(vitoria);
}

function reset(){
    const main = document.querySelector('.container');
    main.style.display = 'none';
    criarEstruturaHTML();
    criarToco();
    selecaodejogos();
}

