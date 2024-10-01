$(document).ready(function () {
    var $div = $('#floatingDiv');
    var speedX = 0.5;
    var speedY = 0.5;

    function moveDiv() {
// Ensure the container dimensions are calculated correctly
var container = $('#socialsContainer');
var div = $div; // Make sure $div refers to the correct element

var containerWidth = container.width();
var containerHeight = $(window).height(); // Corrected to use container's height instead of window's height

var divWidth = div.width();
var divHeight = div.height();

var newLeft = div.position().left + speedX;
var newTop = div.position().top + speedY;

// Check for collisions with the container's boundaries and reverse direction
if (newLeft < 0 || newLeft + divWidth > containerWidth) {
    speedX = -speedX;
    newLeft = Math.max(0, Math.min(newLeft, containerWidth - divWidth)); // Ensure it stays within the bounds
}
if (newTop < 0 || newTop + divHeight > containerHeight) {
    speedY = -speedY;
    newTop = Math.max(0, Math.min(newTop, containerHeight - divHeight)); // Ensure it stays within the bounds
}

// Apply new position to the div
div.css({
    left: newLeft + 'px',
    top: newTop + 'px'
});

// Request the next frame for smooth animation
requestAnimationFrame(moveDiv);
}

// Start the movement
moveDiv();


    
});