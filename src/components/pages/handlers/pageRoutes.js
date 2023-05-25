import { ProductPage } from "../product/ProductPage";
import { ShopPage } from "../shop/ShopPage";
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
    pathname: "/shop",
    exact: true,
    component: ShopPage,
    key: "product",
  },
];

export const navHomeID = "home-section";
export const navProductID = "products-section";
export const navAboutID = "about-section";
export const navOffersID = "offers-section";
export const navBlogID = "blog-section";
export const navContactID = "contact-section";

export const navLinks = [
  { name: "Home", id: navHomeID, offset: -200, pathname: "/" },
  { name: "Products", id: navProductID, offset: -200, pathname: "/" },
  { name: "About", id: navAboutID, offset: -50, pathname: "/" },
  { name: "Clothing", id: navOffersID, offset: -100, pathname: "/" },
  { name: "Blogs", id: navBlogID, offset: 0, pathname: "/" },
  { name: "Contact Us", id: navContactID, offset: -200, pathname: "/" },
];
export const footerLinks = [
  { name: "Returns and Cancellations", id: "refund", click: 1 },
  { name: "Privacy Policy", id: "privacy", click: 2 },
];

// export const homePageIds = [
//   "home-video-section",
//   "home-product-section",
//   "home-about-section",
//   "home-offer-section",
//   "home-blog-section",
//   "homeContact",
//   "footerContent",
// ];

export const homePageElementArray = [
  "home-video-section",
  "home-product-section",
  "home-about-section",
  "home-offer-section",
  "home-blog-section",
  "home-contact-section",
  "footer-content",
];