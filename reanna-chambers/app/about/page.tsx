import Navigation from "../components/Navigation"
import '../globals.css';
import Footer from "../components/Footer";
import AboutHero from "./AboutHero";
import AboutPageLayout from "./AboutPageLayout";


export const metadata = {
    title: 'About | Reanna Chambers',
    description: 'Reanna Chambers is a Hawaii-based photographer, producer, and artist specializing in production, photography, and visual storytelling. Based in Honolulu, she brings a decade of experience in campaigns, art direction, and fine art installations.'
    }

export default function AboutPage(){
  return (
    <section style={{maxWidth: '100vw', overflowX: 'hidden'}}>
        <Navigation></Navigation>
        <AboutHero></AboutHero>
        <AboutPageLayout></AboutPageLayout>
        <Footer dark={false}></Footer>
    </section>
  );
};


