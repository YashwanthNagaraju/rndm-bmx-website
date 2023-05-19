import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navBlogID } from "../handlers/pageRoutes";
import blogItem1 from "../../../assets/images/home/blog_item_1.png";
import blogItem2 from "../../../assets/images/home/blog_item_2.png";
import blogItem3 from "../../../assets/images/home/blog_item_3.png";
import bgdImage from "../../../assets/images/home/blog_background.png";
import {
  GeneralLink,
  GeneralText,
  HeaderText,
  Title,
  brightGreenColor,
} from "../../../styles/commonStyles";
import overlayAfter from "../../../assets/images/home/after.png";

const blogHeading = [
  "Branding Identity",
  "Clothing for Our Brand Promoters",
  "Haunted Hills BMX Style",
];

const blogText = [
  "When doing a Model shoot one Sunny Afternoon, I noticed the different people...",
  "G’Day All. RNDM-BMX is Purchasing some Clothing for our Brand Promoters so they...",
  "Ok….. So it may be more or less of a new Mountain Bike Park to be exact, but...",
];

const linkText = "Continue reading";

const blogLink1 = "https://rndmbmx888.substack.com/p/branding-identity";
const blogLink2 =
  "https://rndmbmx888.substack.com/p/clothing-for-our-brand-promoters";
const blogLink3 = "https://rndmbmx8.substack.com/p/haunted-hills-bmx-style";

const alt_text_1 = "One of the Model Shoots Taken Place";
const alt_text_2 = "A BMX bike placed on a haunted hills gravestone";
const alt_text_3 = "Boys New Tees";

export const BlogContent = () => {
  return (
    <BlogElement name={navBlogID} id="home-blog-section">
      <BlogContainer>
        <Box style={{ textAlign: "center", paddingBottom: "5%" }}>
          <BlogTitle as="h2" isBlack={false}>
            Blogs
          </BlogTitle>
          <LineDiv />
        </Box>
        <Grid
          container
          direction={{ md: "row" }}
          display={{ xs: "none", md: "flex" }}
        >
          <Grid item md={5.5} display={"flex"}>
            <BlogImage src={blogItem1} alt={alt_text_1} />
          </Grid>
          <ContentGrid item md={2.5}>
            <BlogHeader textAlign="left" as="h3" color={brightGreenColor}>
              {blogHeading[0]}
            </BlogHeader>
            <GeneralText textAlign="left">{blogText[0]}</GeneralText>
            <br />
            <GeneralLink href={blogLink1} rel="noopener" target="_blank">
              {linkText}
            </GeneralLink>
          </ContentGrid>
          <Grid item md={4} display={"flex"}>
            <BlogImage src={blogItem2} alt={alt_text_2} />
          </Grid>
        </Grid>

        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          display={{ xs: "none", md: "flex" }}
        >
          <ContentGrid item md={2.5}>
            <BlogHeader textAlign="left" as="h3" color={brightGreenColor}>
              {blogHeading[1]}
            </BlogHeader>
            <GeneralText textAlign="left">{blogText[1]}</GeneralText>
            <br />
            <GeneralLink href={blogLink2} rel="noopener" target="_blank">
              {linkText}
            </GeneralLink>
          </ContentGrid>
          <Grid item display={"flex"} md={5.5}>
            <BlogImage src={blogItem3} alt={alt_text_3} />
          </Grid>
          <ContentGrid item md={4}>
            <BlogHeader textAlign="left" as="h3" color={brightGreenColor}>
              {blogHeading[2]}
            </BlogHeader>
            <GeneralText textAlign="left">{blogText[2]}</GeneralText>
            <br />
            <GeneralLink href={blogLink3} rel="noopener" target="_blank">
              {linkText}
            </GeneralLink>
          </ContentGrid>
        </Grid>
        <Grid
          id="blog-1-mobile"
          container
          spacing={0}
          direction={{ xs: "column" }}
          display={{ xs: "block", md: "none" }}
        >
          <Grid item>
            <BlogImage src={blogItem1} alt={alt_text_1} />
          </Grid>
          <ContentGrid item>
            <BlogHeader textAlign="left" as="h3" color={brightGreenColor}>
              {blogHeading[0]}
            </BlogHeader>
            <GeneralText textAlign="left">{blogText[0]}</GeneralText>
            <br />
            <GeneralLink href={blogLink1} rel="noopener" target="_blank">
              {linkText}
            </GeneralLink>
          </ContentGrid>
        </Grid>
        <Grid
          id="blog-2-mobile"
          container
          direction={{ xs: "column" }}
          display={{ xs: "block", md: "none" }}
          spacing={0}
        >
          <Grid item>
            <BlogImage src={blogItem2} alt={alt_text_2} />
          </Grid>
          <ContentGrid item>
            <BlogHeader textAlign="left" as="h3" color={brightGreenColor}>
              {blogHeading[1]}
            </BlogHeader>
            <GeneralText textAlign="left">{blogText[1]}</GeneralText>
            <br />
            <GeneralLink href={blogLink2} rel="noopener" target="_blank">
              {linkText}
            </GeneralLink>
          </ContentGrid>
        </Grid>
        <Grid
          id="blog-3-mobile"
          container
          direction={{ xs: "column" }}
          display={{ xs: "block", md: "none" }}
          spacing={0}
        >
          <Grid item>
            <BlogImage src={blogItem3} alt={alt_text_3} />
          </Grid>
          <ContentGrid item>
            <BlogHeader textAlign="left" as="h3" color={brightGreenColor}>
              {blogHeading[2]}
            </BlogHeader>
            <GeneralText textAlign="left">{blogText[2]}</GeneralText>
            <br />
            <GeneralLink href={blogLink3} rel="noopener" target="_blank">
              {linkText}
            </GeneralLink>
          </ContentGrid>
        </Grid>
      </BlogContainer>
    </BlogElement>
  );
};

const BlogElement = styled(Element)`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${bgdImage});
  background-size: cover !important;
  background-attachment: inherit;
  padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
    constant(safe-area-inset-bottom) constant(safe-area-inset-left);
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  @media (min-width: 728px) {
    background-attachment: fixed;
  }
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100px;
    background: url(${overlayAfter}) 50% 50% no-repeat;
    background-size: cover;
    position: inherit;
    transform: translate(0, 100%);
    bottom: 0;
    left: 0;
    z-index: 3;
    margin-top: -3%;
  }
`;

const BlogContainer = styled(Container)`
  && {
    padding: 20% 6% 20% 6%;
    @media (min-width: 600px) {
      padding: 12% 10% 10% 10%;
    }
    @media (min-width: 900px) {
      padding: 10% 2% 10% 2%;
    }
    @media (min-width: 1200px) {
      padding: 8% 3% 8% 3%;
    }
    @media (min-width: 1536px) {
      padding: 6% 3% 6% 3%;
    }
  }
`;

const BlogTitle = styled(Title)`
  margin-top: 15px;
  margin-bottom: 0%;
  text-shadow: -2px 2px 1px #000;
`;

const BlogHeader = styled(HeaderText)`
  & {
    margin-top: 0%;
  }
`;

const BlogImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;

const ContentGrid = styled(Grid)`
  background: #121212;
  padding: 3% 2%;
  @media (min-width: 900px) {
    padding: 2% 2%;
  }
  text-align: left;
`;

const LineDiv = styled.div`
  content: "";
  height: 7px;
  display: block;
  background: #fff;
  margin: 12px auto;
  width: 24px;
`;
