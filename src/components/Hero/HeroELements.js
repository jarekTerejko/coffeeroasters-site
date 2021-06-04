import styled from "styled-components";

export const HeroWrapper = styled.header``;

export const HeroInnerWrapper = styled.div`
  background: ${(props) => (props.HeroBgD ? `url(${props.HeroBgD})` : "black")};
  margin-top: 11.4rem;
  min-height: 60rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
`;
