import styled from "styled-components";

export const HeadingSmall = styled.h3`
  font-family: var(--serif);
  font-weight: var(--weight-bold);
  color: ${(props) => (props.light ? "var(--lightCream)" : "var(--grey)")};
  margin-bottom: ${(props) => (props.collectionSection ? "3rem" : "")};
  margin-bottom: ${(props) => (props.whyChooseUsCard ? "3rem" : "")};
  margin-bottom: ${(props) => (props.howItWorksHeading ? "9rem" : "")};
  margin-bottom: ${(props) => (props.ourHeadquarters ? "2rem" : "")};
  margin-bottom: ${(props) => (props.modal ? "2rem" : "")};
  font-size: 2.4rem;
  display: ${(props) => (props.invisible ? "none" : "")};

  @media screen and (max-width: 375px) {
    font-size: ${(props) => (props.modal ? "1.8rem" : "")};
  }
`;
