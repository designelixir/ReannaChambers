'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './cardAnimation.css';
import { flipCard } from './animationUtils';
import ResponsiveMasonry from './ResponsiveMasonry';
import { initializeMasonry } from './masonryUtils';
import { ImageData, ProjectData } from './photoData';

interface ProjectCardProps {
  projectData: ProjectData; // Pass all project data as a single object
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData, onClick }) => {
  const {
    id = '',
    title,
    subtitle,
    description,
    mainImage,
    imagesAndCaptions = [],
    className = '',
  } = projectData;

  const cardRef = useRef<HTMLDivElement>(null);
  const frontContentRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [readyLoadImages, setReadyLoadImages] = useState(false); // Track when to load images

  useEffect(() => {
    if (cardRef.current) {
      // Trigger the flip animation on initial load
      flipCard(cardRef.current, true);
      setIsFlipped(true); // Update state to reflect the flipped state
    }
  }, []);

  const handleClick = () => {
    if (cardRef.current) {
      flipCard(cardRef.current, !isFlipped); // Flip to the opposite side
      setIsFlipped(!isFlipped); // Update the flipped state
    }
    setReadyLoadImages(true);
    onClick(`#${id}-move`);

    // After handling other click functionalities, delay setting readyLoadImages
    
       
      
  };

  return (
    <div id={id} className={`card ${className} flex-center-center`}>
      <div id={`${id}-move`} className="card-inner" ref={cardRef}>
        <div className="front">
          <div className="front-content" ref={frontContentRef}>
            <div className="flex-start-start flex-column full-width" style={{ padding: '10px' }}>
              <div className='flex-start-spacebetween full-width'>
                <h1 className="project-title black-text">{title} {subtitle ? <span>- {subtitle}</span> : ''}</h1>
                <button className="close-button hover" onClick={handleClick}>X</button>
              </div>
              {description && <div>{description}</div>}
            </div>
            <div id="masonryWrapper" className="hide-scrollbars">
              {readyLoadImages && (
                <ResponsiveMasonry
                  images={imagesAndCaptions}
                  id={title.replace(/\s+/g, '')}
                />
              )}
            </div>
          </div>
        </div>
        <div
          className="back flex-end-center"
          style={{ backgroundImage: `url('${mainImage}')` }}
          onClick={handleClick}
        >
          <div className="back-content flex-center-center centered-text flex-column">
            <h2 className="project-title">{title}</h2>
            {subtitle && <h3 className="project-subtitle">{subtitle}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
