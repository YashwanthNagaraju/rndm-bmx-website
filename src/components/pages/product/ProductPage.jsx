import React, { useEffect } from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import { Container } from "@mui/material";
import styled from "styled-components";

export const ProductPage = () => {
  useEffect(() => {
    console.log("test");
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <ProductContainer />
      <Footer />
    </>
  );
};

const ProductContainer = styled(Container)`
  display: flex;
  align-items: center;
  min-width: 100vw;
  min-height: 60vh;
`;
