
//OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
//cartao da lista
// - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
// definindo contador
let cartaoAtual = 0;

//  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function() {
    if(cartaoAtual === cartoes.length - 1) return;

    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')

    //- passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual ++;
    cartoes[cartaoAtual].classList.add('selecionado');

});


/*
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
  - passo 4 - buscar o cartão que esta selecionado e esconder
*/
btnVoltar.addEventListener('click', function() {
    if (cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')

    cartaoAtual --;
    cartoes[cartaoAtual].classList.add('selecionado');
});