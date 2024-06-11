document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>');
document.write('<script src="scripts/footer.js"></script>');
document.write('<script src="scripts/header.js"></script>');

document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      var stars = [
        { elem: document.querySelector('.star1'), offsetX: 0, offsetY: 0 },
        { elem: document.querySelector('.star2'), offsetX: 10, offsetY: 10 },
        { elem: document.querySelector('.star3'), offsetX: 0, offsetY: 20 },
      ];

      stars.forEach(star => {
        star.elem.style.left = (x + star.offsetX) + 'px';
        star.elem.style.top = (y + star.offsetY) + 'px';

      });
    });
