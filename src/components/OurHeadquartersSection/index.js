import { headquarters } from "../../data";
import { ContainerElement } from "../Container/ContainerElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { HeadingSmall } from "../HeadingSmall/HeadingSmall";
import { HowItWorksCols } from "../HowItWorksSection/HowItWorksElements";
import { ImageEl } from "../Image/ImageElement";
import {
  OurHeadquartersCol,
  OurHeadquartersWrapper,
} from "./OurHeadquartersElements";

const OurHeadquarters = () => {
  return (
    <OurHeadquartersWrapper>
      <ContainerElement>
        <HeadingSmall howItWorksHeading>Our Headquarters</HeadingSmall>
        <HowItWorksCols ourHeadquarters>
          {headquarters.map((col, i) => {
            return (
              <OurHeadquartersCol key={i}>
                <ImageEl src={col.icon} ourHeadquarters alt={col.location} />
                <HeadingSmall ourHeadquarters>{col.location}</HeadingSmall>
                {Object.keys(col.information).map((k, i) => {
                  return (
                    <DescriptionText ourHeadquarters key={i}>
                      {col.information[k]}
                    </DescriptionText>
                  );
                })}
              </OurHeadquartersCol>
            );
          })}
        </HowItWorksCols>
      </ContainerElement>
    </OurHeadquartersWrapper>
  );
};

export default OurHeadquarters;
