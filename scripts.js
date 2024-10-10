window.addEventListener('scroll', function() {
    let parallax1 = document.getElementById('parallax-1');
    let parallax2 = document.getElementById('parallax-2');
    
    parallax1.style.backgroundPositionY = -window.scrollY * 0.5 + 'px';
    parallax2.style.backgroundPositionY = -window.scrollY * 0.5 + 'px';
  });
  