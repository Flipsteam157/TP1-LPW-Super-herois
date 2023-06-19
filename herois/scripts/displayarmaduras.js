var indiceImagem = 0;
    var imagens = document.getElementsByClassName("imagem");

    function mudarImagem(direcao) {
      imagens[indiceImagem].classList.remove("imagem-ativa");
      indiceImagem += direcao;
      if (indiceImagem < 0) {
        indiceImagem = imagens.length - 1;
      } else if (indiceImagem >= imagens.length) {
        indiceImagem = 0;
      }
      imagens[indiceImagem].classList.add("imagem-ativa");
    }