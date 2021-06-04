import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: var(--lightCream);
  box-shadow: ${(props) =>
    props.$scrolledNav ? "1px 1px 10px 1px rgba(0,0,0, .2)" : ""};
  transition: background-color var(--transition);

  @media screen and (max-width: 768px) {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.$scrolledNav ? "1rem 0" : `4rem 2rem`)};
  transition: padding var(--transition);

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const NavbarSiteLinkR = styled(Link)``;

export const NavbarMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    transform: translateX(6px);
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  transform: translateX(20px);
  transition: var(--transition);

  @media screen and (max-width: 768px) {
    position: fixed;
    transform: ${(props) =>
      props.$isOpen ? `translateX(0)` : "translateX(-110%)"};
    left: 0;
    top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--lightCream);
    width: 90%;
    height: calc(100vh - 50px);
    box-shadow: 1px 10px 8px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarNavItem = styled.li`
  margin: 0 1rem;
`;

export const NavbarNavLinkR = styled(NavLink)`
  padding: 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: var(--weight-semiBold);
  color: var(--darkBlue);
  transition: color var(--transition);

  &:hover {
    color: var(--grey);
  }

  &.active {
    color: var(--darkCyan);
  }

  @media screen and (max-width: 550px) {
    font-size: 1.4rem;
  }
`;
