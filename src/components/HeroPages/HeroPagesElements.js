import styled from "styled-components";

export const HeroPagesWrapper = styled.header`
  margin-top: 11.4rem;
  margin-bottom: 17rem;
`;
export const HeroPagesInnerWrapper = styled.div`
  background: ${(props) => (props.HeroBgD ? `url(${props.HeroBgD})` : "black")};
  min-height: 45rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  padding-top: 13rem;
  
  @media screen and (max-width: 768px) {
    background: ${(props) =>
      props.HeroBgT ? `url(${props.HeroBgT})` : "black"};
    min-height: 40rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 10rem;
    padding-bottom: 7rem;
  }

  @media screen and (max-width: 375px) {
    background: ${(props) =>
      props.HeroBgM ? `url(${props.HeroBgM})` : "black"};
    min-height: 40rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 6rem;
    padding-bottom: 6rem;
    text-align: center;
  }
`;
