import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navProductID } from "../handlers/pageRoutes";
import {
  bgWhiteColor,
  blackColor,
  greenColor,
  OverlayAfter,
  OverlayBefore,
  Title,
} from "../../../styles/commonStyles";
import { latestProducts } from "../handlers/latestProducts";
import PencilBg from "../../../assets/images/home/home-background/pencil.png";

export const ProductContent = () => {
  return (
    <ProductElement name={navProductID}>
      <OverlayBefore isGrey={false} />
      <ProductContainer id="homeProduct">
        <Box style={{ textAlign: "center" }}>
          <TitleWithImage as="h2" isBlack={true}>
            {" "}
            Our Upcoming Products
          </TitleWithImage>
        </Box>
        <ProductBox id="latestProducts">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {latestProducts.map((product) => (
              <ProductLink to={"/product"} key={product.key}>
                <ProductImage
                  src={product.image}
                  alt={product.alt}
                  key={product.alt}
                />
                <ProductText as="h3">{product.productName}</ProductText>
                {/* {product.offer === "" && <SubText>${product.cost}</SubText>} */}
                {/* {!!product.offer && (
                  <SubText>
                    <strike>${product.offer}</strike> ${product.cost}
                  </SubText>
                )} */}
              </ProductLink>
            ))}
          </Stack>
        </ProductBox>
      </ProductContainer>
      <OverlayAfter isGrey={false} />
    </ProductElement>
  );
};

const TitleWithImage = styled(Title)`
  background: url(${PencilBg}) no-repeat;

  background-position: center;
`;

const ProductElement = styled(Element)`
  &&& {
    max-width: 100vw;
    background-color: ${bgWhiteColor};
  }
`;

const ProductContainer = styled(Container)`
  min-height: 40vh;
`;

const ProductText = styled(Typography)`
  @media (max-width: 728px) {
    margin-bottom: 5px !important;
  }
  font-size: 24px;
  color: ${blackColor};
`;

const SubText = styled.strong`
  font-size: 18px;
  color: ${greenColor}!important;
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
`;

const ProductLink = styled.div`
  @media (min-width: 729px) {
    margin: 2vh 2vw 5vh 2vw !important;
  }
  @media (max-width: 728px) {
    margin: 1vh 2vw 3vh 2vw !important;
  }
`;

