import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  padding: 3rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const ModalWrapper = styled.div`
  position: relative;
  max-width: 54rem;
`;

export const ModalHeading = styled.header`
  padding: 5rem;
  background: var(--darkGreyBlue);
`;

export const ModalContent = styled.div`
  padding: 5rem;
  background: var(--lightCream);
`;

export const ModalPriceTextBtnTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ModalPriceDesktopText = styled.h3`
  font-size: 3rem;
  color: var(--darkBlue);
  font-family: var(--serif);
  font-weight: var(--weight-bold);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ModalPriceBtnText = styled.span`
  font-size: 1.8rem;
  display: none;

  @media screen and (max-width: 768px) {
    display: inline;
    text-align: center;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }
`;
