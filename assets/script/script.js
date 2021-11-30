const musica = document.getElementById('musica');
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
    pQtdMinJogadas.innerHTML = 'Movimentos efetuados: ';
    
    section.appendChild(resetButton);
    section.appendChild(pQtdMinJogadas);
    section.appendChild(pContadorJogadas);
    main.appendChild(section);
    main.appendChild(section2);
    main.appendChild(section3);
    document.body.appendChild(resetButton);
    document.body.appendChild(pQtdMinJogadas);
    document.body.appendChild(pContadorJogadas);
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
    for(let i = numeroDeBlocos; i > 0 ; i--) {
        let blocos = document.createElement('span');
        blocos.id = `bloco${i}`;
        primeiraTorre.appendChild(blocos);
    }
}
criarBlocos(5);
musica.play();

let blocoSelecionado = "";
console.log(blocoSelecionado)
function capturarBlocos(event) {
        blocoSelecionado = event.currentTarget.querySelector('div').lastElementChild;
        console.log(blocoSelecionado)
   
}
sectionContainer.addEventListener('click', capturarBlocos);
sectionContainer2.addEventListener('click', capturarBlocos);
sectionContainer3.addEventListener('click', capturarBlocos);

let torreSelecionada = "";
function capturarTorres(event) {
    console.log(event.target.tagName === "DIV" && blocoSelecionado !== "")
    if(event.target.tagName === "DIV" && blocoSelecionado !== "") {
        torreSelecionada = event.target;
        console.log(torreSelecionada)
        moveBlocos()
    }
}
const torre1 = document.querySelector('#toco1');
torre1.addEventListener('click', capturarTorres);
const torre2 = document.querySelector('#toco2');
torre2.addEventListener('click', capturarTorres);
const torre3 = document.querySelector('#toco3');
torre3.addEventListener('click', capturarTorres);
    

function moveBlocos() {
    if(torreSelecionada.lastElementChild === null || torreSelecionada.lastElementChild.clientWidth > blocoSelecionado.clientWidth) {
        torreSelecionada.appendChild(blocoSelecionado);
    }
}

