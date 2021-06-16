import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-bottom: 9rem;
`;

export const FooterInnerWrapper = styled.div`
  background: var(--darkBlue);
  padding: 3.5rem 0;

  @media screen and (max-width: 940px) {
    padding: 5rem 0;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const FooterNavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  transform: ${(props) => (props.socialNav ? "translateX(15px)" : "")};
  margin-left: ${(props) => (props.footerNav ? "6rem" : "")};

  @media screen and (max-width: 940px) {
    margin-left: ${(props) => (props.footerNav ? "0" : "")};
    transform: ${(props) => (props.socialNav ? "translateX(0px)" : "")};
    margin-top: ${(props) => (props.socialNav ? "2rem" : "")};
  }

  @media screen and (max-width: 650px) {
    flex-direction: ${(props) => (props.footerNav ? "column" : "")};
  }

  @media screen and (max-width: 650px) {
    flex-direction: ${(props) => (props.footerNav ? "column" : "")};
  }
`;

export const FooterNavItem = styled.li`
  margin: 0 1rem;
`;

export const FooterNavSocialLink = styled.a`
  padding: 0.5rem;
`;
