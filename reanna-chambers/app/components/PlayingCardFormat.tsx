'use client';
import React from "react";
import Image from "next/image";
import "./component-styles/CardAnimation.css"; // Add corresponding styles

type PlayingCardFormatProps = {
  suit: string;
  title: string;
  color: string;
  
};

export default function PlayingCardFormat({ suit, title, color }: PlayingCardFormatProps) {
  return (
    <div className="playing-card">
        <div className="playing-card-top flex-center-spacebetween">
            <p style={{color: `${color}`}}>{title}</p>
            <Image src={`/cards/4-${color}.png`} height={30} width={20} alt={`${suit} icon`}></Image>
        </div>
        <div className="playing-card-symbol flex-center-end">
            <Image src={`/cards/${suit}.png`} height={20} width={20} alt={`${suit} icon`}></Image>
        </div>
        <div className="playing-card-center flex-center-center">
            <Image src={`/cards/${suit}.png`} height={100} width={100} alt={`${suit} icon`}></Image>
        </div>
        <div className="playing-card-symbol flex-center-end" style={{transform: 'rotate(180deg)'}}>
            <Image src={`/cards/${suit}.png`} height={20} width={20} alt={`${suit} icon`}></Image>
        </div>
        <div className="playing-card-top flex-center-spacebetween" style={{transform: 'rotate(180deg)'}}>
            <p style={{color: `${color}`}}>{title}</p>
            <Image src={`/cards/4-${color}.png`} height={30} width={20} alt={`${suit} icon`}></Image>
        </div>
        
        
    </div>
  );
}
