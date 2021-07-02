import styled from "styled-components";

export const HowItWorksWrapper = styled.section`
  margin-bottom: 20rem;

  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const HowItWorksInnerWrapper = styled.div`
  background: ${(props) => (props.darkBackground ? "var(--darkGreyBlue)" : "")};
  padding-top: ${(props) => (props.darkBackground ? "12rem" : "")};
  border-radius: 1rem;
  padding-bottom: 4rem;
`;

export const HowItWorksCols = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const HowItWorksCol = styled.div`
  position: relative;
  padding-top: 8rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 2px var(--darkCyan);
    background: ${(props) =>
      props.darkBackground ? "var(--darkGreyBlue)" : "var(--lightCream)"};

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 14px;
    width: 100%;
    height: 2px;
    background: var(--paleOrange);

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  &:last-of-type::before {
    display: none;
  }

  @media screen and (max-width: 700px) {
    padding-top: 0;
  }
`;

export const HowItWorksStepCounter = styled.span`
  font-size: 8rem;
  font-family: var(--serif);
  color: var(--paleOrange);
  margin-bottom: 3rem;
  display: inline-block;
`;
