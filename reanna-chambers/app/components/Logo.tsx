'use client'
import { useEffect } from "react";
import Link from "next/link";

export default function Logo({ homepageLogo = false }: { homepageLogo?: boolean }) {
  return (
    <>
    {homepageLogo ? (
      <Link href="/" className="no-link-styling">
      <div className={`logo-container flex-center-center flex-column no-flex-grow ${homepageLogo ? "homepage-logo" : ""}`}>
        <h1 className={`black-text-glow ${homepageLogo ? "large-logo" : ""}`}>
          <span className="logo-reanna"><span className="logo-first-letter">R</span>EANNA </span>
          <span className="logo-break"><br></br></span>
          <span className="logo-chambers"><span className="logo-first-letter">C</span>HAMBERS</span>
        </h1>
        
        <span aria-hidden="true" className="logo-line custom-symbol-font no-text-spacing black-text-glow">
          &#91;_______________________________&#93;
        </span>
        <span className="logo-flower custom-symbol-font black-text-glow" style={{fontSize: '20px'}}>*</span>
      </div>
    </Link>
    ):(
      <Link href="/" className="no-link-styling">
      <div className={`logo-container flex-center-center flex-column no-flex-grow ${homepageLogo ? "homepage-logo" : ""}`}>
        <h1 className={`logo-text black-text-glow ${homepageLogo ? "large-logo" : ""}`} style={{minWidth: '350px', paddingTop: '5px'}}>
          REANNA CHAMBERS
        </h1>
        {homepageLogo && (
          <span aria-hidden="true" className="custom-symbol-font no-text-spacing black-text-glow"
            style={{ paddingTop: "5px", letterSpacing: '-1px' }}>
            &#91;________________________&#93;
          </span>
        )}
      </div>
    </Link>
    )}
    </>
  );
}
