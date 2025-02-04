import Navigation from "../components/Navigation"
import '../globals.css';
import Footer from "../components/Footer";
import AboutHero from "./AboutHero";
import AboutPageLayout from "./AboutPageLayout";


export const metadata = {
    title: 'About | Reanna Chambers'
    }

export default function AboutPage(){
  return (
    <section>
        <Navigation></Navigation>
        <AboutHero></AboutHero>
        <AboutPageLayout></AboutPageLayout>
        <Footer dark={false}></Footer>
    </section>
  );
};


