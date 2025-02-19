import React from 'react';
import './photoPage.css';
import PhotoTabSwitcher from './PhotoTabSwitcher';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Photo | Reanna Chambers'
}

export default function PhotoPage() {
  

  return (
    <section>
      <Navigation></Navigation>
      <div className="navigation-spacer"></div>
      <PhotoTabSwitcher></PhotoTabSwitcher>
      <Footer dark={true}></Footer>
    </section>
  );
}
