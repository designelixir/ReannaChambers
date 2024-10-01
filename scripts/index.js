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

// Select all elements with the class 'hover' and all <a> tags
const hoverElements = document.querySelectorAll('.hover, a');

// // Loop through each element and add the event listeners
// hoverElements.forEach(function(element) {
//     element.addEventListener('mouseover', function() {
//         // Add the 'hovercursor' class to all elements with the class 'star'
//         document.querySelectorAll('.star').forEach(function(star) {
//             star.classList.add('hovercursor');
//         });
//     });

//     element.addEventListener('mouseleave', function() {
//         // Remove the 'hovercursor' class from all elements with the class 'star'
//         document.querySelectorAll('.star').forEach(function(star) {
//             star.classList.remove('hovercursor');
//         });
//     });
// });
