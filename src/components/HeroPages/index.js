import { ContainerElement } from "../Container/ContainerElement";
import { HeroPagesInnerWrapper, HeroPagesWrapper } from "./HeroPagesElements";
import { HeadingPrimary } from "../HeadingPrimary/HeadingPrimaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";

const HeroPages = ({ data, heroAboutUsHeading }) => {
  return (
    <HeroPagesWrapper>
      <ContainerElement wider>
        <HeroPagesInnerWrapper
          HeroBgD={data[0].imageD}
          HeroBgT={data[0].imageT}
          HeroBgM={data[0].imageM}
        >
          <ContainerElement>
            <HeadingPrimary heroAboutUsHeading={heroAboutUsHeading}>
              {data[0].title}
            </HeadingPrimary>
            <DescriptionText light>{data[0].desc}</DescriptionText>
          </ContainerElement>
        </HeroPagesInnerWrapper>
      </ContainerElement>
    </HeroPagesWrapper>
  );
};

export default HeroPages;
