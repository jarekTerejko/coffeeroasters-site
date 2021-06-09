import styled from "styled-components";

export const HeadingPrimary = styled.h1`
  color: var(--lightCream);
  font-size: 6.4rem;
  font-family: var(--serif);
  max-width: 50rem;
  margin-bottom: 3rem;
  font-weight: var(--weight-bold);

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    max-width: 34rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 3.4rem;
    max-width: 28rem;
  }
`;
