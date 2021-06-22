import styled from "styled-components";

export const DescriptionText = styled.p`
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  max-width: 40rem;
  max-width: ${(props) => (props.whyChooseUs ? "55rem" : "")};
  max-width: ${(props) => (props.howItWorksColDescription ? "28rem" : "")};
  max-width: ${(props) =>
    props.uncompromisingQualityDescription ? "53rem" : ""};
  max-width: ${(props) => (props.ourCommitmentDescription ? "53rem" : "")};
  margin: ${(props) => (props.whyChooseUs ? "0 auto" : "")};
  line-height: 1.6;
  margin-bottom: 5rem;
  margin-bottom: ${(props) => (props.whyChooseUsCard ? "0" : "")};
  margin-bottom: ${(props) => (props.howItWorksColDescription ? "6rem" : "")};

  @media screen and (max-width: 700px) {
    margin-left: ${(props) => (props.howItWorksColDescription ? "auto" : "")};
    margin-right: ${(props) => (props.howItWorksColDescription ? "auto" : "")};
  }
`;
