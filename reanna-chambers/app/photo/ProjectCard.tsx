'use client';

import React, { useEffect, useRef, useState } from 'react';
import { flipCard } from './animationUtils';
import { ProjectData } from './photoData';
import ProjectCardPhotoGrid from './ProjectCardPhotoGrid';
import gsap from 'gsap';

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
    gsap.fromTo('.card-section', {left: '-100vw'}, {left: '0vw'})
      // Delay flipCard by 500ms
      setTimeout(() => {
        if (cardRef.current) {
          flipCard(cardRef.current, true);
        }
        
      }, 1000);
  
      // Then update state 2000ms after flipCard
      setTimeout(() => {
        setIsFlipped(true);
      }, 2500); // 500ms + 2000ms delay total
    
  }, []);
  

  const handleClick = () => {
    onClick(`#${id}-move`);
    if (cardRef.current) {
      if (isFlipped){
        flipCard(cardRef.current, !isFlipped);
        setReadyLoadImages(true);
        setIsInGoToMe(true);
        setIsFlipped(false)
        console.log("done here")
        
      } else {
        
        setReadyLoadImages(false);
        
        
        console.log(" here")
        setTimeout(() => {
          if (cardRef.current && isInGoToMe) {
            setIsInGoToMe(false);
            setIsFlipped(true)
            console.log(" here")
            flipCard(cardRef.current, !isFlipped);
          } else {
            console.log("false")
          }
        }, 1000);
      }
    }

    // Check if the card is now inside #goToMe
    setTimeout(() => {
      if (cardRef.current?.parentElement?.id === "goToMe") {
        setIsInGoToMe(true);
        setReadyLoadImages(true);
        console.log("true")
        
      } else {
        
        console.log("false")
      }
    }, 500); // Slight delay to ensure the transition completes

    
    
    
  };

  return (
    <div id={id} className={`card ${className} flex-center-center`} style={{margin: '0vw 2vw 2vw 0'}}>
      <div id={`${id}-move`} className="card-inner box-shadow  " ref={cardRef}>
        <div className="front card-back-design">
          <div className="front-content" ref={frontContentRef} >
            <div className="front-content-wrapper"  >
            <div className="card-header-wrapper flex-center-spacebetween full-width">
                  <div className='flex-start-start flex-column'>
                    <h1 className="black-text card-header-title"><i>{title}</i></h1>
                    {subtitle && 
                      <h2 className='modern-font card-header-subtitle'><strong>{subtitle}</strong></h2>
                    }
                  </div>
                  <button className="close-button hover" onClick={handleClick}>X</button>
                </div>
                {readyLoadImages && 
                <div className="flex-start-start flex-column full-width ">
                {description && <div className='card-description modern-font full-width'><br />{description}</div>}
                
                  <ProjectCardPhotoGrid 
                    columnLayout={columnLayout} 
                    shouldRender={isInGoToMe} // Pass the control prop
                  />
              
              </div>
                }
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
