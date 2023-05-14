const alterarTema = document.getElementById('botao-alterar-tema');
const body = document.querySelector('body');
const botao = document.querySelector('.imagem-botao');

alterarTema.addEventListener('click', () => {
    const modoEscuroAtivado = body.classList.contains('modo-escuro');

    body.classList.toggle('modo-escuro')

    if (!modoEscuroAtivado) {
        botao.setAttribute('src', './src/imagens/moon.png');
    } else {
        botao.setAttribute('src', './src/imagens/sun.png');
    }
});