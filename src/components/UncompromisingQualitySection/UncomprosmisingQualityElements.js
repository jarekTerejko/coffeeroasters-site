import styled from "styled-components";

export const UncompromisingQualityWrapper = styled.section`
  margin-bottom: 16rem;
`;

export const UncompromisingQualityInnerWrapper = styled.div`
  background: var(--darkGreyBlue);
  border-radius: 1rem;
  min-height: 47rem;
`;

export const UncompromisingQualityContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const UncompromisingQualityTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -40px;

  @media screen and (max-width: 1020px) {
    margin-top: 0px;
    grid-row: 2/3;
    align-items: center;
    text-align: center;
  }
`;

export const UncompromisingQualityImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  top: -80px;

  @media screen and (max-width: 1020px) {
    align-items: center;
  }

  @media screen and (max-width: 610px) {
    top: -60px;
  }
`;

export const UncompromisingQualityImgD = styled.img`
  border-radius: 1rem;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

export const UncompromisingQualityImgT = styled.img`
  border-radius: 1rem;
  display: none;
  grid-row: 1/2;

  @media screen and (max-width: 1020px) {
    display: block;
  }

  @media screen and (max-width: 610px) {
    display: none;
  }
`;

export const UncompromisingQualityImgM = styled.img`
  border-radius: 1rem;
  display: none;

  @media screen and (max-width: 610px) {
    display: block;
  }
`;
