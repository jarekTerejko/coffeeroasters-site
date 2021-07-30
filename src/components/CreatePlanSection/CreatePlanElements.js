import styled from "styled-components";
import { ButtonPrimaryLinkR } from "../ButtonPrimary/ButtonPrimaryElement";

export const CreatePlanWrapper = styled.section``;

export const CreatePlanContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 1000px) {
    padding: 0 10vw;
  }

  @media screen and (max-width: 900px) {
    padding: 0 5vw;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;

export const CreatePlanAccordion = styled.div`
  grid-column: 2/4;
  scroll-margin-top: 10rem;

  @media screen and (max-width: 1000px) {
    grid-column: 1/4;
  }
`;

export const CreatePlanQuestionBtn = styled.button`
  transition: var(--transition);
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: none;
  align-items: center;
  border: none;
  margin-bottom: 5rem;
  cursor: pointer;
  color: var(--grey);

  &:disabled {
    color: var(--btnDisabled);
    cursor: not-allowed;
  }
`;

export const CreatePlanQuestionText = styled.span`
  font-family: var(--serif);
  color: var(--grey);
  color: inherit;
  font-size: 3.2rem;

  @media screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

export const CreatePlanQuestionArrow = styled.img`
  transition: transform var(--transition);

  &.open {
    transform: rotate(180deg);
  }
`;

export const CreatePlanAnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  max-height: 0;
  opacity: 0;
  overflow-y: hidden;
  transition: var(--transition);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  &.open {
    max-height: 1000px;
    opacity: 1;
    overflow-y: initial;

    transition: var(--transition);
    margin-bottom: 5rem;
  }
`;

export const CreatePlanAnswer = styled.button`
  background: var(--btnDisabled);
  padding: 3rem;
  border-radius: 1rem;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  min-height: 26rem;

  &:hover {
    background: var(--paleOrange);
  }

  &.selected {
    background: var(--darkCyan);
    color: var(--lightCream);
  }
`;

export const CreatePlanAnswerTitle = styled.span`
  font-size: 2.4rem;
  color: inherit;
  margin-bottom: 1rem;
  font-family: var(--serif);
  display: block;
`;

export const CreatePlanAnswerDescription = styled.span`
  font-size: 1.6rem;
  display: block;
  line-height: 1.6;
`;

export const CreatePlanOrderSummaryWrapper = styled.div`
  grid-column: 2/4;
  background: var(--darkBlue);
  padding: 3rem 4rem;
  margin-top: 10rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 1000px) {
    grid-column: 1/4;
  }
`;

export const CreatePlanOrderSummaryTitle = styled.span`
  color: var(--darkCyan);
  text-transform: uppercase;
  color: var(--grey);
  display: block;
  margin-bottom: 1.4rem;
`;

export const CreatePlanOrderText = styled.span`
  color: var(--darkCyan);
`;

export const CreatePlanOrderNavWrapper = styled.aside`
  position: sticky;
  top: 100px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const CreatePlanOrderNav = styled.nav`
  height: 0;
`;

export const CreatePlanOrderList = styled.ul`
  max-width: 25rem;
  list-style: none;
`;

export const CreatePlanOrderListItem = styled.li`
  padding: 0.5rem 0;
  position: relative;
  transition: all var(--transition);

  :not(:last-of-type)::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--btnDisabled);
  }

  &.active {
    :not(:last-of-type)::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: var(--grey);
    }
  }
`;

export const CreatePlanOrderLink = styled.a`
  color: var(--btnDisabled);
  font-family: var(--serif);
  font-size: 2.4rem;
  padding: 1.5rem 0;
  transition: transform var(--transition);

  &:hover {
    transform: translateX(10px);
  }
`;

export const CreatePlanOrderLinkCount = styled.span`
  padding-right: 2rem;
  transition: color var(--transition);

  &.active {
    color: var(--darkCyan);
  }
`;

export const CreatePlanOrderLinkName = styled.span`
  transition: color var(--transition);

  &.active {
    color: var(--grey);
  }
`;

export const CreatePlanOrderBtn = styled(ButtonPrimaryLinkR)`
  border: none;
  cursor: pointer;
  grid-column: 3/4;
  place-self: end;
  margin-bottom: 16rem;
  margin-bottom: ${(props) => (props.modal ? "0" : "")};

  &:disabled {
    background: var(--btnDisabled);
    cursor: not-allowed;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1/4;
  }

  @media screen and (max-width: 600px) {
    place-self: center;
  }
`;
