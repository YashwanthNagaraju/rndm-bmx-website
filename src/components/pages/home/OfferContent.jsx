import { Box, Container } from "@mui/material";
import * as React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {
  blackColor,
  GeneralText,
  OverlayAfter,
  OverlayBefore,
  Title,
} from "../../../styles/commonStyles";
import { navOffersID } from "../handlers/pageRoutes";
import { offersList } from "../handlers/offer";

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
            <Tag>
              <OfferImage src={offer?.image} alt={offer.alt} z-index={1} />
              <GeneralText color={blackColor} as="h3">
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
  @media (min-width: 729px) {
    height: 240px;
    width: 440px;
  }
  @media (max-width: 728px) {
    width: 300px;
    height: 180px;
  }
  &::after {
    width: 80px;
    height: 100%;
    left: 0;
    background: #afbf00;
    content: "";
    transition: 0.4s all;
    display: block;
    position: absolute;
    z-index: 6;
    box-sizing: border-box;
  }
  &::before {
    width: 32px;
    height: 40px;
    top: 50%;
    left: 22px;
    margin-top: -16px;
    z-index: 3;
  }
`;
