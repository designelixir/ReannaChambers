'use client'
import Link from "next/link";

export default function Logo({ homepageLogo = false }: { homepageLogo?: boolean }) {
  return (
    <>
    {homepageLogo ? (
      <Link href="/" className="no-link-styling">
      <div className={`logo-container flex-center-center flex-column no-flex-grow ${homepageLogo ? "homepage-logo" : ""}`}>
        <h1 className={`black-text-glow ${homepageLogo ? "large-logo" : ""}`}>
          <i>reanna c<span className="aalt">h</span>ambers</i>
          
        </h1>
        <span aria-hidden="true" className="logo-line custom-symbol-font no-text-spacing black-text-glow">
          _______________________________
        </span>
        
        
      </div>
    </Link>
    ):(
      <Link href="/" className="no-link-styling">
      <div className={`logo-container flex-center-center flex-column no-flex-grow ${homepageLogo ? "homepage-logo" : ""}`}>
        <h1 className={`logo-text black-text-glow ${homepageLogo ? "large-logo" : ""}`} style={{minWidth: '350px', paddingTop: '5px'}}>
          <i>reanna c<span className="aalt">h</span>ambers</i>
        </h1>
        <span aria-hidden="true" className=" custom-symbol-font no-text-spacing black-text-glow" style={{transform: 'translateY(-26px)'}}>
          ___________________
        </span>
      </div>
    </Link>
    )}
    </>
  );
}
