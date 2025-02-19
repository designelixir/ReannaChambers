'use client'
import React from 'react';
import TabSwitcher from '../components/TabSwitcher';
import ColoringCardGrid from './ColoringCardGrid';
import EditsCardGrid from './EditsCardGrid';


export const metadata = {
  title: 'Video | Reanna Chambers'
}

export default function VideoPageContent() {
  const tabs = [
    { name: 'Coloring', content: <ColoringCardGrid></ColoringCardGrid> },
    { name: 'Edits', content: <EditsCardGrid></EditsCardGrid> },
  ];

  return (
    
    
      <TabSwitcher tabs={tabs} defaultTab="Coloring" />
    
  );
}
