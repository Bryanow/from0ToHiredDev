
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
// definindo contador
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener('click', function () {
        const cartaVirada = cartao.querySelector('.carta-virada');

        //virar o cartão
        cartao.classList.toggle('virar');
        cartaVirada.classList.toggle('mostrar-fundo-carta');

        // escondr a descrição para ocupar menos espaço em telas menores
        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder')
    });
});

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