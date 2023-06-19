document.addEventListener('DOMContentLoaded', function() {
    function sortearNumeros() {
      var numerosSorteados = [];
      
      while (numerosSorteados.length < 5) {
        var numero = Math.floor(Math.random() * 10) + 1;
        
        if (!numerosSorteados.includes(numero)) {
          numerosSorteados.push(numero);
        }
      }
      
      return numerosSorteados;
    }
    
    function substituirVideo(numero) {
      var video = document.getElementById('meu-video');
      
      switch (numero) {
        case 1:
          video.src = 'videos/Cena final ultimato.mp4';
          break;
        case 2:
          video.src = 'videos/Superman Vs Lobo Da Estepe.mp4';
          break;
        case 3:
          video.src = 'videos/Homem-Aranha_ Sem Volta Para Casa.mp4';
          break;
        case 4:
          video.src = 'videos/SPIDER-MAN_ ACROSS THE SPIDER-VERSE.mp4';
          break;
        case 5:
          video.src = 'videos/Cena final ultimato.mp4';
          break;
        default:
          video.src = 'videos/Cena final ultimato.mp4';
      }
    }
    
    var numerosSorteados = sortearNumeros();
    
    for (var i = 0; i < numerosSorteados.length; i++) {
      substituirVideo(numerosSorteados[i]);
    }
  });
  