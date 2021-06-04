import styled from "styled-components";

export const DescriptionText = styled.p`
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  max-width: 40rem;
  line-height: 1.6;
  margin-bottom: 5rem;
`;
