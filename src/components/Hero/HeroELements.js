import styled from "styled-components";

export const HeroWrapper = styled.header`
  margin-bottom: 16rem;
  margin-top: 11.4rem;
`;

export const HeroInnerWrapper = styled.div`
  background: ${(props) => (props.HeroBgD ? `url(${props.HeroBgD})` : "black")};
  min-height: 60rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  padding: 12rem 0 10rem 0;

  @media screen and (max-width: 768px) {
    padding: 10rem 0 8rem 0;
    background: ${(props) =>
      props.HeroBgT ? `url(${props.HeroBgT})` : "black"};
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    min-height: 50rem;
  }

  @media screen and (max-width: 375px) {
    background: ${(props) =>
      props.HeroBgM ? `url(${props.HeroBgM})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
`;
