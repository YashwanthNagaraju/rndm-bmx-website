import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navProductID } from "../handlers/pageRoutes";
import { bgWhiteColor, blackColor, Title } from "../../../styles/commonStyles";
import { latestProducts } from "../handlers/latestProducts";
import PencilBg from "../../../assets/images/home/pencil_mark_bgd.png";
import overlayBefore from "../../../assets/images/home/before.png";
import overlayAfter from "../../../assets/images/home/after.png";

export const ProductContent = () => {
  return (
    <ProductElement name={navProductID} id="home-product-section">
      <ProductContainer>
        <Box style={{ textAlign: "center" }}>
          <TitleWithImage as="h2" isBlack={true}>
            {" "}
            Our Upcoming Products
          </TitleWithImage>
        </Box>
        <ProductBox id="home-products-box">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {latestProducts.map((product) => (
              <ProductLink to={"/product"} key={product.key}>
                <ProductImage
                  src={product.image}
                  alt={product.alt}
                  key={product.alt}
                />
                <ProductText as="h3">{product.productName}</ProductText>
              </ProductLink>
            ))}
          </Stack>
        </ProductBox>
      </ProductContainer>
    </ProductElement>
  );
};

const ProductElement = styled(Element)`
  && {
    display: flex;
    align-items: center;
    position: relative;
    padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
      constant(safe-area-inset-bottom) constant(safe-area-inset-left);
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
    background-color: ${bgWhiteColor};
    ::before {
      content: "";
      display: block;
      width: 100%;
      min-height: 100px;
      position: absolute;
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
      height: 100px;
      background: url(${overlayAfter}) 50% 50% no-repeat;
      background-size: cover;
      position: absolute;
      transform: translate(0, 100%);
      bottom: 0;
      left: 0;
      z-index: 3;
    }
  }
`;

const ProductContainer = styled(Container)`
  && {
    min-height: 40vh;
    min-width: 100vw;
    padding: 1% 0%;
  }
`;

const TitleWithImage = styled(Title)`
  background: url(${PencilBg}) no-repeat;
  margin-top: 30px;
  background-position: center;
`;

const ProductText = styled(Typography)`
  @media (max-width: 900px) {
    margin: 10px 0px;
  }
  font-size: 24px;
  color: ${blackColor};
`;

const ProductBox = styled(Box)`
&&{
  display: flex;
  justify-content:center;
`;

const ProductImage = styled.img`
  transform: scale(1);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  width: 250px;
  height: 250px;
  margin: 0%;
  @media (min-width: 900px) {
    width: 250px;
    height: 250px;
    margin: 0vw;
  }
`;

const ProductLink = styled.div`
  margin: 1vh 2vw 1vh 2vw !important;
  @media (min-width: 900px) {
    margin: 2vh 2vw 5vh 2vw !important;
  }
`;
