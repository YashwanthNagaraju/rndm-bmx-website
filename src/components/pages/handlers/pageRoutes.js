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
  { name: "Home", id: navHomeID, offset: -200 },
  { name: "Products", id: navProductID, offset: -200 },
  { name: "About", id: navAboutID, offset: -50 },
  { name: "Offers", id: navOffersID, offset: -100 },
  { name: "Blog", id: navBlogID, offset: 0 },
  { name: "Contact Us", id: navContactID, offset: -200 },
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
