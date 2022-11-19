import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navAboutID } from "../handlers/pageRoutes";
import bgImage from "../../../assets/images/home/about/about_image.png";
import { GeneralLink, greenColor } from "../../../styles/commonStyles";

export const AboutContent = () => {
  return (
    <Element name={navAboutID}>
      <AboutContainer id="homeAbout">
        <AboutBox>
          <AboutCard id="aboutCard" sx={{ minWidth: 275 }}>
            <Content id="aboutContent">
              <AboutTitle as="h2" color="text.secondary" gutterBottom>
                A little about us
              </AboutTitle>

              <Typography>
                Established in 2016, RNDM OR RaNDoM BMX was inspired by aiming
                to be "Silly Unique" in a world full of Extreme.
              </Typography>
              <br />
              <Typography>
                Fast Forward some years ahead, RNDM-BMX grew from just being a
                BMX Brand about "Silly Unique" to a Brand where BMX can be for
                ALL People Interested!
              </Typography>
              <br />
              <Typography>
                Find out more about our{" "}
                <GeneralLink>
                  Early Beginnings and Development as a BMX Brand
                </GeneralLink>
              </Typography>
            </Content>
          </AboutCard>
        </AboutBox>
      </AboutContainer>
    </Element>
  );
};

const AboutContainer = styled(Container)`
  && {
    background: url(${bgImage});
    background-size: cover !important;
    background-attachment: fixed;
    background-size: auto;
    width: 100vw;
    position: relative;
    min-height: 80vh;
    margin: 0%;
    max-width: 100vw;
    padding: 0%;
  }
`;

const AboutBox = styled(Box)`
  width: 100vw;
  display: grid;
  padding: 30vh 0vw;
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

