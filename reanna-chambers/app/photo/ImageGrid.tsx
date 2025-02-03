'use client';

import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import Image from 'next/image';
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
      const masonryInstance = new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 16,
      });

      imagesLoaded(gridRef.current).on('progress', () => {
        masonryInstance.layout();
      });

      const items = gridRef.current.querySelectorAll('.grid-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: 'power3.out',
        }
      );

      return () => masonryInstance.destroy();
    }
  }, []);

  return (
    <div ref={gridRef} className="image-grid">
      <div className="grid-sizer"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`grid-item ${image.orientTall ? 'tall' : 'wide'}`}
        >
          <Image
            src={`/${image.path}`}
            alt={image.caption.length > 0 ? image.caption : 'Project image'}
            layout="responsive"
            width={500}
            height={300}
            className="responsive-image"
          />
          <p className="caption">{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
