'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import ProjectCard from './ProjectCard';
import { projectCards } from './photoData'; 

interface CardState {
  id: string;
  moved: boolean;
}

export default function PhotoPage() {
  gsap.fromTo('.card-section', {left: '-100vw'}, {left: '0vw'})
  const [cardStates, setCardStates] = useState<CardState[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  let scrollPosition = { top: 0, left: 0 };
  function disableScroll() {
    // Save the current scroll position
    scrollPosition = {
      top: window.pageYOffset || document.documentElement.scrollTop,
      left: window.pageXOffset || document.documentElement.scrollLeft,
    };
  
    // Prevent further scrolling
    window.onscroll = function() {
      window.scrollTo(scrollPosition.left, scrollPosition.top);
    };
  }
  
  function enableScroll() {
    // Remove the onscroll handler to allow scrolling again
    window.onscroll = null;
  }

  const changeTeam = (id: string) => {
    const box = document.querySelector(id) as HTMLElement;
    const viewerWindow = document.querySelector('#viewerWindow');
    const target = document.querySelector('#goToMe') as HTMLElement;
    const container = document.querySelector('#photoCardGrid') as HTMLElement;
    const content = box?.querySelector('.front-content') as HTMLElement;
    const originalContainer = document.querySelector(`${id.split('-move')[0]}`) as HTMLElement;

    const cardState = cardStates.find((card) => card.id === id);
    const moved = cardState?.moved || false;

    if (box && target && originalContainer && viewerWindow) {
        viewerWindow.classList.remove('blur-bg')
      const rect = box.getBoundingClientRect();
      // const destination = moved ? originalContainer : target;

      if (moved) {
        if (content) {
            
          content.classList.remove('visible-content');
        }
        
        target.classList.remove('fullscreen');
        setTimeout(() => {
          const updatedRect = target.getBoundingClientRect();
          animateMovement(box, originalContainer, updatedRect, updatedRect, viewerWindow, id, moved, content);
        }, 1000);
        // container.classList.remove('no-scroll-window')
      } else {
        animateMovement(box, target, rect, null, viewerWindow, id, moved, content);
        
        // container.classList.add('no-scroll-window')
      }
    }
  };

  const animateMovement = (
    box: HTMLElement,
    destination: HTMLElement,
    rect: DOMRect,
    prevRect: DOMRect | null,
    viewerWindow: Element,
    id: string,
    moved: boolean,
    content: HTMLElement | null
  ) => {
    destination.appendChild(box);
    gsap.set(box, { x: 0, y: 0 });

    const newRect = box.getBoundingClientRect();
    const isTallCard = box.parentElement?.classList.contains('tall-card');
    const rotation = isTallCard ? (moved ? -90 : 90) : 0;

    const fromRect = prevRect || rect;

    gsap.from(box, {
      duration: 1,
      x: fromRect.left - newRect.left,
      y: fromRect.top - newRect.top,
      rotation,
      ease: 'power3.out',
      onComplete: () => {
        if (!moved) {
          box.classList.add('flip');
          destination.classList.add('fullscreen');
          viewerWindow.classList.add('blur-bg')

          if (content) {
            content.classList.add('visible-content');
          }
        } else {
            
          const children = box.children;
        Array.from(children).forEach((child, index) => {
          setTimeout(() => {
            child.classList.remove('flip');
          }, index * 300); // 300ms delay between each removal
        });

          
        }

        setCardStates((prevStates) => {
          if (prevStates.some((card) => card.id === id)) {
            return prevStates.map((card) =>
              card.id === id ? { ...card, moved: !moved } : card
            );
          }
          return [...prevStates, { id, moved: !moved }];
        });

        if (moved) {
          viewerWindow.classList.add('inactive-viewer-window');
        } else {
          viewerWindow.classList.remove('inactive-viewer-window');
        }
      },
    });
  };

  return (
    <>
      <main id="cardContainer"  className="flex-start-start card-section" ref={containerRef}>
        <div className='tall-column flex-center-center flex-wrap' id="column1">
          <ProjectCard projectData={projectCards[0]} onClick={changeTeam} />
          <ProjectCard projectData={projectCards[3]} onClick={changeTeam} />
          <ProjectCard projectData={projectCards[6]} onClick={changeTeam} />
          <ProjectCard projectData={projectCards[10]} onClick={changeTeam} />
          <ProjectCard projectData={projectCards[13]} onClick={changeTeam} />
          
          
        </div>
        <div id="column2and3wrapper" className='flex-start-start'>
          <div className='wide-column flex-center-center flex-wrap' id="column2">
            <ProjectCard projectData={projectCards[1]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[4]} onClick={changeTeam} />
            
            <ProjectCard projectData={projectCards[5]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[9]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[11]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[14]} onClick={changeTeam} />
            
          </div>
          <div className='tall-column flex-center-center flex-wrap' id="column3">
            <ProjectCard projectData={projectCards[2]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[7]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[8]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[12]} onClick={changeTeam} />
            <ProjectCard projectData={projectCards[15]} onClick={changeTeam} />
          </div>
        </div>
        
        

      </main>
      <div id="viewerWindow" className="flex-center-center inactive-viewer-window">
        <div id="goToMe"></div>
      </div>
    </>
    
  );
}

