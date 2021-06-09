import { ContainerElement } from "../Container/ContainerElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import {
  WhyChooseUsCard,
  WhyChooseUsCardImgWrapper,
  WhyChooseUsCardsWrapper,
  WhyChooseUsCardTextWrapper,
  WhyChooseUsInnerWrapper,
  WhyChooseUsWrapper,
} from "./WhyChooseUsElements";
import { whyChooseCards, whyChooseTexts } from "../../data";
import { ImageEl } from "../Image/ImageElement";
import { HeadingSmall } from "../HeadingSmall/HeadingSmall";

const WhyChooseUsSection = () => {
  return (
    <WhyChooseUsWrapper>
      <ContainerElement wider>
        <WhyChooseUsInnerWrapper>
          <HeadingSecondary light>{whyChooseTexts[0]}</HeadingSecondary>
          <DescriptionText light whyChooseUs>
            {whyChooseTexts[1]}
          </DescriptionText>
        </WhyChooseUsInnerWrapper>
        <ContainerElement>
          <WhyChooseUsCardsWrapper>
            {whyChooseCards.map((card, i) => {
              return (
                <WhyChooseUsCard key={i}>
                  <WhyChooseUsCardImgWrapper>
                    <ImageEl src={card.image} />
                  </WhyChooseUsCardImgWrapper>
                  <WhyChooseUsCardTextWrapper>
                    <HeadingSmall whyChooseUsCard light>
                      {card.heading}
                    </HeadingSmall>
                    <DescriptionText whyChooseUsCard light>
                      {card.description}
                    </DescriptionText>
                  </WhyChooseUsCardTextWrapper>
                </WhyChooseUsCard>
              );
            })}
          </WhyChooseUsCardsWrapper>
        </ContainerElement>
      </ContainerElement>
    </WhyChooseUsWrapper>
  );
};

export default WhyChooseUsSection;
