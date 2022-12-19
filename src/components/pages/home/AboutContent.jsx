import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navAboutID } from "../handlers/pageRoutes";
import bgImage from "../../../assets/images/home/about/about_image.png";
import {
  blackColor,
  GeneralLink,
  GeneralText,
  greenColor,
  Title,
} from "../../../styles/commonStyles";

export const AboutContent = () => {
  const blogLink = "https://rndmbmx8.substack.com/p/coming-soon";

  return (
    <Element name={navAboutID}>
      <AboutContainer id="homeAbout">
        <AboutBox>
          <StyledTitle as="h2" isBlack={false}>
            {" "}
            About Us
          </StyledTitle>
          <AboutCard id="aboutCard" sx={{ minWidth: 275 }}>
            <Content id="aboutContent">
              <AboutTitle as="h2" color="text.secondary" gutterBottom>
                A little about us
              </AboutTitle>
              <GeneralText color={blackColor} textAlign={"left"}>
                Established in 2016, RNDM OR RaNDoM BMX was inspired by aiming
                to be "Silly Unique" in a world full of Extreme.
              </GeneralText>
              <br />
              <GeneralText color={blackColor} textAlign={"left"}>
                Fast Forward some years ahead, RNDM-BMX grew from just being a
                BMX Brand about "Silly Unique" to a Brand where BMX can be for
                ALL People Interested!
              </GeneralText>
              <br />
              <GeneralText color={blackColor} textAlign={"left"}>
                Find out more about our{" "}
                <GeneralLink href={blogLink} rel="noopener" target="_blank">
                  Early Beginnings and Development as a BMX Brand.
                </GeneralLink>
              </GeneralText>
            </Content>
          </AboutCard>
        </AboutBox>
      </AboutContainer>
    </Element>
  );
};

const StyledTitle = styled(Title)`
  && {
    padding-bottom: 2%;
    padding-top: 2%;
    margin: 0%!important ;
  }
`;

const AboutContainer = styled(Container)`
  && {
    background: url(${bgImage});
    background-size: cover !important;
    @media (min-width: 729px) {
      background-attachment: fixed;
    }
    @media (max-width: 728px) {
      width: 100%;
      background-attachment: inherit;
    }
    background-size: auto;
    width: 100vw;
    position: relative;
    min-height: 90vh;
    margin: 0%;
    max-width: 100vw;
    padding: 0%;
  }
`;

const AboutBox = styled(Box)`
  width: 100vw;
  display: grid;
  @media (min-width: 729px) {
    padding: 10vh 0vw 15vh 0vw;
  }
  @media (max-width: 728px) {
    padding: 10vh 0vw;
  }
  justify-items: center;
`;

const AboutCard = styled(Card)`
  text-align: left;
  margin: 0 auto;
  max-width: 540px;
  @media (min-width: 729px) {
    margin-right: 20vw;
  }
  @media (max-width: 728px) {
    width: 90%;
  }
`;

const AboutTitle = styled(Typography)`
  font-size: 32px;
  &::after {
    content: "";
    width: 140px;
    height: 7px;
    display: block;
    background: ${greenColor};
    margin-top: 20px;
  }
`;

const Content = styled(CardContent)`
  && {
    margin: 0px 20px 10px 20px;
  }
`;
