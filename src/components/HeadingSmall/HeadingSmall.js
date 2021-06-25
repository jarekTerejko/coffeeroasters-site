import styled from "styled-components";

export const HeadingSmall = styled.h3`
  font-family: var(--serif);
  font-weight: var(--weight-bold);
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  margin-bottom: ${(props) => (props.collectionSection ? "3rem" : "")};
  margin-bottom: ${(props) => (props.whyChooseUsCard ? "3rem" : "")};
  margin-bottom: ${(props) => (props.howItWorksHeading ? "9rem" : "")};
  margin-bottom: ${(props) => (props.ourHeadquarters ? "2rem" : "")};
  font-size: 2.4rem;
  color: ${(props) => (props.howItWorksHeading ? "var(--grey)" : "")};
`;
