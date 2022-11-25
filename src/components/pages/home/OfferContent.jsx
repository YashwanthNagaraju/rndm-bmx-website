import { Box, Container } from "@mui/material";
import * as React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {
  bgWhiteColor,
  blackColor,
  GeneralText,
  OverlayAfter,
  OverlayBefore,
  Title,
} from "../../../styles/commonStyles";
import { navOffersID } from "../handlers/pageRoutes";
import { offersList } from "../handlers/offer";
import BagSvg from "../../../assets/logos/bag.svg";

export const OfferContent = () => {

  return (
    <OfferElement name={navOffersID}>
      <OverlayBefore />
      <OfferContainer id="homeOffer">
        <Box style={{ textAlign: "center" }}>
          <Title as="h2" isBlack={true}>
            {" "}
            Check our Offers
          </Title>
        </Box>
        <OfferBox id="offerContent">
          {offersList.map((offer) => (
            <Tag
              href={offer.link}
              target="_blank"
              rel="noopener"
              key={offer.key}
            >
              <OfferProductDiv>
                <GreenContent z-index />
                <OfferImage src={offer?.image} alt={offer.alt} z-index={1} />
              </OfferProductDiv>
              <GeneralText color={blackColor} fontSize={"20px"} as="h3">
                {offer?.title}
              </GeneralText>
              <GeneralText color={blackColor}>{offer?.subtitle}</GeneralText>
            </Tag>
          ))}
        </OfferBox>
      </OfferContainer>
      <OverlayAfter />
    </OfferElement>
  );
};

const OfferElement = styled(Element)`
  min-height: 40vh !important;
  background-color: ${bgWhiteColor};
`;

const OfferContainer = styled(Container)`
  && {
    width: 100vw !important;
    @media (min-width: 729px) {
      padding-bottom: 2%;
      padding-top: 2%;
    }
    @media (max-width: 728px) {
      padding-left: 10%;
      padding-right: 10%;
      padding-bottom: 5%;
    }
  }
`;

const OfferBox = styled(Box)`
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media (min-width: 1025px) {
    display: flex;
  }
  @media (max-width: 1024px) {
    display: grid;
  }
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.a`
  display: block;
  text-decoration: none;
  @media (min-width: 729px) {
    width: 440px;
    margin: 0 1vw;
    padding: 2%;
  }
  @media (max-width: 728px) {
    width: 300px;
    margin: 2vh 0%;
  }
`;

const OfferImage = styled.img`
  && {
    @media (min-width: 729px) {
      width: 440px;
      height: 240px;
      margin-left: -15%;
    }
    @media (min-width: 501px) and (max-width: 728px) {
      width: 300px;
      height: 180px;
    }
    @media (max-width: 500px) {
      width: 60vw;
      height: 20vh;
    }
    &:hover {
      transition: 0.4s;
      margin-left: -10%;
      z-index: 6 !important;
    }
  }
`;

const GreenContent = styled.div`
  && {
    background: url(${BagSvg}) 50% 50% no-repeat;
    @media (min-width: 729px) {
      width: 66px;
      height: 240px;
    }
    @media (max-width: 728px) {
      width: 45px;
      height: 180px;
    }
    @media (max-width: 500px) {
      height: 20vh;
    }
    z-index: 3 !important;
    position: relative;
    background-color: #afbf00;
  }
`;

const OfferProductDiv = styled.div`
  && {
    display: block ruby;
  }
`;
