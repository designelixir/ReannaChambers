'use client';

import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface FadeInSectionProps {
  children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(sectionRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
          observer.unobserve(entry.target); // Unobserve after animation runs once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div ref={sectionRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
      {children}
    </div>
  );
}
