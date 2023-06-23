window.addEventListener('scroll', function() {
    var box = document.querySelector('.box');
    var button = document.querySelector('.menu .button');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 300) {
      box.classList.add('changed');
      button.style.backgroundColor = 'green';
    } else {
      box.classList.remove('changed');
      button.style.backgroundColor = '#000';
    }
  });


    // Funzione per animare le M una alla volta
    function animateMs() {
        var textElement = document.querySelector('g artwork');
        var textContent = textElement.textContent.trim();
        var ms = textContent.split(' ');
    
        // Impostazione dell'opacità iniziale
        textElement.style.opacity = 1;
    
        // Funzione ricorsiva per l'animazione delle M
        function animate(index) {
          if (index < ms.length) {
            setTimeout(function () {
              // Nascondi la M corrente
              textElement.textContent = textContent.replace(ms[index], '');
    
              // Attendi per un breve periodo di tempo prima di mostrare la prossima M
              setTimeout(function () {
                // Mostra la prossima M
                textElement.textContent = textContent;
    
                // Chiamata ricorsiva per animare la prossima M
                animate(index + 1);
              }, 500); // Imposta la durata di visualizzazione di ogni M
    
              // Riduci l'opacità per nascondere la M corrente
              textElement.style.opacity = 0;
            }, 500); // Imposta la durata di nascondere ogni M
          }
        }
    
        // Avvia l'animazione delle M
        animate(0);
      }
    
      // Chiamata alla funzione di animazione al caricamento della pagina
      window.onload = animateMs;