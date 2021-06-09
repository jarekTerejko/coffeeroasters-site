import { ContainerElement } from "../Container/ContainerElement";
import { HeroInnerWrapper, HeroWrapper } from "./HeroELements";
import { HeadingPrimary } from "../HeadingPrimary/HeadingPrimaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { ButtonPrimaryLinkR } from "../ButtonPrimary/ButtonPrimaryElement";

import { homeHero } from "../../data";

const Hero = () => {
  return (
    <HeroWrapper>
      <ContainerElement wider>
        <HeroInnerWrapper
          HeroBgD={homeHero[0].imageD}
          HeroBgT={homeHero[0].imageT}
          HeroBgM={homeHero[0].imageM}
        >
          <ContainerElement>
            <HeadingPrimary homepageHero>{homeHero[0].title}</HeadingPrimary>
            <DescriptionText light>{homeHero[0].desc}</DescriptionText>
            <ButtonPrimaryLinkR to="/create-your-plan">
              Create your plan
            </ButtonPrimaryLinkR>
          </ContainerElement>
        </HeroInnerWrapper>
      </ContainerElement>
    </HeroWrapper>
  );
};

export default Hero;
