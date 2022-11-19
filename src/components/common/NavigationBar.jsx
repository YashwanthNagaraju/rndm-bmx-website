import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-scroll";
import styled from "styled-components";
import RNDM from "../../assets/logos/logo.png";
import {
  blackNavColor,
  GeneralText,
  greenColor,
  HiddenTypo,
  whiteColor,
} from "../../styles/commonStyles";
import { ThemeContext } from "../../App";
import Hamburger from "hamburger-react";
import { Slide, useMediaQuery } from "@mui/material";
import {
  slideFwdTopAmt,
} from "../../styles/animations";
import { navLinks } from "../pages/handlers/pageRoutes";

export const NavigationBar = () => {
  const { isOpen, setOpen } = useContext(ThemeContext);
  const [scrollPosition, setScrollPosition] = useState();
  const matches = useMediaQuery("(max-width:900px)");

  const elementArray = [
    "homeVideo",
    "homeProduct",
    "homeAbout",
    "homeOffer",
    "homeBlog",
    "footerContent",
  ];

  function handleBlur(elementID, style) {
    const element = document.getElementById(elementID);
    element.style.filter = style;
  }

  function handleClose() {
    if (isOpen) {
      setOpen(!isOpen);
    }
  }
  
  function watchScroll() {
    window.addEventListener("scroll", handleClose);
  }

  function handleNav(elementID) {
    const element = document.getElementById(elementID);
    element.onclick = handleClose;
  }

  // blur other elements when mobile nav bar is active
  useEffect(() => {
    if (matches && isOpen) {
      elementArray.map((ele) => handleBlur(ele, "blur(4px)"));
    } else {
      elementArray.map((ele) => handleBlur(ele, "none"));
    }
  }, [matches, isOpen]);

  useEffect(() => {
    if (isOpen) {
      watchScroll();
      return () => {
        window.removeEventListener("scroll", handleClose);
      };
    }
  }, [isOpen]);

  // to handle click away and escape
  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        handleClose();
      }
    });

    elementArray.map((ele) => handleNav(ele));
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [isOpen]);

  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (scrollPosition > currentScrollPos) {
        document.getElementById("navBar").style.top = "0";
        document.getElementById("navBar").style.transition = "0.5s";
      } else {
        document.getElementById("navBar").style.top = "-15%";
        document.getElementById("navBar").style.transition = "0.5s";
      }
      setScrollPosition(currentScrollPos);
    };
  });

  return (
    <>
      <StyledAppBar id="navBar">
        <NavContainer maxWidth="xl">
          <NavToolbar disableGutters>
            <LogoLink
              offset={-200}
              spy={true}
              smooth={true}
              duration={500}
              tabIndex={1}
              id="logo"
            >
              <img width={130} height={84} src={RNDM} alt="Random bmx logo" />
            </LogoLink>

            <NavBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <HiddenTypo>check</HiddenTypo>
              <LogoLinkM
                offset={-200}
                spy={true}
                smooth={true}
                duration={500}
                tabIndex={1}
                id="logoM"
              >
                <img width={120} height={84} src={RNDM} alt="Random bmx logo" />
              </LogoLinkM>
              <Hamburger
                id="mobileHamburgerIcon"
                style={{ display: "flex-end!important" }}
                toggled={isOpen}
                toggle={setOpen}
                duration={0.8}
                color={greenColor}
                size={26}
              />
            </NavBox>

            <NavBox
              sx={{
                flexGrow: 1,
                display: { xs: "none!important", md: "flex! important" },
              }}
            >
              {navLinks.map((page) => (
                <NavText key={page.id} open={isOpen}>
                  <HomeLink
                    key={page.id}
                    to={page.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    tabIndex={1}
                  >
                    {page.name.toUpperCase()}
                  </HomeLink>
                </NavText>
              ))}
            </NavBox>
          </NavToolbar>
        </NavContainer>
      </StyledAppBar>
      <Slide
        direction="left"
        id="mobileNavBar"
        in={isOpen}
        mountOnEnter
        unmountOnExit
        z-index={10}
      >
        <SideNav open={isOpen} z-index={100}>
          <MobileNav>
            {navLinks.map((page) => (
              <NavText key={page.id} open={isOpen}>
                <HomeLink
                  to={page.id}
                  spy={true}
                  onClick={handleClose}
                  smooth={true}
                  duration={500}
                  tabIndex={1}
                >
                  {page.name.toUpperCase()}
                </HomeLink>
              </NavText>
            ))}
          </MobileNav>
        </SideNav>
      </Slide>
    </>
  );
};

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: none;
    color: ${whiteColor};
    background: ${blackNavColor};
    position: fixed !important;
    top: 0;
    left:0;
  }
`;

const NavContainer = styled(Container)`
  && {
    -webkit-animation: ${slideFwdTopAmt};
    animation: ${slideFwdTopAmt};

    @media (max-width: 1024px) {
      max-width: 90% !important;
    }
    @media (min-width: 1024px) {
      max-width: 95% !important;
    }
    @media (max-width: 728px) {
      padding: 0 5vw;
    }
  }
`;

const NavBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NoStyleLink = styled(Link)`
  cursor: pointer;
  display: grid !important;
  padding: 1.5vh;
  text-decoration: none;
`;

const LogoLink = styled(NoStyleLink)`
   {
    @media (max-width: 900px) {
      display: none !important;
    }
  }
`;

const LogoLinkM = styled(NoStyleLink)`
   {
    @media (min-width: 901px) {
      display: none !important;
    }
    margin: 0 auto;
  }
`;

const SideNav = styled.aside`
  &&& {
    height: 100vh;
    filter: none;
    width: 50%;
    @media (max-width: 425px) {
      width: 65%;
    }
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    background-color: ${blackNavColor};
    overflow-x: hidden;
    box-shadow: -10px 0px 30px -15px ${blackNavColor};
    @media (min-width: 901px) {
      display: none;
    }
  }
`;

const MobileNav = styled.nav`
  display: inline-flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  gap: 8vh;
`;

const NavText = styled(GeneralText)`
  && {
    color: ${whiteColor};
    margin-left: 15px !important;
    margin-right: 15px !important;
    &:hover {
      color: ${greenColor};
    }
    @media (min-width: 768px) {
      font-size: 20px;
    }
    font-size: 24px;
    cursor: pointer;
  }
`;

const HomeLink = styled(Link)`
  && {
    cursor: pointer;
  }
`;

const NavToolbar = styled(Toolbar)`
  width: 100%;
`;
