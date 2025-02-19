'use client'
import Link from "next/link";

export default function Logo({ homepageLogo = false }: { homepageLogo?: boolean }) {
  return (
    <>
    
      <Link href="/" className="no-link-styling">
      <div className={`logo-container flex-center-center flex-column no-flex-grow ${homepageLogo ? "homepage-logo" : ""}`}>
        <h1 className={`black-text-glow palace-italic ${homepageLogo ? "large-logo" : "small-logo"}`}>
          reanna c<span className="aalt palace-italic">h</span>ambers
          
        </h1>
        <span aria-hidden="true" className={` custom-symbol-font no-text-spacing black-text-glow ${homepageLogo ? "large-logo-line" : "small-logo-line"}`}>
          _____________________________________________
        </span>
        
        
      </div>
    </Link>
    
    </>
  );
}
