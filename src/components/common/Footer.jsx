import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import RNDM from "../../assets/logos/logo.png";
import { GeneralText, StyleDiv, whiteColor } from "../../styles/commonStyles";
import { footerLinks, navLinks } from "../pages/handlers/pageRoutes";

export const Footer = () => {
  return (
    <FooterContainer id="footerContent">
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <FooterBox>
          <img width={240} height={160} src={RNDM} alt="Random bmx logo" />
          <FooterText color={whiteColor} marginTop={"2vh"}>
            BMX for the Boys and the Girls!
          </FooterText>
        </FooterBox>
        <FooterBox>
          <FooterHeader as="h2">Quick links</FooterHeader>
          <ul>
            {navLinks.map((page) => (
              <ListItem key={"footer" + page.id}>
                <HomeLink
                  offset={page.offset}
                  to={page.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  tabIndex={1}
                >
                  {page.name}
                </HomeLink>
              </ListItem>
            ))}

            {footerLinks.map((page) => (
              <ListItem key={"footer" + page.id}>
                <HomeLink
                  to={page.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  tabIndex={1}
                >
                  {page.name}
                </HomeLink>
              </ListItem>
            ))}
          </ul>
        </FooterBox>

        <FooterBox>
          <FooterHeader as="h2">RNDM-BMX Info.</FooterHeader>
          <FooterText color={"grey"}>Address:</FooterText>
          <FooterText color={whiteColor}>Melbourne, Australia</FooterText>
          <StyleDiv />
          <FooterText color={"grey"}>EST:</FooterText>
          <FooterText color={whiteColor}>2016</FooterText>
          <StyleDiv />
          <FooterText color={"grey"}>Favourite Slogan:</FooterText>
          <FooterText color={whiteColor}>Got BMX?!</FooterText>
        </FooterBox>
      </Stack>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #0e0e11;
  min-height: 40vh;
  width: 100vw;
`;

const FooterBox = styled(Box)`
  @media (min-width: 901px) {
    width: 33vw;
    text-align: left;
  }
  @media (max-width: 900px) {
    text-align: center;
    padding: 0% 30vw;
  }
  min-height: 40vh;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterHeader = styled(Typography)`
  font-size: 32px;
`;

const FooterText = styled(GeneralText)`
  color: ${(props) => props.color};
  margin-top: ${(props) => props.marginTop};
`;

const HomeLink = styled(Link)`
  && {
    cursor: pointer;
    text-align: left;
    font-size: 16px !important;
  }
`;

const ListItem = styled.li`
  margin: 10px 0;
`;
