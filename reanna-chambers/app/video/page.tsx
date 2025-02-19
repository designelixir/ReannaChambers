import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import VideoPageContent from './VideoPageContent';


export const metadata = {
  title: 'Video | Reanna Chambers'
}

export default function VideoPage() {
  return (
    <section>
      <Navigation></Navigation>
      <div className="navigation-spacer"></div>
      <VideoPageContent></VideoPageContent>
      <Footer dark={true}></Footer>
    </section>
  );
}
