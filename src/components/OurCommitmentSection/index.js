import { ContainerElement } from "../Container/ContainerElement";
import {
  OurCommitmentContent,
  OurCommitmentImgWrapper,
  OurCommitmentWrapper,
  OurCommitmentTextWrapper,
  OurCommitmentImgD,
  OurCommitmentImgT,
  OurCommitmentImgM,
} from "./OurCommitment.Elements";
import BaristaD from "../../assets/about/desktop/image-commitment.jpg";
import BaristaT from "../../assets/about/tablet/image-commitment.jpg";
import BaristaM from "../../assets/about/mobile/image-commitment.jpg";
import { ImageEl } from "../Image/ImageElement";
import {HeadingSecondary} from '../HeadingSecondary/HeadingSecondaryElement'
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
const OurCommitment = () => {
  return (
    <OurCommitmentWrapper>
      <ContainerElement>
        <OurCommitmentContent>
          <OurCommitmentImgWrapper>
            <OurCommitmentImgD src={BaristaD} />
            <OurCommitmentImgT src={BaristaT} />
            <OurCommitmentImgM src={BaristaM} />
            {/* <ImageEl src={Barista} style={{borderRadius: "1rem"}} /> */}
          </OurCommitmentImgWrapper>
          <OurCommitmentTextWrapper>
            <HeadingSecondary>Our commitment</HeadingSecondary>
            <DescriptionText>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm initiatives, and invest in coffee
              plant science. Curating only the finest blends, we roast each lot
              to highlight tasting profiles distinctive to their native growing
              region.
            </DescriptionText>
          </OurCommitmentTextWrapper>
        </OurCommitmentContent>
      </ContainerElement>
    </OurCommitmentWrapper>
  );
};

export default OurCommitment;
