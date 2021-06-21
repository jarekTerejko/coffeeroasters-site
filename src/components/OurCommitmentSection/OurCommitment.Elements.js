import styled from "styled-components";

export const OurCommitmentWrapper = styled.section`
  margin-bottom: 25rem;
`;

export const OurCommitmentContent = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 80px;

  @media screen and (max-width: 1010px) {
    gap: 60px;
  }

  @media screen and (max-width: 768px) {
    gap: 40px;
  }

  @media screen and (max-width: 610px) {
    grid-template-columns: 1fr;
  }
`;

export const OurCommitmentImgWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
`;

export const OurCommitmentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 610px) {
    text-align: center;
  }
`;

export const OurCommitmentImgD = styled.img`
  border-radius: 1rem;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const OurCommitmentImgT = styled.img`
  border-radius: 1rem;
  display: none;

  @media screen and (max-width: 860px) {
    display: block;
  }
  
  @media screen and (max-width: 610px) {
    display: none;
  }
`;

export const OurCommitmentImgM = styled.img`
  border-radius: 1rem;
  display: none;

  @media screen and (max-width: 610px) {
    display: block;
  }
`;
