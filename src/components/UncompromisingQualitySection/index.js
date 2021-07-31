import CoffeeCupD from "../../assets/about/desktop/image-quality.jpg";
import CoffeeCupT from "../../assets/about/tablet/image-quality.jpg";
import CoffeeCupM from "../../assets/about/mobile/image-quality.jpg";
import {
  UncompromisingQualityContent,
  UncompromisingQualityImgD,
  UncompromisingQualityImgT,
  UncompromisingQualityImgM,
  UncompromisingQualityImgWrapper,
  UncompromisingQualityInnerWrapper,
  UncompromisingQualityTextWrapper,
  UncompromisingQualityWrapper,
} from "./UncompromisingQualityElements";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";

const UncompromisingQuality = () => {
  return (
    <UncompromisingQualityWrapper>
      <ContainerElement wider>
        <UncompromisingQualityInnerWrapper>
          <ContainerElement>
            <UncompromisingQualityContent>
              <UncompromisingQualityTextWrapper>
                <HeadingSecondary light>
                  Uncompromising quality
                </HeadingSecondary>
                <DescriptionText light uncompromisingQualityDescription>
                  Although we work with growers who pay close attention to all
                  stages of harvest and processing, we employ, on our end, a
                  rigorous quality control program to avoid over-roasting or
                  baking the coffee dry. Every bag of coffee is tagged with a
                  roast date and batch number. Our goal is to roast consistent,
                  user-friendly coffee, so that brewing is easy and enjoyable.
                </DescriptionText>
              </UncompromisingQualityTextWrapper>
              <UncompromisingQualityImgWrapper>
                <UncompromisingQualityImgD src={CoffeeCupD} alt="Coffee cup" />
                <UncompromisingQualityImgT src={CoffeeCupT} alt="Coffee cup" />
                <UncompromisingQualityImgM src={CoffeeCupM} alt="Coffee cup" />
              </UncompromisingQualityImgWrapper>
            </UncompromisingQualityContent>
          </ContainerElement>
        </UncompromisingQualityInnerWrapper>
      </ContainerElement>
    </UncompromisingQualityWrapper>
  );
};

export default UncompromisingQuality;
