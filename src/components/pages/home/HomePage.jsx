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
import { homePageElementArray } from "../handlers/pageRoutes";

export const HomePage = () => {
  return (
    <div>
      <NavigationBar isHomePage={true} arrayToHandle={homePageElementArray} />
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
  }
`;
