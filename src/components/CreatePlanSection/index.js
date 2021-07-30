import { useState, useEffect } from "react";
import { questions } from "../../data";
import {
  CreatePlanContent,
  CreatePlanWrapper,
  CreatePlanAccordion,
  CreatePlanQuestionBtn,
  CreatePlanQuestionText,
  CreatePlanAnswersWrapper,
  CreatePlanAnswer,
  CreatePlanOrderText,
  CreatePlanOrderSummaryWrapper,
  CreatePlanOrderSummaryTitle,
  CreatePlanAnswerTitle,
  CreatePlanAnswerDescription,
  CreatePlanQuestionArrow,
  CreatePlanOrderNavWrapper,
  CreatePlanOrderList,
  CreatePlanOrderNav,
  CreatePlanOrderListItem,
  CreatePlanOrderLink,
  CreatePlanOrderLinkCount,
  CreatePlanOrderLinkName,
  CreatePlanOrderBtn,
} from "./CreatePlanElements";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingSmall } from "../HeadingSmall/HeadingSmall";
import IconArrow from "../../assets/plan/desktop/icon-arrow.svg";
import Modal from "../Modal";

const CreatePlan = () => {
  const [items, setItems] = useState(questions);
  const [orderedItems, setOrderedItems] = useState(Array(5).fill(""));
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [pricePerShipment, setPricePerShipment] = useState({
    weekly: 7.2,
    biweekly: 9.6,
    monthly: 12.0,
  });
  const [pricePerMonth, setPricePerMonth] = useState(null);
  const [isCreatePlanBtnDisabled, setIsCreatePlanBtnDisabled] = useState(true);
  const [orderLinks, setOrderLinks] = useState([
    { option: "prefrences", active: true },
    { option: "bean-type", active: false },
    { option: "quantity", active: false },
    { option: "grind-option", active: false },
    { option: "deliveries", active: false },
  ]);

  const checkIsOrderComplete = () => {
    if (
      orderedItems[0] === "Capsule" &&
      orderedItems[1] !== "" &&
      orderedItems[2] !== "" &&
      orderedItems[4] !== ""
    ) {
      setIsCreatePlanBtnDisabled(false);
    } else if (
      orderedItems[0] === "Filter" &&
      orderedItems[1] !== "" &&
      orderedItems[2] !== "" &&
      orderedItems[3] !== "" &&
      orderedItems[4] !== ""
    ) {
      setIsCreatePlanBtnDisabled(false);
    } else if (
      orderedItems[0] === "Espresso" &&
      orderedItems[1] !== "" &&
      orderedItems[2] !== "" &&
      orderedItems[3] !== "" &&
      orderedItems[4] !== ""
    ) {
      setIsCreatePlanBtnDisabled(false);
    } else {
      setIsCreatePlanBtnDisabled(true);
    }
  };

  const light = true;

  const closeModal = () => {
    setIsModal(false);
  };

  const openModal = () => {
    setIsModal(true);
  };

  const toggleLink = (index) => {
    setOrderLinks(
      orderLinks.map((link, i) => {
        if (i === index) {
          link.active = true;
        } else {
          link.active = false;
        }
        return link;
      })
    );
  };

  const setRightPricePerShipment = () => {
    if (orderedItems[2] === "250g") {
      setPricePerShipment({
        weekly: 7.2,
        biweekly: 9.6,
        monthly: 12.0,
      });
    } else if (orderedItems[2] === "500g") {
      setPricePerShipment({
        weekly: 13.0,
        biweekly: 17.5,
        monthly: 22.0,
      });
    } else if (orderedItems[2] === "1000g") {
      setPricePerShipment({
        weekly: 22.0,
        biweekly: 32.0,
        monthly: 42.0,
      });
    }
  };

  const setRightPricePerMonth = () => {
    if (orderedItems[2] && orderedItems[4] === "Every week") {
      setPricePerMonth(pricePerShipment.weekly * 4);
    } else if (orderedItems[2] && orderedItems[4] === "Every 2 weeks") {
      setPricePerMonth(pricePerShipment.biweekly * 2);
    } else if (orderedItems[2] && orderedItems[4] === "Every month") {
      setPricePerMonth(pricePerShipment.monthly);
    }
  };

  const updateGrindAccordion = () => {
    if (orderedItems[0] === "Capsule") {
      setIsDisabled(true);
      closeAccordion(3);
    } else {
      setIsDisabled(false);
    }
  };

  const closeAccordion = (index) => {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          item.open = false;
        }
        return item;
      })
    );
  };

  const openAccordion = (index) => {
    setItems(
      items.map((item, i) => {
        if (orderedItems[0] === "Capsule" && i === 3) {
          item.open = false;
        } else {
          if (i === index) {
            item.open = true;
          }
        }
        return item;
      })
    );
    toggleLink(index);
  };

  useEffect(() => {
    updateGrindAccordion();
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedItems]);

  useEffect(() => {
    setRightPricePerMonth();
    checkIsOrderComplete();

    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedItems, pricePerShipment, pricePerMonth]);

  useEffect(() => {
    setRightPricePerShipment();
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedItems, pricePerMonth]);

  const toggleAccordion = (index) => {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        }
        return item;
      })
    );
  };

  const updateOrder = (i, elem) => {
    const tempOrder = [...orderedItems];
    if (elem.selected) {
      tempOrder[i] = elem.title;
    } else {
      tempOrder[i] = "";
    }
    setOrderedItems(tempOrder);
  };

  const selectAnswer = (index1, index2, e) => {
    const tempItems = [...items];
    tempItems[index1].answers.map((answer, j) => {
      if (j === index2) {
        answer.selected = !answer.selected;
        updateOrder(index1, answer);

        if (!answer.selected) {
          updateOrder(index1, answer);
        }
      } else {
        answer.selected = false;
      }
       return answer;
    });
    setItems(tempItems);
  };

  const renderOrderSummary = (variant) => {
    return (
      <HeadingSmall light={variant} modal>
        "
        {orderedItems[0] !== "" ? (
          <span>
            I drink my coffee as
            <CreatePlanOrderText>{` ${orderedItems[0]}`}</CreatePlanOrderText>
          </span>
        ) : (
          <span>
            I drink my coffee as
            <CreatePlanOrderText> ______</CreatePlanOrderText>
          </span>
        )}
        {orderedItems[1] !== "" ? (
          <span>
            , with a
            <CreatePlanOrderText>{` ${orderedItems[1]} `}</CreatePlanOrderText>
            type of bean.
          </span>
        ) : (
          <span>
            , with a<CreatePlanOrderText> ______ </CreatePlanOrderText>
            type of bean.
          </span>
        )}
        {orderedItems[2] !== "" ? (
          <span>
            <CreatePlanOrderText>{` ${orderedItems[2]} `}</CreatePlanOrderText>
          </span>
        ) : (
          <span>
            <CreatePlanOrderText> ______ </CreatePlanOrderText>
          </span>
        )}
        {orderedItems[3] === "" && orderedItems[0] !== "Capsule" && (
          <span>
            ground ala
            <CreatePlanOrderText> ______</CreatePlanOrderText>
          </span>
        )}
        {orderedItems[0] !== "Capsule" && orderedItems[3] !== "" && (
          <span>
            ground ala
            <CreatePlanOrderText>
              {` ${orderedItems[3]}`}
            </CreatePlanOrderText>
          </span>
        )}
        {orderedItems[4] !== "" ? (
          <span>
            , sent to me
            <CreatePlanOrderText>
              {` ${orderedItems[4]}`}
            </CreatePlanOrderText>
          </span>
        ) : (
          <span>
            , sent to me
            <CreatePlanOrderText> ______</CreatePlanOrderText>
          </span>
        )}
        "
      </HeadingSmall>
    );
  };

  // const reset

  return (
    <>
      {isModal ? (
        <Modal
          renderOrderSummary={renderOrderSummary}
          closeModal={closeModal}
          pricePerMonth={pricePerMonth}
        />
      ) : null}
      <CreatePlanWrapper>
        <ContainerElement>
          <CreatePlanContent>
            <CreatePlanOrderNavWrapper>
              <CreatePlanOrderNav>
                <CreatePlanOrderList>
                  {orderLinks.map((link, i) => {
                    return (
                      <CreatePlanOrderListItem
                        className={link.active ? "active" : ""}
                        key={i}
                      >
                        <CreatePlanOrderLink
                          href={`#${link.option}`}
                          onClick={() => openAccordion(i)}
                          className={link.active ? "active" : ""}
                        >
                          <CreatePlanOrderLinkCount
                            className={link.active ? "active" : ""}
                          >
                            {`0${i + 1}`}
                          </CreatePlanOrderLinkCount>
                          <CreatePlanOrderLinkName
                            className={link.active ? "active" : ""}
                          >
                            {questions[i].name}
                          </CreatePlanOrderLinkName>
                        </CreatePlanOrderLink>
                      </CreatePlanOrderListItem>
                    );
                  })}
                </CreatePlanOrderList>
              </CreatePlanOrderNav>
            </CreatePlanOrderNavWrapper>
            {items.map((item, i) => {
              if (i === items.length - 1) {
                return (
                  <CreatePlanAccordion id={orderLinks[i].option} key={i}>
                    <CreatePlanQuestionBtn
                      className={item.open ? "open" : ""}
                      onClick={() => toggleAccordion(i)}
                      disabled={isDisabled && i === 3 ? true : false}
                    >
                      <CreatePlanQuestionText>
                        {item.question}
                      </CreatePlanQuestionText>
                      <CreatePlanQuestionArrow
                        className={item.open ? "open" : ""}
                        src={IconArrow}
                      />
                    </CreatePlanQuestionBtn>
                    <CreatePlanAnswersWrapper
                      className={item.open ? "open" : ""}
                    >
                      {item.answers.map((answer, j) => {
                        return (
                          <CreatePlanAnswer
                            key={j}
                            className={answer.selected ? "selected" : ""}
                            onClick={() => selectAnswer(i, j)}
                          >
                            <CreatePlanAnswerTitle>
                              {answer.title}
                            </CreatePlanAnswerTitle>
                            <CreatePlanAnswerDescription>
                              {j === 0
                                ? `${
                                    Number.isInteger(pricePerShipment.weekly)
                                      ? `$${pricePerShipment.weekly}.00 `
                                      : `$${pricePerShipment.weekly}0 `
                                  } `
                                : ""}
                              {j === 1
                                ? `${
                                    Number.isInteger(pricePerShipment.biweekly)
                                      ? `$${pricePerShipment.biweekly}.00 `
                                      : `$${pricePerShipment.biweekly}0 `
                                  } `
                                : ""}
                              {j === 2
                                ? `${
                                    Number.isInteger(pricePerShipment.monthly)
                                      ? `$${pricePerShipment.monthly}.00 `
                                      : `$${pricePerShipment.monthly}0 `
                                  } `
                                : ""}
                              {answer.description}
                            </CreatePlanAnswerDescription>
                          </CreatePlanAnswer>
                        );
                      })}
                    </CreatePlanAnswersWrapper>
                  </CreatePlanAccordion>
                );
              } else {
                return (
                  <CreatePlanAccordion id={orderLinks[i].option} key={i}>
                    <CreatePlanQuestionBtn
                      className={item.open ? "open" : ""}
                      onClick={() => toggleAccordion(i)}
                      disabled={isDisabled && i === 3 ? true : false}
                    >
                      <CreatePlanQuestionText>
                        {item.question}
                      </CreatePlanQuestionText>
                      <CreatePlanQuestionArrow
                        className={item.open ? "open" : ""}
                        src={IconArrow}
                      />
                    </CreatePlanQuestionBtn>
                    <CreatePlanAnswersWrapper
                      className={item.open ? "open" : ""}
                    >
                      {item.answers.map((answer, j) => {
                        return (
                          <CreatePlanAnswer
                            key={j}
                            className={answer.selected ? "selected" : ""}
                            onClick={(e) => selectAnswer(i, j, e)}
                          >
                            <CreatePlanAnswerTitle>
                              {answer.title}
                            </CreatePlanAnswerTitle>
                            <CreatePlanAnswerDescription>
                              {answer.description}
                            </CreatePlanAnswerDescription>
                          </CreatePlanAnswer>
                        );
                      })}
                    </CreatePlanAnswersWrapper>
                  </CreatePlanAccordion>
                );
              }
            })}
            <CreatePlanOrderSummaryWrapper>
              <CreatePlanOrderSummaryTitle>
                Order Summary
              </CreatePlanOrderSummaryTitle>
              {renderOrderSummary(light)}
            </CreatePlanOrderSummaryWrapper>
            <CreatePlanOrderBtn
              disabled={isCreatePlanBtnDisabled}
              as="button"
              onClick={openModal}
            >
              Create my plan!
            </CreatePlanOrderBtn>
          </CreatePlanContent>
        </ContainerElement>
      </CreatePlanWrapper>
    </>
  );
};

export default CreatePlan;
