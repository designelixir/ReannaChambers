'use client';

import React, { useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import gsap from 'gsap';
import ProjectCard from './ProjectCard';
import './cardAnimation.css';
import { projectCards } from './photoData'; // Import your photo data

interface CardState {
  id: string;
  moved: boolean;
}

export default function PhotoPage() {
  const [cardStates, setCardStates] = useState<CardState[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const changeTeam = (id: string) => {
    const box = document.querySelector(id) as HTMLElement;
    const viewerWindow = document.querySelector('#viewerWindow');
    const target = document.querySelector('#goToMe') as HTMLElement;
    const content = box?.querySelector('.front-content') as HTMLElement;
    const originalContainer = document.querySelector(`${id.split('-move')[0]}`) as HTMLElement;

    const cardState = cardStates.find((card) => card.id === id);
    const moved = cardState?.moved || false;

    if (box && target && originalContainer && viewerWindow) {
        viewerWindow.classList.remove('blur-bg')
      const rect = box.getBoundingClientRect();
      const destination = moved ? originalContainer : target;

      if (moved) {
        if (content) {
            
          content.classList.remove('visible-content');
        }
        
        target.classList.remove('fullscreen');
        setTimeout(() => {
          const updatedRect = target.getBoundingClientRect();
          animateMovement(box, originalContainer, updatedRect, updatedRect, viewerWindow, id, moved, content);
        }, 1000);
      } else {
        animateMovement(box, target, rect, null, viewerWindow, id, moved, content);
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
            
          box.classList.remove('flip');
          
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
    <section>
      <Navigation />
      <main id="cardContainer" className="flex-start-spaceevenly flex-wrap" ref={containerRef}>
        {projectCards.map((projectData, index) => (
          <div
            key={`column-${index}`}
            className={index % 2 === 0 ? 'tall-column' : 'wide-column'}
            id={`column${index + 1}`}
          >
            <ProjectCard projectData={projectData} onClick={changeTeam} />
          </div>
        ))}
      </main>
      <div id="viewerWindow" className="flex-center-center inactive-viewer-window">
        <div id="goToMe"></div>
      </div>
    </section>
  );
}
