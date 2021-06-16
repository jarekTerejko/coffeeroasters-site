import { ContainerElement } from "../Container/ContainerElement";
import { ImageEl } from "../Image/ImageElement";
import {
  FooterWrapper,
  FooterInnerWrapper,
  FooterContent,
  FooterNavItems,
  FooterNavItem,
  FooterNavSocialLink,
} from "./FooterElements";
import LogoWhite from "../../assets/shared/desktop/logo-white.svg";
import IconFacebook from "../../assets/shared/desktop/icon-facebook.svg";
import IconInstagram from "../../assets/shared/desktop/icon-instagram.svg";
import IconTwitter from "../../assets/shared/desktop/icon-twitter.svg";
import {
  NavbarNavItem,
  NavbarNavLinkR,
  NavbarSiteLinkR,
} from "../Navbar/NavbarElements";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <ContainerElement wider>
          <FooterInnerWrapper>
            <ContainerElement>
              <FooterContent>
                <NavbarSiteLinkR to="/">
                  <ImageEl src={LogoWhite} />
                </NavbarSiteLinkR>
                <FooterNavItems footerNav>
                  <NavbarNavItem>
                    <NavbarNavLinkR to="/" exact={true} $footerLink>
                      Home
                    </NavbarNavLinkR>
                  </NavbarNavItem>
                  <NavbarNavItem>
                    <NavbarNavLinkR to="/about-us" $footerLink>
                      About us
                    </NavbarNavLinkR>
                  </NavbarNavItem>
                  <NavbarNavItem>
                    <NavbarNavLinkR to="/create-your-plan" $footerLink>
                      Create your plan
                    </NavbarNavLinkR>
                  </NavbarNavItem>
                </FooterNavItems>
                <FooterNavItems socialNav>
                  <FooterNavItem>
                    <FooterNavSocialLink>
                      <ImageEl src={IconFacebook} />
                    </FooterNavSocialLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavSocialLink>
                      <ImageEl src={IconTwitter} />
                    </FooterNavSocialLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavSocialLink>
                      <ImageEl src={IconInstagram} />
                    </FooterNavSocialLink>
                  </FooterNavItem>
                </FooterNavItems>
              </FooterContent>
            </ContainerElement>
          </FooterInnerWrapper>
        </ContainerElement>
      </FooterWrapper>
    </>
  );
};

export default Footer;
