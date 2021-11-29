function criarEstruturaHTML() {
    const main = document.querySelector('.container');
    const section = document.createElement('section');
    section.classList.add('sectionContainer');
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
    document.body.appendChild(main);
}
criarEstruturaHTML();
const sectionContainer = document.querySelector('.sectionContainer');
console.log(sectionContainer)
function criarBlocos(numeroDeBlocos) {
    for(let i = 0; i < numeroDeBlocos; i++) {
        let blocos = document.createElement('span');
        blocos.id = `bloco${i + 1}`;
        sectionContainer.appendChild(blocos);
    }
}
criarBlocos(5);