
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { productionCards } from './productionData';
import ProjectCardGrid from '../components/Cards/ProjectCardGrid';


export const metadata = {
  title: 'Production | Reanna Chambers',
  description: 'Hawaii-based producer and photographer Reanna Chambers has contributed to campaigns for brands including Andie Swim, ASICS, Urban Outfitters, Marie Claire, Roxy, Jams World, and more—bringing creative direction, production, and visual storytelling to life through photography and film.'
}

export default function ProductionPage() {
  
  
  
  return (
    <section id="productionCardGrid">
      <Navigation />
      <div className="navigation-spacer"></div>
      <div style={{padding: '0 2.5vw 2.5vw'}}>
        
      <ProjectCardGrid  
        column1Cards={
          [productionCards[0],
          productionCards[10],
          productionCards[3],
          productionCards[7],
          productionCards[13],
          productionCards[17]]
        } column2Cards={[
          productionCards[11],
          productionCards[1],
          productionCards[4],
          productionCards[6],
          productionCards[9],
          productionCards[15],
          productionCards[16]
        ]} column3Cards={[
          productionCards[2],
          productionCards[5],
          productionCards[8],
          productionCards[12],
          productionCards[14],
          productionCards[18]
        ]} />

      </div>
      <Footer dark={true}></Footer>
    </section>
  );
}
