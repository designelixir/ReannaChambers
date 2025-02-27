
import React from 'react';
import TabSwitcher from '../components/TabSwitcher';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { videoCards } from './videoData';
import ProjectCardGrid from '../components/Cards/ProjectCardGrid';

export const metadata = {
  title: 'Video | Reanna Chambers',
};

export default function PhotoPage() {
  // Define the tabs with dynamic content
  const tabs = [
    { name: 'Coloring', 
      content: <ProjectCardGrid column2Cards={[videoCards[0]]}  /> 
    },
    { name: 'Edits', 
      content: <ProjectCardGrid column2Cards={[videoCards[1]]} />
    },
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
