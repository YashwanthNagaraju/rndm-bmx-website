// import React, {useEffect } from "react";
// import { Footer } from "../../common/Footer";
// import { NavigationBar } from "../../common/NavigationBar";
// import { ShopContent } from "./ShopContent";

// export const ShopPage = () => {
//   useEffect(() => {
//     console.log("test")
//     window.scrollTo(0, 0)
//   }, [])
//   return (
//     <div>
//       <NavigationBar isHomePage={false}/>
//       <ShopContent/>
//       <Footer />
//     </div>
//   );
// };
import { Container } from "@mui/material";
import React from "react";
import { NavigationBar } from "../../common/NavigationBar";
import styled from "styled-components";
import { Footer } from "../../common/Footer";

export const ShopPage = () => {
  return (
    <>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <ShopContainer />
      <Footer />
    </>
  );
};

const ShopContainer = styled(Container)`
  display: flex;
  align-items: center;
  min-width: 100vw;
  min-height: 60vh;
`;
