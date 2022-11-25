import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
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

export const ProductContent = () => {
  return (
    <ProductElement name={navProductID}>
      <OverlayBefore isGrey={false} />
      <ProductContainer id="homeProduct">
        <Box style={{ textAlign: "center" }}>
          <Title as="h2" isBlack={true}>
            {" "}
            Our Latest Products
          </Title>
        </Box>
        <ProductBox id="latestProducts">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {latestProducts.map((product) => (
              <ProductLink key={product.alt}>
                <ProductImage src={product.image} alt={product.alt} />
                <ProductText as="h3">{product.productName}</ProductText>
                {product.offer === "" && <SubText>${+product.cost}</SubText>}
                {!!product.offer && (
                  <SubText>
                    <strike>${product.offer}</strike> ${product.cost}
                  </SubText>
                )}
              </ProductLink>
            ))}
          </Stack>
        </ProductBox>
      </ProductContainer>
      <OverlayAfter isGrey={false} />
    </ProductElement>
  );
};

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
  color: ${blackColor};
`;

const SubText = styled.strong`
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

const ProductLink = styled.a`
  cursor: pointer;
  @media (min-width: 729px) {
    margin: 2vh 2vw 5vh 2vw !important;
  }
  @media (max-width: 728px) {
    margin: 1vh 2vw 3vh 2vw !important;
  }
`;
