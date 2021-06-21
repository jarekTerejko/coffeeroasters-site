import { ContainerElement } from "../Container/ContainerElement";
import { HeroPagesInnerWrapper, HeroPagesWrapper } from "./HeroPagesElements";
import { HeadingPrimary } from "../HeadingPrimary/HeadingPrimaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";

import { aboutUsHero } from "../../data";

const HeroPages = () => {
  return (
    <HeroPagesWrapper>
      <ContainerElement wider>
        <HeroPagesInnerWrapper
          HeroBgD={aboutUsHero[0].imageD}
          HeroBgT={aboutUsHero[0].imageT}
          HeroBgM={aboutUsHero[0].imageM}
        >
          <ContainerElement>
            <HeadingPrimary heroPagesHeading>
              {aboutUsHero[0].title}
            </HeadingPrimary>
            <DescriptionText light>{aboutUsHero[0].desc}</DescriptionText>
          </ContainerElement>
        </HeroPagesInnerWrapper>
      </ContainerElement>
    </HeroPagesWrapper>
  );
};

export default HeroPages;
