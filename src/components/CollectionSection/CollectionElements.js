import styled from "styled-components";

export const CollectionWrapper = styled.section`
  margin-bottom: 20rem;
`;
export const CollectionHeadingLarge = styled.h2`
  font-family: var(--serif);
  background-image: linear-gradient(var(--grey), var(--lightCream));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 10vw;
  line-height: 0.8;
  text-align: center;
  position: relative;
  z-index: -1;

  @media screen and (max-width: 768px) {
    font-size: 13vw;
  }
  @media screen and (max-width: 450px) {
    font-size: 4.6rem;
  }
`;
export const CollectionCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(1px, 247.5px));
  place-content: center;
  gap: 40px;
  align-content: center;
  position: relative;
  transform: translateY(-20px);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 6rem;
    transform: translateY(0);
  }
`;

export const CollectionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
export const CollectionCardImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }

  @media screen and (max-width: 450px) {
    padding: 0 3rem;
  }
`;

export const CollectionCardTextWrapper = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
    text-align: left;
    padding-right: 4rem;
    padding-top: 1rem;
  }

  @media screen and (max-width: 550px) {
    padding-right: 2rem;
  }

  @media screen and (max-width: 450px) {
    text-align: center;
    padding: 0 2rem;
  }
`;
export const CollectionCardDesc = styled.p``;
