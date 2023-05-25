import { Box, Container } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {
  bgWhiteColor,
  blackColor,
  GeneralText,
  Title,
} from "../../../styles/commonStyles";
import { navOffersID } from "../handlers/pageRoutes";
import { offersList } from "../handlers/offer";
import BagSvg from "../../../assets/logos/bag.svg";
import PencilBg from "../../../assets/images/home/pencil_mark_bgd.png";
import overlayBefore from "../../../assets/images/home/before.png";
import overlayAfter from "../../../assets/images/home/after.png";

export const OfferContent = () => {
  return (
    <OfferElement name={navOffersID} id="home-offer-section">
      <OfferContainer>
        <Box style={{ textAlign: "center" }}>
          <TitleWithImage as="h2" isBlack={true}>
            Check our Clothing Line
          </TitleWithImage>
        </Box>
        <OfferBox flexDirection={{ xs: "column", md: "row" }}>
          {offersList.map((offer) => (
            <Tag
              key={offer.key}
              href={offer.link}
              target="_blank"
              rel="noopener"
              aria-label={offer.title}
            >
              <OfferProductDiv>
                <GreenContent />
                <OfferImage
                  src={offer?.image}
                  alt={offer.alt}
                  z-index={1}
                  key={offer.key}
                />
              </OfferProductDiv>
              <GeneralText color={blackColor} fontSize={"24px"} as="h3">
                {offer?.title}
              </GeneralText>
              <GeneralText color={blackColor}>{offer?.subtitle}</GeneralText>
            </Tag>
          ))}
        </OfferBox>
      </OfferContainer>
    </OfferElement>
  );
};

const OfferElement = styled(Element)`
  && {
    min-height: 40vh;
    background-color: ${bgWhiteColor};
    min-width: 100vw;
    ::before {
      margin-bottom: -8%;
      @media (min-width: 728px) {
        margin-bottom: -5%;
      }
      content: "";
      display: block;
      width: 100%;
      min-height: 100px;
      position: inherit;
      transform: translate(0, -99px);
      top: 0;
      left: 0;
      z-index: 3;
      background: url(${overlayBefore});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 60px;
      @media (min-width: 728px) {
        height: 100px;
      }
      background: url(${overlayAfter}) 50% 50% no-repeat;
      background-size: cover;
      position: inherit;
      transform: translate(0, 100%);
      bottom: 0;
      left: 0;
      z-index: 3;
    }
  }
`;

const OfferContainer = styled(Container)`
  padding-top: 1%;
`;

const OfferBox = styled(Box)`
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
  }
  flex-wrap: wrap;
`;

const TitleWithImage = styled(Title)`
  background: url(${PencilBg}) no-repeat;
  background-position: center;
`;

const Tag = styled.a`
  display: block;
  text-decoration: none;
  padding: 0%;
  width: 280px;
  max-width: 90%;
  margin: 2vh 0%;
  @media (min-width: 728px) {
    width: 440px;
    margin: 0 1vw;
    padding: 2%;
  }
`;

const OfferImage = styled.img`
  && {
    width: 65vw;
    height: 20vh;
    @media (min-width: 500px) {
      width: 300px;
      height: 180px;
    }
    @media (min-width: 728px) {
      width: 440px;
      height: 240px;
      margin-left: -30%;
    }
    &:hover {
      transition: 0.4s;
      margin-left: -10%;
      z-index: 6;
    }
  }
`;

const GreenContent = styled.div`
  && {
    background: url(${BagSvg}) 50% 50% no-repeat;
    height: 20vh;
    width: 50px;
    @media (min-width: 500px) {
      width: 60px;
      height: 180px;
    }
    @media (min-width: 728px) {
      width: 66px;
      height: 240px;
    }
    z-index: 3;
    position: relative;
    background-color: #afbf00;
  }
`;

const OfferProductDiv = styled.div`
  && {
    display: -webkit-box;
    justify-content: center;
  }
`;
