'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface WelcomeMarqueeProps {
  items: string[];
}

export default function WelcomeMarquee({ items }: WelcomeMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (marqueeElement) {
      const marqueeContent = marqueeElement.querySelector(".marquee-content") as HTMLElement;
      if (marqueeContent) {
        const duplicateContent = marqueeContent.cloneNode(true);
        marqueeElement.appendChild(duplicateContent);

        const marqueeWidth = marqueeContent.offsetWidth;

        gsap.fromTo(
          marqueeElement,
          { x: 0 },
          {
            x: -marqueeWidth,
            duration: 60,
            ease: "none",
            repeat: -1,
          }
        );
      }
    }
  }, []);

  return (
    <div className="marquee-container flex-center-start" ref={marqueeRef}>
      <div className="marquee-content flex-center-start">
        {items.map((text, index) => (
          <React.Fragment key={index}>
            <p className="all-caps" style={{textWrap: 'nowrap'}}>{text}</p>
            <Image src="/flower-white.png" className="marquee-image" width={15} height={15} alt="decorative flower" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
