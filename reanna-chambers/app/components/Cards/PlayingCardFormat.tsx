'use client';
import React from "react";
import "./cardAnimation.css"; 

type PlayingCardFormatProps = {
  title: string;
  color: string;
  
};

export default function PlayingCardFormat({ title, color }: PlayingCardFormatProps) {
  return (
    <div className="playing-card">
        <div className="playing-card-top flex-start-start">
            <p style={{color: `${color}`}}><i>{title}</i></p>
        </div>
        
        <div className="playing-card-center flex-center-center"></div>
        <div className="playing-card-top flex-start-start" style={{transform: 'rotate(180deg)'}}>
            <p style={{color: `${color}`}}><i>{title}</i></p>
        </div>
    </div>
  );
}
