import { ProductPage } from "../product/ProductPage";
import { BlogPage } from "../blog/BlogPage";
import { ContactPage } from "../contact/ContactPage";
import { HomePage } from "../home/HomePage";

// setting the pages and the components for the routes
export const pageRoutes = [
  {
    pathname: "/",
    exact: true,
    component: HomePage,
    key: "home",
  },
  {
    pathname: "/product",
    exact: true,
    component: ProductPage,
    key: "product",
  },
  {
    pathname: "/blog",
    exact: true,
    component: BlogPage,
    key: "blog",
  },
  {
    pathname: "/contact",
    exact: true,
    component: ContactPage,
    key: "contact",
  },
];

export const navHomeID = "home";
export const navProductID = "products";
export const navAboutID = "about";
export const navOffersID = "offers";
export const navBlogID = "blog";
export const navContactID = "contact";

export const navLinks = [
  { name: "Home", id: navHomeID },
  { name: "Products", id: navProductID },
  { name: "About", id: navAboutID },
  { name: "Offers", id: navOffersID },
  { name: "Blog", id: navBlogID },
  { name: "Contact Us", id: navContactID },
];
export const footerLinks = [
  { name: "Refunds or Exchanges", id: "refund" },
  { name: "Privacy Policy", id: "privacy" },
  
];

export const homePageIds = [
  "homeVideo",
  "homeProduct",
  "homeAbout",
  "homeOffer",
  "homeBlog",
  "homeContact",
  "footerContent",
];
