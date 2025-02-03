'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

interface ImageData {
  path: string;
  caption?: string;
  wide: boolean; // Indicates if the item should take up multiple columns
}

interface ResponsiveMasonryProps {
  images: ImageData[];
  id: string;
}

const ResponsiveMasonry: React.FC<ResponsiveMasonryProps> = ({ images, id }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false); // State to track when all images are loaded

  useEffect(() => {
    const masonryInstance = new Masonry(gridRef.current, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          percentPosition: true,
        });
    if (gridRef.current) {
      // Use imagesLoaded to wait for all images to load
      imagesLoaded(gridRef.current, { background: true }, () => {
        setTimeout(() => {
            console.log("starting")
            setIsLoaded(true); // Mark as loaded when all images are loaded
            masonryInstance.layout();
            const items = gridRef.current.querySelectorAll('.grid-item');
            gsap.fromTo(
            items,
            { opacity: 0}, // Start state: invisible and slightly above
            {
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // Stagger the animation for a waterfall effect
                ease: 'power3.out',
                delay: 0.5, // Animation delay before starting
            }
            
            );
          }, 3000);


        // Initialize Masonry
        

        // Animate items with GSAP after all images are loaded
        

        // Trigger layout update for Masonry
        

        // Cleanup Masonry instance on component unmount
        return () => masonryInstance.destroy();
      });
    }
  }, []);

  return (
    <div className="grid" id={`${id}Grid`} ref={gridRef} style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
      <div className="grid-sizer"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`grid-item ${image.wide ? 'grid-item--width2' : ''}`}
        >
          <img src={image.path} alt={image.caption} />
          {image.caption && <p className="caption">{image.caption}</p>}
        </div>
      ))}
    </div>
  );
};

export default ResponsiveMasonry;
