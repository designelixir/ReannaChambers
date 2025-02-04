'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

interface ProjectCardPhotoGridProps {
  columnLayout: React.ReactNode;
  shouldRender: boolean;  // New prop to control mounting
}

const ProjectCardPhotoGrid: React.FC<ProjectCardPhotoGridProps> = ({ columnLayout, shouldRender }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldRender || !gridRef.current) return;

    // Ensure images are fully loaded before animating
    imagesLoaded(gridRef.current, { background: true }, () => {
      const items = gridRef.current?.querySelectorAll(".mason-item");

      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 }, // Start hidden and slightly lower
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15, // Stagger animation for a cascading effect
            ease: "power3.out",
            delay: 1, // ⏳ 3-second delay before animation
          }
        );
      }
    });
  }, [shouldRender]); // Re-run when shouldRender changes

  // If shouldRender is false, return null (don’t render anything)
  if (!shouldRender) return null;

  return (
    <div ref={gridRef}>
      {columnLayout}
    </div>
  );
};

export default ProjectCardPhotoGrid;
