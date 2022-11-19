import { Box, Container, Grid, Paper } from "@mui/material";
import * as React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { navBlogID } from "../handlers/pageRoutes";
import bgImage from "../../../assets/images/home/blog/blog-bg.jpg";
import blogItem1 from "../../../assets/images/home/blog/blog-item-1.jpg";
import blogItem2 from "../../../assets/images/home/blog/blog-item-2.jpg";
import blogItem3 from "../../../assets/images/home/blog/blog-item-3.jpg";

import {
  brightGreenColor,
  GeneralLink,
  GeneralText,
  HeaderText,
  Title,
} from "../../../styles/commonStyles";

export const BlogContent = () => {
  const blogHeading = "The Birth of a New Mascot";
  const blogText =
    "How an adventure ride led into an idea for a RNDM - BMX girl's clothing range...";
  const linkText = "Continue reading";
  // const blogLink = "";

  return (
    <Element name={navBlogID}>
      <BlogContainer id="homeBlog">
        <Box style={{ textAlign: "center" }}>
          <Title as="h2" isBlack={false}>
            {" "}
            Blog
          </Title>
        </Box>
        <BlogContentBox id="blogContent">
          <ContentGrid id="test1" container>
            <Grid item xs={8}>
              <Item>
                <BlogImage src={blogItem1} alt="" />
                <BlogInfo>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText}</GeneralText>
                  <br />
                  <GeneralLink>{linkText}</GeneralLink>
                </BlogInfo>
              </Item>
              <Item>
                <BlogInfo>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText}</GeneralText>
                  <br />
                  <GeneralLink>{linkText}</GeneralLink>
                </BlogInfo>
                <BlogImage src={blogItem2} alt="" />
              </Item>
            </Grid>
            <Grid item xs={4} style={{ padding: "0%" }} id="test">
              <Item>
                <BlogImage src={blogItem3} alt="" />
              </Item>
              <Item>
                <BlogInfo style={{ paddingBottom: "4%" }}>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText}</GeneralText>
                  <br />
                  <GeneralLink>{linkText}</GeneralLink>
                </BlogInfo>
              </Item>
            </Grid>
          </ContentGrid>
        </BlogContentBox>
        <BlogContentBoxM>
          <ContentGridM id="test2" container>
            <Grid item xs={12}>
              <ItemM>
                <BlogImage src={blogItem1} alt="" />
              </ItemM>
              <ItemM>
                <BlogInfo style={{ paddingBottom: "4%" }}>
                  <HeaderText textAlign="left" as="h3" color={brightGreenColor}>
                    {blogHeading}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText}</GeneralText>
                  <br />
                  <GeneralLink>{linkText}</GeneralLink>
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
                    {blogHeading}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText}</GeneralText>
                  <br />
                  <GeneralLink>{linkText}</GeneralLink>
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
                    {blogHeading}
                  </HeaderText>
                  <GeneralText textAlign="left">{blogText}</GeneralText>
                  <br />
                  <GeneralLink>{linkText}</GeneralLink>
                  <br />
                </BlogInfo>
              </ItemM>
            </Grid>
          </ContentGridM>
        </BlogContentBoxM>
      </BlogContainer>
    </Element>
  );
};

const BlogContainer = styled(Container)`
  && {
    background: url(${bgImage});
    background-size: cover !important;
    background-attachment: fixed;
    background-size: auto;
    width: 100vw;
    position: relative;
    margin: 0%;
    max-width: 100vw;
    padding: 5% 0%;
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
  padding: 0% 3%;
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
    width: 50% !important;
  }
  @media (min-width: 1400px) and (max-width: 1800px){
    width: 60% !important;
  }
  @media (min-width: 1024px) and (max-width: 1400px){
    width: 70% !important;
  }
  margin: auto;
`;
const ContentGridM = styled(Grid)`
  width: 50% !important;
  margin: auto;
`;
