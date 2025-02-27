'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './photoPage.css';
import ProjectCard, { ProjectData } from './ProjectCard';

interface CardState {
  id: string;
  moved: boolean;
}

interface ProjectCardGridProps {
  column1Cards?: ProjectData[];
  column2Cards?: ProjectData[];
  column3Cards?: ProjectData[];
}

export default function ProjectCardGrid({ 
  column1Cards = [],
  column2Cards = [],
  column3Cards = []
}: ProjectCardGridProps) {

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
      viewerWindow.classList.remove('blur-bg');
      const rect = box.getBoundingClientRect();
      if (moved) {
        if (content) {
          content.classList.remove('visible-content');
        }
        
        target.classList.remove('fullscreen');
        setTimeout(() => {
          const updatedRect = target.getBoundingClientRect();
          animateMovement(box, originalContainer, updatedRect, updatedRect, viewerWindow, id, moved, content);
        }, 500);
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
          viewerWindow.classList.add('blur-bg');

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

  useGSAP(() => {
    const positioner = document.querySelector('.positioner-column');
    const cards = document.querySelectorAll('.card'); 
    
    if (positioner && cards.length > 0) {
      const positionerRect = positioner.getBoundingClientRect();
      const timeline = gsap.timeline();

      // Align all cards at the top-right corner of positioner-column
      cards.forEach((card) => {
        timeline.set(card, {
          x: 0,
          y: 0,
          opacity: 0,
        });

        // Get current position of the card
        const cardRect = card.getBoundingClientRect();
        const translateX = '-100vw';
        const translateY = positionerRect.top - cardRect.top;
        
        // Move all cards to the top-right corner of positioner-column
        timeline.set(card, {
          x: translateX,
          y: translateY,
          opacity: 0,
          ease: "power2.out"
        });
      });

      // Wait for 1 second before distributing the cards back
      timeline.to(cards, { opacity: 1, duration: 0.5 });

      // Move all cards back to their original positions simultaneously
      timeline.to(cards, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, { scope: containerRef });

  return (
    <section>
      <div className='positioner-column' style={{width: '27vw', aspectRatio: '3/4'}}></div>
      <main id="cardContainer" className="flex-start-start" ref={containerRef}>
        
        <div className='tall-column flex-center-center flex-wrap' style={{maxWidth: `${column1Cards.length <= 0 && '0'}`, padding: `${column1Cards.length <= 0 && '0'}`}} id="column1">
          {column1Cards.length > 0 && 
            column1Cards.map((card, index) => (
              <ProjectCard key={index} projectData={card} onClick={changeTeam} />
            ))
          }
        </div>

        <div id="column2and3wrapper" className='flex-start-start'>
          <div className='wide-column flex-center-center flex-wrap'  style={{display: `${column2Cards.length > 0 ? 'block': 'none'}`}} id="column2">
            {column2Cards.length > 0 && 
              column2Cards.map((card, index) => (
                <ProjectCard key={index} projectData={card} onClick={changeTeam} />
              ))
            }
          </div>
          <div className='tall-column flex-center-center flex-wrap'  style={{display: `${column3Cards.length > 0 ? 'block': 'none'}`}} id="column3">
            {column3Cards.length > 0 && 
              column3Cards.map((card, index) => (
                <ProjectCard key={index} projectData={card} onClick={changeTeam} />
              ))
            }
          </div>
        </div>
      </main>
      <div id="viewerWindow" className="flex-center-center inactive-viewer-window">
        <div id="goToMe"></div>
      </div>
    </section>
  );
}
