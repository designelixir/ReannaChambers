'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LightboxProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ children, isOpen, onClose }: LightboxProps) {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(lightboxRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null; // Prevent rendering when closed

  return (
    <div className="lightbox-overlay" ref={lightboxRef} onClick={onClose}>
      <div className="lightbox-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <div className="flex-center-end" style={{marginBottom: '-40px'}}>
            <button className="close-button hover" onClick={onClose}>✕</button>
        </div>
        
        {children}
      </div>
    </div>
  );
}
