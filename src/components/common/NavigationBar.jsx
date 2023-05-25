import React, { useCallback, useContext, useEffect, useState } from "react";
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
  myFont,
  whiteColor,
} from "../../styles/commonStyles";
import { ThemeContext } from "../../App";
import Hamburger from "hamburger-react";
import { Grid, Slide, useMediaQuery } from "@mui/material";
import { slideFwdTopAmt } from "../../styles/animations";
import { navLinks } from "../pages/handlers/pageRoutes";
import { HomeLogo, HomeLogoM } from "./HomeLogo";
import { Link as RouterLink } from "react-router-dom";

export const NavigationBar = ({ isHomePage, arrayToHandle }) => {
  const { isOpen, setOpen } = useContext(ThemeContext);
  const [scrollPosition, setScrollPosition] = useState();
  const isMobile = !useMediaQuery("(min-width:900px)");

  const elementArray = arrayToHandle;

  const handleBlur = useCallback((elementID, style) => {
    const element = document.getElementById(elementID);
    element.style.filter = style;
  }, []);

  const handleClose = useCallback(() => {
    if (isOpen) {
      setOpen(!isOpen);
    }
  }, [isOpen, setOpen]);

  function watchScroll() {
    window.addEventListener("scroll", handleClose);
  }

  function handleNav(elementID) {
    const element = document.getElementById(elementID);
    element.onclick = handleClose;
  }

  // blur other elements when mobile nav bar is active
  useEffect(() => {
    if (isMobile && isOpen) {
      elementArray.map((ele) => handleBlur(ele, "blur(4px)"));
    } else {
      elementArray.map((ele) => handleBlur(ele, "none"));
    }
  }, [isMobile, isOpen, handleBlur]);

  useEffect(() => {
    if (isOpen) {
      watchScroll();
      return () => {
        window.removeEventListener("scroll", handleClose);
      };
    }
  }, [isOpen, handleClose]);

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
  }, [isOpen, handleClose]);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (scrollPosition > currentScrollPos) {
        document.getElementById("navigation-bar").style.top = "0";
        document.getElementById("navigation-bar").style.transition = "0.5s";
      } else {
        document.getElementById("navigation-bar").style.top = "-25%";
        document.getElementById("navigation-bar").style.transition = "0.5s";
      }
      setScrollPosition(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <React.Fragment>
      <StyledAppBar id="navigation-bar" position="fixed">
        <NavContainer maxWidth="xl">
          <Toolbar disableGutters>
            {!isMobile && isHomePage && <HomeLogo />}
            {!isHomePage && (
              <NoStyleRouterLink
                style={{ paddingRight: "3%" }}
                to="/"
                id="logo"
                href="/"
              >
                <LogoImage width={157} height={100} src={RNDM} alt="RNDM-BMX" />
              </NoStyleRouterLink>
            )}
            <NavGrid
              container
              sx={{
                flexGrow: 1,
                display: { xs: "flex!important", md: "none!important" },
              }}
            >
              <Grid item xs={3}></Grid>
              <LogoGridM item xs={6}>
                {isHomePage && <HomeLogoM />}
                {!isHomePage && (
                  <NoStyleRouterLinkM to="/" id="mobile-logo">
                    <LogoImage
                      width={125}
                      height={80}
                      src={RNDM}
                      alt="RNDM-BMX"
                    />
                  </NoStyleRouterLinkM>
                )}
              </LogoGridM>
              <MenuGrid item xs={3}>
                <Hamburger
                  id="mobile-hamburger-icon"
                  style={{ display: "flex-end!important" }}
                  toggled={isOpen}
                  toggle={setOpen}
                  duration={0.8}
                  color={greenColor}
                  size={26}
                />
              </MenuGrid>
            </NavGrid>

            <NavBox
              sx={{
                flexGrow: 1,
                display: { xs: "none!important", md: "flex! important" },
              }}
            >
              {navLinks.map((page) => (
                <NavText key={page.id} open={isOpen}>
                  {isHomePage && (
                    <HomeLink
                      key={page.id}
                      to={page.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      tabIndex={0}
                      href="/"
                    >
                      {page.name.toUpperCase()}
                    </HomeLink>
                  )}
                  {!isHomePage && (
                    <NoStyleRouterLink to={"/"}>{page.name}</NoStyleRouterLink>
                  )}
                </NavText>
              ))}
            </NavBox>
          </Toolbar>
        </NavContainer>
      </StyledAppBar>
      <Slide
        direction="left"
        id="mobile-nav-bar"
        in={isOpen}
        mountOnEnter
        unmountOnExit
        z-index={10}
      >
        <SideNav open={isOpen} z-index={100}>
          <MobileNav>
            {navLinks.map((page) => (
              <NavText key={page.id} open={isOpen}>
                <React.Fragment>
                  {isHomePage && (
                    <HomeLink
                      to={page.id}
                      spy={true}
                      onClick={handleClose}
                      smooth={true}
                      duration={500}
                      tabIndex={0}
                      href="/"
                    >
                      {page.name.toUpperCase()}
                    </HomeLink>
                  )}
                  {!isHomePage && (
                    <NoStyleRouterLinkM to={page.pathname}>
                      {page.name}
                    </NoStyleRouterLinkM>
                  )}
                </React.Fragment>
              </NavText>
            ))}
          </MobileNav>
        </SideNav>
      </Slide>
    </React.Fragment>
  );
};

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: none;
    color: ${whiteColor};
    background: ${blackNavColor};
    backdrop-filter: blur(2px);
    padding-top: env(safe-area-inset-top);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
`;

const NavContainer = styled(Container)`
  && {
    padding: 0vh 2.5vw !important;
    -webkit-animation: ${slideFwdTopAmt};
    animation: ${slideFwdTopAmt};
  }
`;

const NavBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LogoGridM = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
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
    @media (min-width: 900px) {
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
  min-width: 100%;
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
    font-size: 28px;
    @media (min-width: 900px) {
      font-size: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 26px;
    }
    cursor: pointer;
  }
`;

const HomeLink = styled(Link)`
  && {
    cursor: pointer;
    text-decoration: none;
    color: ${whiteColor};
  }
`;

const NoStyleRouterLinkM = styled(RouterLink)`
  text-decoration: none;
  display: flex;
  padding: 1.5vh;
  justify-content: center;
  @media (min-width: 768px) {
    display: none !important;
  }
  color: ${whiteColor};
`;

const NoStyleRouterLink = styled(RouterLink)`
  display: none;
  text-decoration: none;
  @media (min-width: 768px) {
    display: flex !important;
    justify-content: center;
  }
  cursor: pointer;
  padding: 1.5vh;
  color: ${whiteColor};
  margin: 0 auto;
`;

const LogoImage = styled.img`
  font-family: ${myFont};
  font-size: 30px;
`;
