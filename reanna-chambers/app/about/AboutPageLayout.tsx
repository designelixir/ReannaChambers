import AboutBio from "./AboutBio";
import ExhibitionList from "./ExhibitionList";
import ClientList from "./ClientList";
import FadeInSection from "../components/FadeInSection";

export default function AboutPageLayout() {
  return (
    <>
      <FadeInSection>
        <div className="dark-section basic-padding">
          <AboutBio />
        </div>
      </FadeInSection>

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
