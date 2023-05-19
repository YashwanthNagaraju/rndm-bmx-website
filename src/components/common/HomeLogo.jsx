import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import RNDM from "../../assets/logos/logo.png";
import { navHomeID } from "../pages/handlers/pageRoutes";

export const HomeLogo = () => {
  return (
    <LogoLink
      offset={-200}
      spy={true}
      to={navHomeID}
      smooth={true}
      duration={500}
      tabIndex={0}
      id="logo"
      href="/"
    >
      <img width={157} height={100} src={RNDM} alt="RNDM-BMX" />
    </LogoLink>
  );
};

export const HomeLogoM = () => {
  return (
    <LogoLinkM
      offset={-200}
      spy={true}
      to={navHomeID}
      smooth={true}
      duration={500}
      tabIndex={0}
      id="logo-mobile"
      href="/"
    >
      <img width={125} height={80} src={RNDM} alt="RNDM-BMX" />
    </LogoLinkM>
  );
};

const NoStyleLink = styled(Link)`
  cursor: pointer;
  display: flex !important;
  padding: 1.5vh;
  text-decoration: none;
`;

const LogoLink = styled(NoStyleLink)`
  display: none;
  @media (min-width: 900px) {
    display: flex !important;
  }
`;

const LogoLinkM = styled(NoStyleLink)`
  display: flex;
  @media (min-width: 900px) {
    display: none !important;
  }
  margin: 0 auto;
`;
