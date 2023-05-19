import { Container, Link, Typography } from "@mui/material";
import styled from "styled-components";
import overlayBefore from "../assets/images/home/before.png";
import overlayAfter from "../assets/images/home/after.png";

export const whiteColor = "#FFFFFF";
export const bgWhiteColor = "#f6f6f6";
export const blackNavColor = "rgba(14, 14, 17, 0.9)";
export const greenColor = "#afbf00";
export const blackColor = "#000";
export const errorColor = "#B00020";
export const successColor = "rgb(56, 142, 60)";
export const brightGreenColor = "#eaff00";
export const myFont = "Nerko One";
export const mobileSize = 40;
export const laptopSize = 42;

export const BodyText = styled(Typography)`
  && {
    font-size: 20px;
    font-family: ${myFont};
  }
`;

export const HeaderText = styled(Typography)`
  font-size: 32px;
  color: ${(props) => (!!props.color ? props.color : whiteColor)};
  text-align: ${(props) => (!!props.textAlign ? props.textAlign : "center")};
`;

export const GeneralText = styled(BodyText)`
  && {
    color: ${(props) => (!!props.color ? props.color : whiteColor)};
    font-size: ${(props) => (!!props.fontSize ? props.fontSize : "20px")};
    text-align: ${(props) => (!!props.textAlign ? props.textAlign : "center")};
  }
`;

export const GeneralLink = styled(Link)`
  &&&& {
    color: ${(props) => (!!props.color ? props.color : greenColor)};
    text-decoration: none;
    font-size: 20px !important;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HiddenTypo = styled(BodyText)`
  opacity: 0;
`;

export const HomeContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
`;

export const Title = styled(HeaderText)`
  text-transform: uppercase;
  font-size: 46px;
  letter-spacing: 2px;
  && {
    font-family: ${myFont};
  }
  font-weight: 700;
  color: ${(props) => (props.isBlack ? blackColor : whiteColor)};
`;

export const OverlayBefore = styled.div`
  && {
    content: "";
    display: block;
    width: 100%;
    min-height: 100px;
    background: url(${overlayBefore}) 50% 50% no-repeat;
    background-size: cover;
    transform: translate(0, -99px);
    z-index: 3;
    top: 0
    left: 0
    position: absolute;
    margin-bottom: -5%;
  }
`;

export const OverlayAfter = styled.div`
  && {
    width: 100%;
    position: absolute;
    left: 0;
    content: "";
    display: block;
    min-height: 100px;
    background: url(${overlayAfter}) 50% 50% no-repeat;
    background-size: cover;
    transform: translate(0, 0);
    z-index: 3;
  }
`;

export const StyleDiv = styled.div`
  padding-top: 3%;
`;

export const CommonContainer = styled(Container)`
  min-height: 80vh;
`;
