import { ContainerElement } from "../Container/ContainerElement";
import { HeroInnerWrapper, HeroWrapper } from "./HeroELements";
import HeroBgD from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import { HeadingPrimary } from "../HeadingPrimary/HeadingPrimaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { ButtonPrimaryLinkR } from "../ButtonPrimary/ButtonPrimaryElement";

const Hero = () => {
  return (
    <HeroWrapper>
      <ContainerElement wider>
        <HeroInnerWrapper HeroBgD={HeroBgD}>
          <ContainerElement>
            <HeadingPrimary homepageHero>
              Great Coffee made simple.
            </HeadingPrimary>
            <DescriptionText light>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </DescriptionText>
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
