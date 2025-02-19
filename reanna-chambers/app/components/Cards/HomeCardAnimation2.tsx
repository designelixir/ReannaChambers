"use client"; // Ensures this runs only on the client

import React, { useEffect } from "react";
import "./cardAnimation.css";
import gsap from "gsap";
import HomeCards from "./HomeCards";
import $ from 'jquery'

const cardNames = ["PhotoCard", "ProductionCard", "VideoCard", "AboutCard"];
let inactivityTimeout: ReturnType<typeof setTimeout>;

function handleFlip(cardId: string) {
    $('#' + cardId).removeClass("flipped");
    setTimeout(() => {
        $('#' + cardId + "Star").addClass("fade-in")
        $('#' + cardId + "PositionerPost").css({"opacity": "1"});
    }, 500); // Delay set to 1000ms (1 second)
}


function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    wobbleCards();
  }, 5000);
}

function wobbleCards() {
    if (typeof window !== "undefined") {
      const positioners = document.querySelectorAll(".positioner-star");
  
      positioners.forEach((positioner, index) => {
        gsap.fromTo(
          positioners[index],
          { marginTop: 0 },
          {
            marginTop: -50,
            duration: 0.5,
            ease: "ease-in-out",
            yoyo: true,
            repeat: 1,
            delay: index * 0.2,
          }
        );
      });
  
      resetInactivityTimer();
    }
  }

function animation2() {
    if (typeof window !== "undefined") {
      const cardsLength = cardNames.length;
      for (let i = 0; i < cardsLength; i++) {
        setTimeout(() => {
            
        const targetCard = document.getElementById(cardNames[i])
        const positionerBox = $("#"+cardNames[i]+"PositionerPost").get(0)?.getBoundingClientRect();
        const positionerBoxInner = $(".hero-wrapper").get(0)?.getBoundingClientRect();
        const cardBox = $("#"+cardNames[i]).get(0)?.getBoundingClientRect(); 

        if (cardBox && positionerBox && targetCard && positionerBoxInner ) {
        const deltaX = positionerBox.left + positionerBox.width / 2 - (cardBox.left + cardBox.width / 2);
        const deltaY = positionerBox.top - (cardBox.top) + 50;
        
        targetCard.style.transition = "transform 0.8s ease";
        targetCard.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        setTimeout(() => {
            handleFlip(cardNames[i]);
            }, 900);
        }}, i * 1000);
      }
      
      
    }
    
    setTimeout(() => {
        
        $('.animation-desktop').css({"display": "none"})
        
        wobbleCards()
        
      }, 900 * 5);
      
  }

function initializeHomeCardsWrapper() {
    if (typeof window !== "undefined") {
      const homeCardsWrapper = document.getElementById("homeCardsWrapper");
      const allCards = document.querySelectorAll(".card");
  
      if (homeCardsWrapper && allCards.length > 0) {
        
  
        allCards.forEach((card) => {
          const cardId = card.id; // Get the card's ID
          const cardPositionerId = document.getElementById(`${cardId}PositionerPost`)
          if (cardId && cardPositionerId) {
            card.classList.add("animation-2-card");
            
            // After 1 second, add 'animation-3-card'
            setTimeout(() => {
                animation2();
            }, 1000);
          }
        });
      }
    }
  }
  
  

export default function HomeCardAnimation2() {
  useEffect(() => {
    initializeHomeCardsWrapper();
  }, []);

  return (
    <div id="homeCardsWrapper" className="fade-in">
      <HomeCards />
    </div>
  );
}
