'use client';
import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import WelcomeMarquee from "./components/WelcomeMarquee";
import { gsap } from "gsap";
import HomeCardAnimation2 from "./components/Cards/HomeCardAnimation2";
import PlayingCardFormat from "./components/Cards/PlayingCardFormat";
import $ from 'jquery';
import BigCard from "./components/Cards/BigCard";

export default function HomePageContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [goToDestination, setGoToDestination] = useState('');

  const expandCard = (cardId: string, destination: string, rotate: boolean) => {
    if (typeof window !== "undefined") {
      const cardTarget = document.getElementById(cardId + "Post");
      if (!cardTarget) return;
  
      $(cardTarget).toggleClass("flipped");
  
      const cardRect = cardTarget.getBoundingClientRect();
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
  
      const translateX = viewportCenterX - (cardRect.left + cardRect.width / 2);
      const translateY = viewportCenterY - (cardRect.top + cardRect.height / 2);
  
      setTimeout(() => {
        $(cardTarget).css({
          "transform": `translate(${translateX}px, ${translateY}px)${rotate ? ' rotate(90deg)' : ''}`,
          "transition": "transform 1s ease",
        });
      }, 1000);

      setTimeout(() => {
        $(cardTarget).css({
          "opacity": `0`,
          "transition": "opacity 1s ease",
        });
      }, 1900);

      setTimeout(() => {
        setIsExpanded(true); 
        setGoToDestination(destination)
      }, 1800);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
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
        stagger: 0.5,
        delay: 6,
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <section id="Home">
      {isExpanded && goToDestination && <BigCard destination={goToDestination} />}
      
      <div id="marqueeWrapper">
        <WelcomeMarquee items={['Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome']} />
      </div>
      <div className="hero-wrapper flex-center-center flex-column">
       
        <div className="logo-wrapper flex-center-center no-flex-grow flex-column">
          <Logo homepageLogo={true}></Logo>
          <span className=" custom-symbol-font icon-flower black-text-glow" style={{fontSize: '20px', marginTop: '25px', marginBottom: '25px'}}></span>
        </div>
        <div className="flex-center-center flex-column homepage-text-list no-flex-grow">
          <h2 className="homepage-description-text black-text-glow palace-regular" style={{fontSize: '36px', lineHeight: '40px'}}><i>art</i></h2>
          <h2 className="black-text-glow palace-regular" style={{fontSize: '36px', lineHeight: '40px'}}>PRODUCTION</h2>
          <h2 className="black-text-glow palace-regular" style={{fontSize: '36px', lineHeight: '40px'}}><i className="palace-italic">photog<span className="aalt"><i>r</i></span>aphy</i></h2>
          <h2 className="black-text-glow palace-regular and-more" style={{fontSize: '36px', lineHeight: '40px', marginTop: '10px'}}><i>&amp; MORE</i></h2>
        </div>
      </div>

      <div className="animation-desktop">
        <HomeCardAnimation2 />
      </div>
      
      <div className="flex-start-center positioner-wrapper full-width" id="mainCardsWrapper">
        <div id="AboutCardPositionerPost" className="positioner-post flex-center-start flex-column" style={{opacity: '0'}} onClick={() => expandCard("AboutCard", '/about', false)}>
          <div id="AboutCardStar" className="positioner-star black-text-glow icon-flower custom-symbol-font"></div>
          <div className="card flex-start-center no-flex-grow" id="AboutCardPost" >
              <div className="card-inner">
                  <div className="card-front flex-center-center about-card-front">
                      <PlayingCardFormat title="about" color="off-black"></PlayingCardFormat>
                  </div>
                  <div className="card-back flex-center-center">
                      <div className="card-back-design"></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="PhotoCardPositionerPost" className="positioner-post flex-center-start flex-column" style={{opacity: '0'}} onClick={() => expandCard("PhotoCard", '/photo', false)}>
          <div id="PhotoCardStar" className="positioner-star black-text-glow custom-symbol-font icon-flower"></div>
          <div className="card flex-start-center no-flex-grow" id="PhotoCardPost" >
              <div className="card-inner">
                  <div className="card-front flex-center-center photo-card-front">
                      <PlayingCardFormat title="photo" color="deep-red"></PlayingCardFormat>
                  </div>
                  <div className="card-back flex-center-center">
                      <div className="card-back-design"></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="ProductionCardPositionerPost" className="positioner-post flex-center-start flex-column" onClick={() => expandCard("ProductionCard", '/production', false)} style={{opacity: '0'}}>
          <div id="ProductionCardStar" className="positioner-star black-text-glow custom-symbol-font icon-flower"></div> 
          <div className="card flex-start-center no-flex-grow" id="ProductionCardPost" >
              <div className="card-inner">
                  <div className="card-front flex-center-center production-card-front">
                      <PlayingCardFormat title="production" color="off-black"></PlayingCardFormat>
                  </div>
                  <div className="card-back flex-center-center">
                      <div className="card-back-design"></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="VideoCardPositionerPost" className="positioner-post flex-center-start flex-column" onClick={() => expandCard("VideoCard", '/video', true)} style={{opacity: '0'}}>
          <div id="VideoCardStar" className="positioner-star black-text-glow custom-symbol-font icon-flower"></div>
            <div className="card flex-start-center no-flex-grow" id="VideoCardPost">
                <div className="card-inner">
                    <div className="card-front flex-center-center video-card-front">
                        <PlayingCardFormat title="video" color="deep-red"></PlayingCardFormat>
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
