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
function criarBlocos(numeroDeBlocos) {
    for(let i = 0; i < numeroDeBlocos; i++) {
        let blocos = document.createElement('span');
        blocos.id = `bloco${i + 1}`;
        sectionContainer.appendChild(blocos);
    }
}



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

musica.play()
criarToco()



function popupvitoria(){
    const vitoria = document.createElement('p');
   vitoria.innerHTML = 'Parabéns você venceu!';
    document.body.appendChild(vitoria);
}

function selecaodejogos(){
    const main = document.querySelector('.container');
    const opDeJogo = document.createElement('p');
    opDeJogo.innerHTML = 'Dificuldades:';
    main.appendChild(opDeJogo);
    const easyButton = document.createElement('button');
    easyButton.innerHTML = 'Gennin';
    easyButton.id = 3;
    main.appendChild(easyButton);
    const mediumButton = document.createElement('button');
    mediumButton.innerHTML = 'Chunnin';
    mediumButton.id = 4;
    main.appendChild(mediumButton);
    const hardButton = document.createElement('button');
    hardButton.innerHTML = 'Jonnin';
    hardButton.id = 5;
    main.appendChild(hardButton);


    easyButton.addEventListener("click", trocamodal)
    mediumButton.addEventListener("click", trocamodal)
    hardButton.addEventListener("click", trocamodal)

    function trocamodal(){
        sectionContainer.style.display = "flex";
        sectionContainer2.style.display = "flex";
        sectionContainer3.style.display = "flex";
        opDeJogo.style.display = "none";
        easyButton.style.display = "none";
        mediumButton.style.display = "none";
        hardButton.style.display = "none";
        criarBlocos(event.target.id)
    }
}
selecaodejogos()
function resete(){
    location.reload();
}