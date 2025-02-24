'use client'
import Link from "next/link";

export default function Logo({ homepageLogo = false }: { homepageLogo?: boolean }) {
  return (
    <>
    
      <Link href="/" className="no-link-styling">
      <div className={`photo-logo-container flex-center-center no-flex-grow ${homepageLogo ? "homepage-logo" : "nav-logo"}`}>
        <div className={`photo-logo `}>

        </div>
        {/* <h1 className={`black-text-glow palace-italic ${homepageLogo ? "large-logo" : "small-logo"}`}>
          reanna c<span className="aalt palace-italic">h</span>ambers
          
        </h1>
        <span aria-hidden="true" className={` custom-symbol-font no-text-spacing black-text-glow ${homepageLogo ? "large-logo-line" : "small-logo-line"}`}>
          _____________________________________________
        </span>
         */}
        <h1 style={{opacity:'0', fontSize: '2em', lineHeight: '0'}}>Reanna Chambers</h1>
      </div>
      
    </Link>
    
    </>
  );
}
