import { HeadingSmall } from "../HeadingSmall/HeadingSmall";
import { ContainerElement } from "../Container/ContainerElement";
import {
  HowItWorksCol,
  HowItWorksCols,
  HowItWorksInnerWrapper,
  HowItWorksStepCounter,
  HowItWorksWrapper,
} from "./HowItWorksElements";
import { howItWorks } from "../../data";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { ButtonPrimaryLinkR } from "../ButtonPrimary/ButtonPrimaryElement";

const HowItWorks = ({ invisible, darkBackground, lightColor }) => {
  return (
    <>
      <HowItWorksWrapper>
        <ContainerElement wider>
          <HowItWorksInnerWrapper darkBackground={darkBackground}>
            <ContainerElement>
              <HeadingSmall invisible={invisible} howItWorksHeading>
                How it Works
              </HeadingSmall>
              <HowItWorksCols>
                {howItWorks.map((col, i) => {
                  return (
                    <HowItWorksCol darkBackground={darkBackground} key={i}>
                      <HowItWorksStepCounter>{`0${
                        1 + i
                      }`}</HowItWorksStepCounter>
                      <HeadingSecondary
                        lightColor={lightColor}
                        howItWorksColHeading
                      >
                        {col.heading}
                      </HeadingSecondary>
                      <DescriptionText
                        lightColor={lightColor}
                        howItWorksColDescription
                      >
                        {col.description}
                      </DescriptionText>
                    </HowItWorksCol>
                  );
                })}
              </HowItWorksCols>
              <ButtonPrimaryLinkR $invisible={invisible} to="/create-your-plan">
                Create your plan
              </ButtonPrimaryLinkR>
            </ContainerElement>
          </HowItWorksInnerWrapper>
        </ContainerElement>
      </HowItWorksWrapper>
    </>
  );
};

export default HowItWorks;
