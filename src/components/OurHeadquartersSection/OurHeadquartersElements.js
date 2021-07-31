import styled from "styled-components";

export const OurHeadquartersWrapper = styled.section`
  margin-bottom: 16rem;
`;

export const OurHeadquartersCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 700px) {
    align-items: center;
    text-align: center;
  }
`;
