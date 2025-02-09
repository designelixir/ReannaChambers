'use client';
import React, { useEffect } from "react";
import Logo from "./components/Logo";
import WelcomeMarquee from "./components/WelcomeMarquee";
import { gsap } from "gsap";
import HomeCardAnimation2 from "./components/HomeCardAnimation2";
import PlayingCardFormat from "./components/PlayingCardFormat";
import $ from 'jquery'



function expandCard(cardId: string, destination: string) {
  if (typeof window !== "undefined") {
    const cardTarget = document.getElementById(cardId + "Post");
    if (!cardTarget) return;
    $(cardTarget).toggleClass("flipped");
    const viewerWidth = window.innerWidth / 2;
    const viewerHeight = window.innerHeight / 2;
    const cardRect = cardTarget.getBoundingClientRect();
    setTimeout(() => {
        $(cardTarget).css({
            "transform": `translate(${-(viewerWidth / 2) + (cardRect.width / 2)}px, ${-(viewerHeight / 2) - (cardRect.height / 2) }px) `,
            "transition": "transform 1s ease"
        })
    }, 900)

    setTimeout(()=> {
    $(cardTarget).css({
        "transform": `scale(10) rotate(90deg)`,
        "zIndex": "9999999999999999"
    })
        
    }, 1500)
    setTimeout(()=> {window.location.href = destination;}, 2000)

  }
}


export default function HomePageContent() {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
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
        delay: 6, // Start after 6 seconds
        ease: "power1.out",
      });
    }
  }, []);
  

  return (
    <section id="Home">
      
      <div id="marqueeWrapper">
        <WelcomeMarquee items={['Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome']} />
      </div>
      <div className="hero-wrapper flex-center-center flex-column">
       
        <div className="logo-wrapper flex-center-center no-flex-grow">
          <Logo homepageLogo={true}></Logo>
        </div>
        <h2 className="homepage-description-text black-text-glow"><i>art</i></h2>
        <h2 className="black-text-glow"><span className="aalt">P</span>RODUCTION</h2>
        <h2 className="black-text-glow"><i>photog<span className="aalt">r</span>aphy</i></h2>
        <h2 className="black-text-glow" style={{ marginTop: "10px" }}><i>&#xF00E; MORE</i></h2>
      </div>

      <div className="animation-desktop">
        <HomeCardAnimation2 />
      </div>
      
      <div className="flex-start-center positioner-wrapper full-width" id="mainCardsWrapper">
        <div id="AboutCardPositionerPost" className="positioner-post flex-center-start flex-column" style={{opacity: '0'}} onClick={() => expandCard("AboutCard", '/production')}>
          <div id="AboutCardStar" className="positioner-star black-text-glow custom-symbol-font">*</div>
          <div className="card flex-start-center" id="AboutCardPost" >
              <div className="card-inner">
                  <div className="card-front flex-center-center about-card-front">
                      <PlayingCardFormat title="About" color="var(--off-black)"></PlayingCardFormat>
                  </div>
                  <div className="card-back flex-center-center">
                      <div className="card-back-design"></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="PhotoCardPositionerPost" className="positioner-post flex-center-start flex-column" style={{opacity: '0'}} onClick={() => expandCard("PhotoCard", '/production')}>
          <div id="PhotoCardStar" className="positioner-star black-text-glow custom-symbol-font">*</div>
          <div className="card flex-start-center" id="PhotoCardPost" >
              <div className="card-inner">
                  <div className="card-front flex-center-center photo-card-front">
                      <PlayingCardFormat title="Photo" color="var(--deep-red)"></PlayingCardFormat>
                  </div>
                  <div className="card-back flex-center-center">
                      <div className="card-back-design"></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="ProductionCardPositionerPost" className="positioner-post flex-center-start flex-column" onClick={() => expandCard("ProductionCard", '/production')} style={{opacity: '0'}}>
          <div id="ProductionCardStar" className="positioner-star black-text-glow custom-symbol-font">*</div> 
          <div className="card flex-start-center" id="ProductionCardPost" >
              <div className="card-inner">
                  <div className="card-front flex-center-center production-card-front">
                      <PlayingCardFormat title="Production" color="var(--off-black)"></PlayingCardFormat>
                  </div>
                  <div className="card-back flex-center-center">
                      <div className="card-back-design"></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="VideoCardPositionerPost" className="positioner-post flex-center-start flex-column" style={{opacity: '0'}}>
          <div id="VideoCardStar" className="positioner-star black-text-glow custom-symbol-font">*</div>
            <div className="card flex-start-center" id="VideoCardPost">
                <div className="card-inner">
                    <div className="card-front flex-center-center video-card-front">
                        <PlayingCardFormat title="Video" color="var(--deep-red)"></PlayingCardFormat>
                    </div>
                    <div className="card-back flex-center-center">
                        <div className="card-back-design"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      

      
    </section>
  );
}
