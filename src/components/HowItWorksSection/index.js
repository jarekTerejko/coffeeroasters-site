import { HeadingSmall } from "../HeadingSmall/HeadingSmall";
import { ContainerElement } from "../Container/ContainerElement";
import {
  HowItWorksCol,
  HowItWorksCols,
  HowItWorksStepCounter,
  HowItWorksWrapper,
} from "./HowItWorksElements";
import { howItWorks } from "../../data";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { ButtonPrimaryLinkR } from "../ButtonPrimary/ButtonPrimaryElement";

const HowItWorks = () => {
  return (
    <>
      <HowItWorksWrapper>
        <ContainerElement>
          <HeadingSmall howItWorksHeading>How it Works</HeadingSmall>
          <HowItWorksCols>
            {howItWorks.map((col, i) => {
              return (
                <HowItWorksCol key={i}>
                  <HowItWorksStepCounter>{`0${1 + i}`}</HowItWorksStepCounter>
                  <HeadingSecondary howItWorksColHeading>
                    {col.heading}
                  </HeadingSecondary>
                  <DescriptionText howItWorksColDescription>
                    {col.description}
                  </DescriptionText>
                </HowItWorksCol>
              );
            })}
          </HowItWorksCols>
          <ButtonPrimaryLinkR to="/create-your-plan">
            Create your plan
          </ButtonPrimaryLinkR>
        </ContainerElement>
      </HowItWorksWrapper>
    </>
  );
};

export default HowItWorks;
