document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.sanfona-botao');

    botoes.forEach(function (botao) {
      botao.addEventListener('click', function (event) {
        event.preventDefault();

        const conteudo = this.nextElementSibling;
        conteudo.classList.toggle('ativo');

        if (conteudo.style.maxHeight && conteudo.style.maxHeight !== "0px") {
          conteudo.style.maxHeight = "0px";
        } else {
          conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        }
      });
    });
  });

