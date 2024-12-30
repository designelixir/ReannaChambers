'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import WelcomeMarquee from "./components/WelcomeMarquee";
import HomeCardAnimation from "./components/HomeCardAnimation";
import { gsap } from "gsap";


export default function Home() {
  
  useEffect(() => {
    // GSAP Animation for marqueeWrapper
    gsap.fromTo(
      "#marqueeWrapper",
      { opacity: 0, y: "-10vh" },
      { opacity: 1, y: "15px", duration: 1, ease: "power1.out" }
    );
    const heroElements = document.querySelectorAll(".hero-wrapper > *");
    gsap.to(heroElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5, // Fade in elements one by one
      delay: 6, // Start after 10 seconds
      ease: "power1.out",
    });

    
  }, []);

  return (
    <section id="Home">
      
      <div id="marqueeWrapper">
        <WelcomeMarquee />
      </div>
      <div className="hero-wrapper flex-center-center flex-column">
        <div>
        <Image
          src="/reanna-chambers-logo.png"
          className="fade-in"
          height={150}
          width={700}
          alt="Reanna Chambers Logo"
        />
        </div>
        <h2>
          <i>art</i>
        </h2>
        <h2>PRODUCTION</h2>
        <h2>
          <i>
            photog<span className="aalt">r</span>aphy
          </i>
        </h2>
        <h2 style={{ marginTop: "10px" }}>
          <i>&#xF00E; MORE</i>
        </h2>
      </div>
      <div className="animation-desktop">
        <HomeCardAnimation />
      </div>
      <div className="animation-mobile">
        Test
      </div>
      
    </section>
  );
}
