'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function WelcomeMarquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (marqueeElement) {
      // Duplicate marquee content for seamless looping
      const marqueeContent = marqueeElement.querySelector(".marquee-content") as HTMLElement;
      if (marqueeContent) {
        const duplicateContent = marqueeContent.cloneNode(true);
        marqueeElement.appendChild(duplicateContent);

        const marqueeWidth = marqueeContent.offsetWidth;

        // Set up GSAP infinite animation
        gsap.fromTo(
          marqueeElement,
          { x: 0 }, // Start position
          {
            x: -marqueeWidth, // End position
            duration: 60, // Adjust speed as needed
            ease: "none",
            repeat: -1, // Infinite looping
          }
        );
      }
    }
  }, []);

  return (
    <div className="marquee-container flex-center-start" ref={marqueeRef}>
      <div className="marquee-content flex-center-start">
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
        <p className="all-caps">Welcome</p>
        <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
      </div>
    </div>
  );
}
