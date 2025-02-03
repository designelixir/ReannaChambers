import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';

/**
 * Initializes Masonry and sets up GSAP animations for a grid.
 * @param {string} id - The CSS selector or ID of the grid element.
 * @returns {Masonry} - The Masonry instance.
 */
export function initializeMasonry(id) {
  const grid = document.querySelector(id+'Grid');
  console.log('hey there' , grid)
  if (!grid) return;

  // Initialize Masonry
  const masonryInstance = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  // Animate items with GSAP after images load
  imagesLoaded(grid).on('progress', () => {
    const items = grid.querySelectorAll('.grid-item img');

    gsap.fromTo(
      items,
      { opacity: 0 }, // Start state
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1.5, // Animation delay
      }
    );

    // Trigger layout update for Masonry
    masonryInstance.layout();
  });

  return masonryInstance;
}
