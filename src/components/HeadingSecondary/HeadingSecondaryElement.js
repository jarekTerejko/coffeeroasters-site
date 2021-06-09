import styled from "styled-components";

export const HeadingSecondary = styled.h2`
  font-size: 4rem;
  font-family: var(--serif);
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  margin-bottom: 3rem;
  font-weight: var(--weight-bold);

  @media screen and (max-width: 450px) {
    font-size: 2.6rem;
  }
`;
