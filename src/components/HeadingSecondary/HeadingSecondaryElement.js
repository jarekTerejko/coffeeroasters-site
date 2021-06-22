import styled from "styled-components";

export const HeadingSecondary = styled.h2`
  font-size: 3.4rem;
  font-family: var(--serif);
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  font-weight: var(--weight-bold);
  max-width: ${(props) => (props.howItWorksColHeading ? "22rem" : "")};
  margin-bottom: 3rem;
  margin-bottom: ${(props) => (props.howItWorksColHeading ? "4.5rem" : "")};

  @media screen and (max-width: 700px) {
    max-width: ${(props) => (props.howItWorksColHeading ? "100%" : "")};
  }

  @media screen and (max-width: 450px) {
    font-size: 2.6rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 2rem;
  }
`;
