
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
// definindo contador
let cartaoAtual = 0;


btnAvancar.addEventListener('click', function() {
    hide_selected_card();
  
    if (cartaoAtual === cartoes.length - 1) {
        cartaoAtual = 0;
    } else {
        cartaoAtual ++;
    }
    showSelectedCard(cartaoAtual);
});

btnVoltar.addEventListener('click', function() {
    hide_selected_card();

    if (cartaoAtual === 0) {
        cartaoAtual = cartoes.length - 1;
    } else {
        cartaoAtual --;
    }
    showSelectedCard(cartaoAtual);
});

function showSelectedCard(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function hide_selected_card() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}