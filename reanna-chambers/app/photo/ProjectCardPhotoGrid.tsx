'use client';

import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

interface ProjectCardPhotoGridProps {
  columnLayout: ReactNode;
}

const ProjectCardPhotoGrid: React.FC<ProjectCardPhotoGridProps> = ({ columnLayout }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Ensure images are fully loaded before animating
    imagesLoaded(gridRef.current, { background: true }, () => {
      const items = gridRef.current?.querySelectorAll(".mason-item");

      if (items && items.length > 0) {
        setTimeout(() => {
          gsap.fromTo(
            items,
            { opacity: 0, y: 20 }, // Start hidden and slightly lower
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15, // Stagger animation for a cascading effect
              ease: "power3.out",
            }
          );
        }, 3000); // ⏳ Delay the animation by 3 seconds
      }
    });
  }, []);

  return (
    <div ref={gridRef}>
      {columnLayout}
    </div>
  );
};

export default ProjectCardPhotoGrid;
