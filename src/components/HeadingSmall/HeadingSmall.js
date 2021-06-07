import styled from "styled-components";

export const HeadingSmall = styled.h3`
  font-family: var(--serif);
  font-weight: var(--weight-bold);
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  margin-bottom: ${(props) => (props.collectionSection ? "3rem" : "")};
  font-size: 2.4rem;
`;
