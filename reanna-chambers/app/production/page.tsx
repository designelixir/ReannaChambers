import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductionCardGrid from './ProductionCardGrid';


export const metadata = {
  title: 'Production | Reanna Chambers'
}

export default function ProductionPage() {
  

  return (
    <section>
      <Navigation />
      <div className="navigation-spacer"></div>
      <ProductionCardGrid></ProductionCardGrid>
      <Footer dark={true}></Footer>
    </section>
  );
}
