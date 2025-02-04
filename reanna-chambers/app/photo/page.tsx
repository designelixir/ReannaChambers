import React from 'react';
import Navigation from '../components/Navigation';
import './photoPage.css';
import PhotoTabSwitcher from './PhotoTabSwitcher';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Photo | Reanna Chambers'
}

export default function PhotoPage() {
  

  return (
    <section>
      <Navigation />
      <div className="navigation-spacer"></div>
      <PhotoTabSwitcher></PhotoTabSwitcher>
      <Footer dark={true}></Footer>
    </section>
  );
}
