
import React from 'react';
import './photoPage.css';
import TabSwitcher from '../components/TabSwitcher';
import PhotoCardGrid from './PhotoCardGrid';
import Prints from './Prints';
import prints from './printData';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Photo | Reanna Chambers',
};

export default function PhotoPage() {
  // Define the tabs with dynamic content
  const tabs = [
    { name: 'Projects', content: <PhotoCardGrid /> },
    { name: 'Prints', content: <Prints prints={prints} /> },
  ];

  return (
    <section id="photoCardGrid">
      <Navigation />
      <div className="navigation-spacer"></div>
      <TabSwitcher tabs={tabs} defaultTab="Projects" />
      <Footer dark={true} />
    </section>
  );
}
