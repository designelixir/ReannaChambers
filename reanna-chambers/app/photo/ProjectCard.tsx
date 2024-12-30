'use client';

import React, { useEffect, useRef, useState } from 'react';
import './cardAnimation.css';
import { flipCard } from './animationUtils';
import gsap from 'gsap';
import ImageGrid from './ImageGrid';

interface ImageData {
  path: string;
  caption: string;
  orientTall: boolean;
}

interface ProjectData {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  mainImage: string;
  imagesAndCaptions?: ImageData[];
  className?: string;
}

interface ProjectCardProps {
  projectData: ProjectData; // Pass all project data as a single object
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData, onClick }) => {
  const {
    id,
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
    onClick(`#${id}-move`);
  };

  return (
    <div id={id} className={`card ${className} flex-center-center`}>
      <div id={`${id}-move`} className="card-inner" ref={cardRef}>
        <div className="front">
          <div className="front-content" ref={frontContentRef}>
            <div className="flex-center-spacebetween" style={{ padding: '10px' }}>
              <div>
                <h1 className="project-title black-text">
                  {title} {subtitle ? <span>- {subtitle}</span> : ''}
                </h1>
                {description && <p>{description}</p>}
              </div>
              <button className="close-button" onClick={handleClick}>
                X
              </button>
            </div>
            <ImageGrid images={imagesAndCaptions} />
          </div>
        </div>
        <div
          className="back flex-end-center"
          style={{ backgroundImage: `url(${mainImage})` }}
          onClick={handleClick}
        >
          <div className="back-content flex-center-center centered-text flex-column">
            <h2 className="project-title">{title}</h2>
            {subtitle && <h3 className="project-title">{subtitle}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
