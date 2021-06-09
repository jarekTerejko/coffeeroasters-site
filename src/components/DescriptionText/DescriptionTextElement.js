import styled from "styled-components";

export const DescriptionText = styled.p`
  color: ${(props) => (props.light ? "var(--lightCream)" : "")};
  max-width: 40rem;
  max-width: ${(props) => (props.whyChooseUs ? "55rem" : "")};
  margin: ${(props) => (props.whyChooseUs ? "0 auto" : "")};
  line-height: 1.6;
  margin-bottom: 5rem;
  margin-bottom: ${(props) => (props.whyChooseUsCard ? "0" : "")};
`;
