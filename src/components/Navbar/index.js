import React, { useEffect, useState } from "react";

import {
  NavbarWrapper,
  NavbarInnerWrapper,
  NavbarSiteLinkR,
  NavbarMenuBtn,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLinkR,
} from "./NavbarElements";
import Logo from "../../assets/shared/desktop/logo.svg";
import Bars from "../../assets/shared/mobile/icon-hamburger.svg";
import X from "../../assets/shared/mobile/icon-close.svg";
import { ImageEl } from "../Image/ImageElement";
import { ContainerElement } from "../Container/ContainerElement";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  return (
    <NavbarWrapper $scrolledNav={scrolledNav}>
      <ContainerElement wider>
        <NavbarInnerWrapper $scrolledNav={scrolledNav}>
          <NavbarSiteLinkR to="/" $isOpen={isOpen} onClick={closeMenu}>
            <ImageEl className="logo" src={Logo} alt="Logo" />
          </NavbarSiteLinkR>
          <NavbarMenuBtn onClick={handleMenu}>
            <ImageEl
              src={isOpen ? `${X}` : `${Bars}`}
              alt={isOpen ? "Close Menu" : "Open Menu"}
            />
          </NavbarMenuBtn>
          <NavbarNavItems $isOpen={isOpen}>
            <NavbarNavItem>
              <NavbarNavLinkR
                to="/"
                $scrolledNav={scrolledNav}
                $isOpen={isOpen}
                onClick={closeMenu}
                exact={true}
              >
                Home
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                $scrolledNav={scrolledNav}
                to="/about-us"
                $isOpen={isOpen}
                onClick={closeMenu}
              >
                About us
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                $scrolledNav={scrolledNav}
                to="/create-your-plan"
                $isOpen={isOpen}
                onClick={closeMenu}
              >
                Create your plan
              </NavbarNavLinkR>
            </NavbarNavItem>
          </NavbarNavItems>
        </NavbarInnerWrapper>
      </ContainerElement>
    </NavbarWrapper>
  );
};

export default Navbar;
