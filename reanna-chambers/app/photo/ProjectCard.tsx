'use client';

import React, { useEffect, useRef, useState } from 'react';
import { flipCard } from './animationUtils';
import { ProjectData } from './photoData';
import ProjectCardPhotoGrid from './ProjectCardPhotoGrid';

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
    columnLayout,
    className = '',
  } = projectData;

  const cardRef = useRef<HTMLDivElement>(null);
  const frontContentRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [readyLoadImages, setReadyLoadImages] = useState(false);
  const [isInGoToMe, setIsInGoToMe] = useState(false); 
  

  useEffect(() => {
    if (cardRef.current) {
      flipCard(cardRef.current, true);
      setIsFlipped(true);
    }
  }, []);

  const handleClick = () => {
    if (cardRef.current) {
      flipCard(cardRef.current, !isFlipped);
      setIsFlipped(!isFlipped && readyLoadImages);
    }

    // Check if the card is now inside #goToMe
    setTimeout(() => {
      if (cardRef.current?.parentElement?.id === "goToMe") {
        setIsInGoToMe(true);
        
      } else {
        setIsInGoToMe(false);
        
      }
    }, 500); // Slight delay to ensure the transition completes

    setReadyLoadImages(true);
    onClick(`#${id}-move`);
    
  };

  return (
    <div id={id} className={`card ${className} flex-center-center`} style={{margin: '0vw 2vw 2vw 0'}}>
      <div id={`${id}-move`} className="card-inner box-shadow  " ref={cardRef}>
        <div className="front">
          <div className="front-content" ref={frontContentRef} >
            <div className="front-content-wrapper" >
              <div className="flex-start-start flex-column full-width" style={{ padding: '10px' }}>
                <div className="flex-start-spacebetween full-width">
                  <div className='flex-start-start flex-column'>
                    <h1 className="project-title black-text" style={{ textShadow: 'unset', fontWeight: '700' }}>
                      {title}
                    </h1>
                    {subtitle && <h2 style={{ fontSize: '28px', lineHeight: '32px' }}>{subtitle}</h2>}
                  </div>
                  <button className="close-button hover" onClick={handleClick}>X</button>
                </div>
              </div>
              <div id="masonryWrapper" className="hide-scrollbars">
                {description && <div><br />{description}</div>}
                <ProjectCardPhotoGrid 
                  columnLayout={columnLayout} 
                  shouldRender={isInGoToMe} // Pass the control prop
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="back flex-end-center"
          style={{ backgroundImage: `url('${mainImage}')` }}
          onClick={handleClick}
        >
          <div className="back-content flex-center-center  centered-text flex-column">
            <h2 className="project-title">{title}</h2>
            {subtitle && <h3 className="project-subtitle">{subtitle}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
