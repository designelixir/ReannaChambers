'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lightbox from "../components/Lightbox";
import Link from "next/link";

interface PrintData {
  imageUrl: string;
  imageCaption: string;
}

interface PrintsProps {
  prints: PrintData[];
}

export default function Prints({ prints }: PrintsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<PrintData | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".print");

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 }, // Start hidden & slightly below
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15, // Stagger effect for waterfall animation
        ease: "power3.out",
        delay: 0.5, // Small delay before animation starts
      }
    );
  }, [prints]); // Runs when `prints` data updates

  return (
    <section style={{marginBottom: '2.5vw'}}>
      <div ref={containerRef} className="flex-start-start flex-wrap" style={{gap: '10px'}}>
        {prints.map((print, index) => (
          <div
            key={index}
            className="print box-shadow"
            onClick={() => setSelectedImage(print)} // Open Lightbox with clicked image
          >
            <img src={print.imageUrl} alt={print.imageCaption} />
            {/* <div className="caption">
              <p>{print.imageCaption}</p>
            </div> */}
          </div>
        ))}
       
      </div>
      <div style={{padding: '2.5vw 0'}}>
          <p className="modern-font centered-text black-text-glow">For purchase inquiries, contact <Link href="mailto:reannachambers@gmail.com" className="modern-font black-text">reannachambers@gmail.com</Link></p>
        </div>
      {/* Lightbox Component */}
      {selectedImage && (
        <Lightbox isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <img src={selectedImage.imageUrl} style={{width: '100%'}} alt={selectedImage.imageCaption} />
          {/* <p className="caption" style={{width: '100%'}}>{selectedImage.imageCaption}</p> */}
        </Lightbox>
      )}
    </section>
  );
}
