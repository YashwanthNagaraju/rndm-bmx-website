import { Box } from "@mui/material";
import * as React from "react";
import { Element } from "react-scroll";
import { HeaderText } from "../../../styles/commonStyles";
import { navHomeID } from "../handlers/pageRoutes";
import videoContent from "../../../assets/videos/home_video.mp4";
import styled from "styled-components";

export const HomeVideoContent = () => {
  const homeVideoText = "A BMX brand for all kinds of people BMX";
  return (
    <Element name={navHomeID} z-index={1}>
      <VideoContainer id="homeVideo">
        <HomeVideo
          src={videoContent}
          autoPlay
          loop
          muted
          z-index={-1}
        ></HomeVideo>
        <OverlayBox id="homeVideoText">
          <VideoText variant="h1">{homeVideoText} </VideoText>
        </OverlayBox>
      </VideoContainer>
    </Element>
  );
};

const HomeVideo = styled.video`
  object-fit: cover;
  width:100%;
}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
`;

const OverlayBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  display:flex;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 90vh;
`;

const VideoText = styled(HeaderText)`
  && {
    font-size: 64px !important;
    text-shadow: -2px 2px 1px #000;
    font-weight: 700;
    height: 90vh;
    @media (min-width: 1024px) {
      max-width: 720px;
    }
    @media (max-width: 728px) {
      }
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
