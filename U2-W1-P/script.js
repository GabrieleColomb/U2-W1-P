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