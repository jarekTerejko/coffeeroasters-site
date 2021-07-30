import { useRef } from "react";
import {
  ModalOverlay,
  ModalWrapper,
  ModalHeading,
  ModalContent,
  ModalPriceDesktopText,
  ModalPriceBtnText,
  ModalPriceTextBtnTextWrapper,
} from "./ModalElements";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DescriptionText/DescriptionTextElement";
import { CreatePlanOrderBtn } from "../CreatePlanSection/CreatePlanElements";

const Modal = ({ renderOrderSummary, pricePerMonth, closeModal }) => {
  const modalRef = useRef();
  const closeModalRef = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };
  return (
    <>
      <ModalOverlay ref={modalRef} onClick={closeModalRef}>
        <ModalWrapper>
          <ModalHeading>
            <HeadingSecondary modalHeading light>
              Order Summary
            </HeadingSecondary>
          </ModalHeading>
          <ModalContent>
            {renderOrderSummary()}
            <DescriptionText>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </DescriptionText>
            <ModalPriceTextBtnTextWrapper>
              <ModalPriceDesktopText>
                {Number.isInteger(pricePerMonth)
                  ? `$${pricePerMonth}.00 / mo`
                  : `$${pricePerMonth}0/ mo`}
              </ModalPriceDesktopText>
              <CreatePlanOrderBtn as="button" modal="true" onClick={closeModal}>
                Checkout
                <ModalPriceBtnText>
                  {Number.isInteger(pricePerMonth)
                    ? ` $${pricePerMonth}.00 / mo`
                    : ` $${pricePerMonth}0/ mo`}
                </ModalPriceBtnText>
              </CreatePlanOrderBtn>
            </ModalPriceTextBtnTextWrapper>
          </ModalContent>
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};

export default Modal;
