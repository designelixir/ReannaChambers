
import React from 'react';
import TabSwitcher from '../components/TabSwitcher';
import Prints from './Prints';
import prints from './printData';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ProjectCardGrid from '../components/Cards/ProjectCardGrid';
import { photoCards } from './photoData';

export const metadata = {
  title: 'Photo | Reanna Chambers',
};

export default function PhotoPage() {
  // Define the tabs with dynamic content
  const tabs = [
    { name: 'Projects', content: <ProjectCardGrid  
            column1Cards={
              [photoCards[14],
              photoCards[6],
              photoCards[11],
              photoCards[7],
              photoCards[13],
              ]
            } column2Cards={[
              photoCards[3],
              photoCards[4],
              photoCards[5],
              photoCards[9],
              photoCards[1],
              photoCards[0]
            ]} column3Cards={[
              photoCards[2],
              photoCards[10],
              photoCards[8],
              photoCards[12],
              photoCards[15],
            ]} /> },
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
