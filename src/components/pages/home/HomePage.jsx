import React from "react";
import styled from "styled-components";
import { Container, css } from "@mui/material";
import { NavigationBar } from "../../common/NavigationBar";
import { AboutContent } from "./AboutContent";
import { ContactContent } from "./ContactContent";
import { HomeVideoContent } from "./HomeVideoContent";
import { OfferContent } from "./OfferContent";
import { ProductContent } from "./ProductContent";
import { Footer } from "../../common/Footer";
import { BlogContent } from "./BlogContent";

export const HomePage = () => {
  return (
    <div>
      <NavigationBar isHomePage={true} />
      <MainContainer id="main-content">
        <HomeVideoContent />
        <ProductContent />
        <AboutContent />
        <OfferContent />
        <BlogContent />
        <ContactContent />
      </MainContainer>
      <Footer />
    </div>
  );
};

const MainContainer = styled(Container)`
  && {
    display: flex;
    align-items: center;
    min-width: 100vw;
    flex-direction: column;
    margin: 0%;
    padding: 0%;
    ${() =>
      css`
        padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
          constant(safe-area-inset-bottom) constant(safe-area-inset-left);
        padding: env(safe-area-inset-top) env(safe-area-inset-right)
          env(safe-area-inset-bottom) env(safe-area-inset-left);
      `}
  }
`;
