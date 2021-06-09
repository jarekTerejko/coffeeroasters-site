import styled from "styled-components";

export const WhyChooseUsWrapper = styled.section`
  margin-bottom: 20rem;
`;
export const WhyChooseUsInnerWrapper = styled.div`
  background: var(--darkBlue);
  min-height: 58rem;
  border-radius: 1rem;
  text-align: center;
  padding: 10rem 2rem;

  @media screen and (max-width: 810px) {
    padding-top: 6rem;
  }

  @media screen and (max-width: 375px) {
    min-height: 90rem;
  }
`;

export const WhyChooseUsCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1px, 350px));
  gap: 30px;
  place-content: center;
  margin-top: -23rem;

  @media screen and (max-width: 810px) {
    grid-template-columns: 1fr;
    margin-top: -30rem;
  }
  @media screen and (max-width: 450px) {
    margin-top: -25rem;
  }
  @media screen and (max-width: 375px) {
    margin-top: -58rem;
  }
  @media screen and (max-width: 330px) {
    margin-top: -52rem;
  }
  @media screen and (max-width: 300px) {
    margin-top: -48rem;
  }
`;

export const WhyChooseUsCard = styled.div`
  background: var(--darkCyan);
  padding: 8rem 5.5rem 5.5rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 50px;

  @media screen and (max-width: 810px) {
    grid-template-columns: max-content 1fr;
    gap: 60px;
    padding: 4rem 6rem;
    place-items: unset;
  }

  @media screen and (max-width: 550px) {
    gap: 30px;
    padding: 4rem;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyChooseUsCardImgWrapper = styled.div`
  place-self: center;
  min-height: 72px;

  @media screen and (max-width: 810px) {
    min-height: unset;
  }
`;

export const WhyChooseUsCardTextWrapper = styled.div`
  text-align: center;

  @media screen and (max-width: 810px) {
    text-align: left;
  }

  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;
