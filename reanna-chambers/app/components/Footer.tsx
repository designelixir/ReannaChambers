import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  dark?: boolean;
}

export default function Footer({ dark = false }: FooterProps) {
  return (
    <footer className={`basic-padding flex-center-center flex-column ${dark ? "dark-section" : ""}`} style={{ marginTop: "2px" }}>
      <div className="flex-center-center margin-bottom">
        <Link href="https://instagram.com/reannasea" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
          <Image 
            src="/icons/instagram.svg" 
            width={20} 
            height={20} 
            alt="Instagram Icon" 
            className={`margin-right hover ${dark ? "" : "invert-img"}`} 
          />
        </Link>
        <Link href="https://instagram.com/reannasea" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
          <Image 
            src="/icons/email.svg" 
            width={25} 
            height={25} 
            alt="Email Icon" 
            className={`margin-right hover ${dark ? "" : "invert-img"}`} 
          />
        </Link>
        <Link href="https://www.youtube.com/@reannasea" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
          <Image 
            src="/icons/youtube.svg" 
            width={25} 
            height={25} 
            alt="YouTube Icon" 
            className={`margin-right hover ${dark ? "" : "invert-img"}`} 
          />
        </Link>
        <Link href="https://foundation.app/@reanna" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
          <Image 
            src="/icons/foundation-outlines.svg" 
            width={45} 
            height={35} 
            alt="foundation.app Icon" 
            className={`margin-right hover ${dark ? "" : "invert-img"}`} 
          />
        </Link>
      </div>
      <p style={{fontSize: '14px'}} className={`margin-bottom modern-font ${dark ? "white-text white-text-glow" : "black-text black-text-glow"}`}>Copyright &copy; Reanna Chambers, 2025</p>
      <Link className={`no-link-styling modern-font ${dark ? "white-text white-text-glow" : "black-text black-text-glow"}`} style={{opacity: '0.5', fontSize: '8px'}} href="https://designelixir.studio">
        Made with &hearts; by Design Elixir Studio
      </Link>
    </footer>
  );
}
