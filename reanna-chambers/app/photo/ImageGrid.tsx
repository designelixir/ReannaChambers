'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './imageGrid.css';

interface ImageData {
  path: string;
  caption: string;
  orientTall: boolean;
}

interface ImageGridProps {
  images: ImageData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.grid-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 3,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <div ref={gridRef} className="image-grid flex-start-start flex-wrap">
      {images.map((image, index) => (
        <div
          key={index}
          className={`grid-item ${image.orientTall ? 'tall' : 'wide'}`}
        >
          <img
            src={image.path}
            alt={image.caption || 'image caption'}
            className={`image ${image.orientTall ? 'image-tall' : 'image-wide'}`}
          />
          <p className="caption">{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
