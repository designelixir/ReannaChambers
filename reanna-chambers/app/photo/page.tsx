import React from 'react';
import Navigation from '../components/Navigation';
import PhotoCardGrid from './PhotoCardGrid';
import { projectCards } from './photoData'; // Import your photo data

export const metadata = {
  title: 'Photo | Reanna Chambers'
}

export default function PhotoPage() {
  return (
    <section>
      <Navigation />
      <PhotoCardGrid />
    </section>
  );
}
