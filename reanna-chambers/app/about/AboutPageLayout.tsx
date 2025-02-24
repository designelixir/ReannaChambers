import AboutBio from "./AboutBio";
import ExhibitionList from "./ExhibitionList";
import ClientList from "./ClientList";
import FadeInSection from "../components/FadeInSection";
import WelcomeMarquee from "../components/WelcomeMarquee";

export default function AboutPageLayout() {
  return (
    <>
      <FadeInSection>
        <div className="dark-section basic-padding">
          <AboutBio />
        </div>
      </FadeInSection>
      <div className="dark-section" style={{overflow: 'hidden', maxWidth: '100vw'}}>
            <WelcomeMarquee items={['Creative Direction', 'Photography', 'Brand Consulting', 'Casting', 'Prop Styling', 'Art Direction', 'Content Creation', 'Filming',
                 'Coloring', 'Producing', 'Styling', 'Painting', 'Art Installing', 'Editing', 'Social Media', 'Set Design', "Locations", "Permitting", 'Making Coffee ♥',]}></WelcomeMarquee>
        </div>

      <FadeInSection>
        <div className="basic-padding flex-start-start flex-wrap">
          <ClientList />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="dark-section basic-padding">
          <ExhibitionList />
        </div>
      </FadeInSection>
    </>
  );
}
