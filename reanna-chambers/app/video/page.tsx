
import React from 'react';
import '../photo/photoPage.css';
import TabSwitcher from '../components/TabSwitcher';
import ColoringCardGrid from './ColoringCardGrid';
import EditsCardGrid from './EditsCardGrid';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Video | Reanna Chambers',
};

export default function PhotoPage() {
  // Define the tabs with dynamic content
  const tabs = [
    { name: 'Coloring', content: <ColoringCardGrid></ColoringCardGrid> },
    { name: 'Edits', content: <EditsCardGrid></EditsCardGrid> },
  ];

  return (
    <section id="videoCardGrid">
      <Navigation />
      <div className="navigation-spacer"></div>
      <TabSwitcher tabs={tabs} defaultTab="Coloring" />
      <Footer dark={true} />
    </section>
  );
}
