import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';


export const metadata = {
  title: 'Video | Reanna Chambers'
}

export default function VideoPage() {
  

  return (
    <section>
      <div className="navigation-spacer"></div>
      <div className='flex-center-center' style={{ height: '60vh', width: '100%'}}>
        <div className='flex-center-center flex-column'>
          <h1>Coming Soon</h1>
          <Link href="https://www.youtube.com/@reannasea/videos" target='_blank'>
          View Videos
          </Link>
        </div>
        
      </div>
      <Footer dark={true}></Footer>
    </section>
  );
}
