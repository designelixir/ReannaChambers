"use client"; // Ensures this runs only on the client

import React, { useEffect } from "react";
import "./component-styles/CardAnimation.css";
import PlayingCardFormat from "./PlayingCardFormat";
import gsap from "gsap";

const cardNames = ["PhotoCard", "ProductionCard", "VideoCard", "AboutCard"];
const cardOrder = ["AboutCard", "PhotoCard", "VideoCard", "ProductionCard"];
let inactivityTimeout: ReturnType<typeof setTimeout>;

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    wobbleCards();
  }, 5000);
}

function wobbleCards() {
  if (typeof window !== "undefined") {
    const cards = document.querySelectorAll(".card");
    const positioners = document.querySelectorAll(".positioner");

    cards.forEach((card, index) => {
      gsap.fromTo(
        [card, positioners[index]],
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

function handleFlip(cardId: string) {
  if (typeof window !== "undefined") {
    const card = document.getElementById(cardId);
    if (card) {
      card.classList.toggle("flipped");
    }
  }
}

function expandCard(cardId: string, destination: string) {
  if (typeof window !== "undefined") {
    const card = document.getElementById(cardId);
    const cardInner = document.querySelector(`#${cardId} .card-inner`);

    if (card) {
      animation3(cardId);
      const delay = 0.5;
      const flipDuration = 0.5;
      const totalDelay = flipDuration + delay;

      gsap.delayedCall(totalDelay, () => {
        handleFlip(cardId);
      });

      gsap.delayedCall(totalDelay * 2, () => {
        if (cardInner) {
          gsap.to(cardInner, {
            duration: 1,
            width: "300vw",
            minWidth: "300vw",
            minHeight: "300vh",
            borderRadius: "0px",
            borderWidth: "2px",
            borderColor: "blue",
            transformOrigin: "center center",
            ease: "power2.out",
            onUpdate: () => {
              if (destination) {
                window.location.href = destination;
              }
            },
          });
        }
      });
    }
  }
}

function animation1() {
  if (typeof window !== "undefined") {
    cardOrder.forEach((cardId, index) => {
      setTimeout(() => {
        const card = document.getElementById(cardId);
        if (card) {
          card.style.transform = "rotate(0deg) translate(0px, 0px)";
        }
      }, index * 200);
    });

    setTimeout(() => {
      animation2();
    }, 1000);
  }
}

function animation2() {
  if (typeof window !== "undefined") {
    const cardsLength = cardNames.length;
    for (let i = 0; i < cardsLength; i++) {
      setTimeout(() => {
        const targetCard = document.getElementById(cardNames[i]);
        const targetPosition = `${cardNames[i]}Positioner`;
        const positionElement = document.getElementById(targetPosition);

        if (targetCard && positionElement) {
          const positionerBox = positionElement.getBoundingClientRect();
          const cardBox = targetCard.getBoundingClientRect();

          const deltaX =
            positionerBox.left +
            positionerBox.width / 2 -
            (cardBox.left + cardBox.width / 2);
          const deltaY =
            positionerBox.top + positionerBox.height - cardBox.top;

          targetCard.style.transition = "transform 0.8s ease";
          targetCard.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

          setTimeout(() => {
            handleFlip(cardNames[i]);
            positionElement.style.opacity = "1";
          }, 900);
        }
      }, i * 1000);
    }

    const parentContainer = document.getElementById("cardContainer");
    parentContainer?.classList.remove("flex-center-center");
    parentContainer?.classList.add("flex-end-spacebetween");

    resetInactivityTimer();
  }
}

function animation3(cardId: string) {
  if (typeof window !== "undefined") {
    const targetCard = document.getElementById(cardId);
    const targetPosition = `${cardId}Positioner`;
    const positionElement = document.getElementById(targetPosition);

    if (targetCard && positionElement) {
      const positionerBox = positionElement.getBoundingClientRect();
      const cardBox = targetCard.getBoundingClientRect();

      const deltaX =
        cardBox.left +
        cardBox.width / 2 -
        (positionerBox.left + positionerBox.width / 2);
      const deltaY =
        cardBox.top -
        (positionerBox.top + positionerBox.height);

      targetCard.style.transition = "transform 0.8s ease";
      targetCard.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      targetCard.style.minWidth = "100vw";
      targetCard.style.minHeight = "100vh";
    }
  }
}

export default function HomeCardAnimation() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        animation1();
      }, 1000);

      resetInactivityTimer();
    }
  }, []);

  return (
    <>
      <div className="flex-center-center positioner-wrapper">
        <div id="AboutCardPositioner" className="positioner"></div>
        <div id="PhotoCardPositioner" className="positioner"></div>
        <div id="ProductionCardPositioner" className="positioner"></div>
        <div id="VideoCardPositioner" className="positioner"></div>
      </div>
      <div className="cards-container animation-1" id="cardsContainer">
      <div className="card flipped animation-1-card flex-center-center"  id="AboutCard" onClick={() => expandCard("AboutCard", '/about')}>
            <div className="card-inner">
                <div className="card-front flex-center-center">
                    <PlayingCardFormat suit={"clubs"} title="About" color="black"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        <div className="card flipped card-hover animation-1-card flex-center-center" id="PhotoCard" onClick={() => expandCard("PhotoCard", '/photo')}>
            <div className="card-inner">
                <div className="card-front flex-center-center">
                    <PlayingCardFormat suit={"diamond"} title="Photo" color="red"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        <div className="card flipped animation-1-card flex-center-center" id="ProductionCard" onClick={() => expandCard("ProductionCard", 'production')}>
            <div className="card-inner">
                <div className="card-front flex-center-center">
                    <PlayingCardFormat suit={"heart"} title="Production" color="black"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        <div className="card flipped animation-1-card flex-center-center" id="VideoCard" onClick={() => expandCard("VideoCard", 'https://www.youtube.com/@reannasea/videos')}>
            <div className="card-inner">
                <div className="card-front flex-center-center">
                    <PlayingCardFormat suit={"spade"} title="Video" color="red"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
