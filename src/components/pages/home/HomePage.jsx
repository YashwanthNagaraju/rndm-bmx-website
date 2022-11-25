import * as React from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import { AboutContent } from "./AboutContent";
import { BlogContent } from "./BlogContent";
import { ContactContent } from "./ContactContent";
import { HomeVideoContent } from "./HomeVideoContent";
import { OfferContent } from "./OfferContent";
import { ProductContent } from "./ProductContent";

export const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <HomeVideoContent />
      <ProductContent />
      <AboutContent />
      <OfferContent />
      <BlogContent />
      <ContactContent />
      <Footer />
    </div>
  );
};
