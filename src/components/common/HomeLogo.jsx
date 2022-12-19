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
      tabIndex={1}
      id="logo"
    >
      <img width={130} height={84} src={RNDM} alt="Random bmx logo" />
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
      tabIndex={1}
      id="logoM"
    >
      <img width={120} height={84} src={RNDM} alt="Random bmx logo" />
    </LogoLinkM>
  );
};

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