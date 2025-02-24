import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductionCardGrid from './ProductionCardGrid';


export const metadata = {
  title: 'Production | Reanna Chambers'
}

export default function ProductionPage() {
  

  return (
    <section id="productionCardGrid" className='card-section'>
      <Navigation />
      <div className="navigation-spacer"></div>
      <div style={{padding: '0 2.5vw 2.5vw'}}>
      <ProductionCardGrid></ProductionCardGrid>
      </div>
      <Footer dark={true}></Footer>
    </section>
  );
}
