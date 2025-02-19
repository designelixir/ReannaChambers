import Link from "next/link";
interface FooterProps {
  dark?: boolean;
}

export default function Footer({ dark = false }: FooterProps) {
  return (
    <footer className={`basic-padding flex-center-center flex-column ${dark ? "dark-section" : ""}`} style={{ marginTop: "2px" }}>
      <div className="flex-center-center margin-bottom">
        <Link href="mailto:reannachambers@gmail.com" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
        <span className={`icon-email social-icon ${dark ? "white-text-glow" : "black-text-glow"}`}></span>
        </Link>
        <Link href="https://instagram.com/reannasea" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
        <span className={`icon-instagram social-icon ${dark ? "white-text-glow" : "black-text-glow"}`}></span>
        </Link>
        <Link href="https://www.youtube.com/@reannasea" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
        <span className={`icon-youtube social-icon ${dark ? "white-text-glow" : "black-text-glow"}`}></span>
        </Link>
        <Link href="https://foundation.app/@reanna" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
        <span className={`icon-foundations social-icon ${dark ? "white-text-glow" : "black-text-glow"}`}></span>
        </Link>
      </div>
      <p style={{fontSize: '14px'}} className={`margin-bottom modern-font ${dark ? "white-text white-text-glow" : "black-text black-text-glow"}`}>Copyright &copy; Reanna Chambers, 2025</p>
      <Link className={`no-link-styling modern-font ${dark ? "white-text white-text-glow" : "black-text black-text-glow"}`} style={{opacity: '0.5', fontSize: '8px'}} href="https://designelixir.studio">
        Made with &hearts; by Design Elixir Studio
      </Link>
    </footer>
  );
}
