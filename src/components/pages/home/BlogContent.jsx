import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navBlogID } from "../handlers/pageRoutes";
import bgImage from "../../../assets/images/home/blog/blog-bg.jpg";
import blogItem1 from "../../../assets/images/home/blog/blog-item-1.jpg";
import blogItem2 from "../../../assets/images/home/blog/blog3.jpg";
import blogItem3 from "../../../assets/images/home/blog/blog-item-3.jpg";

import {
  brightGreenColor,
  GeneralLink,
  GeneralText,
  HeaderText,
  OverlayAfter,
  Title,
} from "../../../styles/commonStyles";

export const BlogContent = () => {
  const blogHeading = [
    "The Birth of a New Mascot",
    "RNDM-BMX Charity Segment's",
    "RNDM-BMX Boys and girls range!",
  ];

  const blogText = [
    "How an adventure ride led into an idea for a RNDM - BMX girl's clothing range...",
    "It was April 2019, the Custom Tee’s had been designed and ordered, the old BMX...",
    "Continuing on from the last article there must be mention that the latest mascot known...",
  ];
  const linkText = "Continue reading";

  const blogLink1 = "https://rndmbmx888.substack.com/p/coming-soon";
  const blogLink2 = "https://rndmbmx8.substack.com/p/rndm-bmx-charity-segments";
  const blogLink3 = "https://rndmbmxa8.substack.com/p/coming-soon";

  return (
    <Element name={navBlogID}>
      <BlogContainer id="homeBlog">
        <Box style={{ textAlign: "center" }}>
          <BlogTitle as="h2" isBlack={false}>
            {" "}
            Blogs
          </BlogTitle>
          <LineDiv />
        </Box>
        <BlogContentBox id="blogContent">
          <ContentGrid id="blogGrid" container>
            <Grid item xs={8}>
              <Item>
                <BlogImage src={blogItem1} alt="" />
                <BlogInfo>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading[0]}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText[0]}</GeneralText>
                  <br />
                  <GeneralLink href={blogLink1} rel="noopener" target="_blank">
                    {linkText}
                  </GeneralLink>
                </BlogInfo>
              </Item>
              <Item>
                <BlogInfo>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading[1]}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText[1]}</GeneralText>
                  <br />
                  <GeneralLink href={blogLink2} rel="noopener" target="_blank">
                    {linkText}
                  </GeneralLink>
                </BlogInfo>
                <BlogImage src={blogItem2} alt="" />
              </Item>
            </Grid>
            <Grid item xs={4} style={{ padding: "0%" }}>
              <Item>
                <BlogImage src={blogItem3} alt="" />
              </Item>
              <Item>
                <BlogInfo style={{ paddingBottom: "4%" }}>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading[2]}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText[2]}</GeneralText>
                  <br />
                  <GeneralLink href={blogLink3} rel="noopener" target="_blank">
                    {linkText}
                  </GeneralLink>
                </BlogInfo>
              </Item>
            </Grid>
          </ContentGrid>
        </BlogContentBox>
        <BlogContentBoxM id="blogContentM">
          <ContentGridM id="blogGrid" container>
            <Grid item xs={12}>
              <ItemM>
                <BlogImage src={blogItem1} alt="" />
              </ItemM>
              <ItemM>
                <BlogInfo style={{ paddingBottom: "4%" }}>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading[0]}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText[0]}</GeneralText>
                  <br />
                  <GeneralLink href={blogLink1} rel="noopener" target="_blank">
                    {linkText}
                  </GeneralLink>
                  <br />
                </BlogInfo>
              </ItemM>
            </Grid>
            <Grid item xs={12}>
              <ItemM>
                <BlogImage src={blogItem2} alt="" />
              </ItemM>
              <ItemM>
                <BlogInfo style={{ paddingBottom: "4%" }}>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading[1]}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText[1]}</GeneralText>
                  <br />
                  <GeneralLink href={blogLink2} rel="noopener" target="_blank">
                    {linkText}
                  </GeneralLink>
                  <br />
                </BlogInfo>
              </ItemM>
            </Grid>
            <Grid item xs={12}>
              <ItemM>
                <BlogImage src={blogItem3} alt="" />
              </ItemM>
              <ItemM>
                <BlogInfo style={{ paddingBottom: "4%" }}>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading[2]}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText[2]}</GeneralText>
                  <br />
                  <GeneralLink href={blogLink3} rel="noopener" target="_blank">
                    {linkText}
                  </GeneralLink>
                  <br />
                </BlogInfo>
              </ItemM>
            </Grid>
          </ContentGridM>
        </BlogContentBoxM>
      </BlogContainer>
      <OverlayAfter />
    </Element>
  );
};

const BlogContainer = styled(Container)`
  && {
    background: url(${bgImage});
    background-size: cover !important;
    @media (min-width: 729px) {
      background-attachment: fixed;
    }
    @media (max-width: 728px) {
      width: 100%;
      padding: 20% 0%;
      background-attachment: inherit;
    }
    background-size: auto;
    width: 100vw;
    position: relative;
    margin: 0%;
    max-width: 100vw;
    padding: 6% 0%;
  }
`;

const BlogContentBox = styled(Box)`
  padding-top: 2%;
  padding-bottom: 10%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BlogContentBoxM = styled(Box)`
  padding-top: 2%;
  padding-bottom: 20%;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const BlogImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: auto;
`;

const BlogInfo = styled.div`
  background: #121212;
  padding: 0% 1.5vw;
  text-align: left;
`;

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  minHeight: "55%",
}));

const ItemM = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
}));

const ContentGrid = styled(Grid)`
  @media (min-width: 1800px) {
    width: 60% !important;
  }
  @media (min-width: 1400px) and (max-width: 1800px) {
    width: 80% !important;
  }
  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 80% !important;
  }
  margin: auto;
`;

const ContentGridM = styled(Grid)`
  width: 85% !important;
  margin: auto;
`;

const LineDiv = styled.div`
  content: "";
  height: 7px;
  display: block;
  background: #fff;
  margin: 12px auto;
  width: 24px;
`;

const BlogTitle = styled(Title)`
  margin-top: 15px;
  margin-bottom: 0%;
`;
