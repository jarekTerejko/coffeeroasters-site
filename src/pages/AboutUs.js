import HeroPages from "../components/HeroPages";
import OurCommitment from "../components/OurCommitmentSection";
import OurHeadquarters from "../components/OurHeadquartersSection";
import UncompromisingQuality from "../components/UncompromisingQualitySection";
import { aboutUsHero } from "../data";

const AboutUs = () => {
  return (
    <>
      <HeroPages data={aboutUsHero} heroAboutUsHeading />
      <OurCommitment />
      <UncompromisingQuality />
      <OurHeadquarters />
    </>
  );
};

export default AboutUs;
