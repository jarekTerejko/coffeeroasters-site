import styled from "styled-components";

export const HeadingPrimary = styled.h1`
  color: var(--lightCream);
  font-size: 6.4rem;
  font-family: var(--serif);
  padding-top: ${(props) => (props.homepageHero ? "10rem" : "")};
  max-width: 50rem;
  margin-bottom: 3rem;
  font-weight: var(--weight-bold);
`;