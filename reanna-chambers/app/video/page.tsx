import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Video | Reanna Chambers'
}

export default function VideoPage() {
  

  return (
    <section>
      <Navigation />
      <div className="navigation-spacer"></div>
      
      <Footer dark={true}></Footer>
    </section>
  );
}
