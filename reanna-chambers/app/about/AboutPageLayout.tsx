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
            <WelcomeMarquee items={[
              'Creative Direction',
              'Photography',
              'Producing',
              'Brand Consulting',
              'Filming',
              'Assistant Camera',
              'Coloring',
              'Editing',
              'Painting',
              'Art Installation',
              'Art Assist',
              'Event Coordination',
              'Campaign Development',
              'Set Design',
              'Prop Styling',
              'BTS/Content Capture',
              'Casting Support',
              'Styling',
              'Talent Management',
              'Budgeting',
              'Scheduling',
              'Crew Hire',
              'Locations',
              'Permitting',
              'Social Media',
              'Coffee ♥'
            ]} />
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
