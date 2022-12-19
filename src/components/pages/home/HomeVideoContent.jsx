import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import {
  bgWhiteColor,
  HeaderText,
  laptopSize,
  myFont,
} from "../../../styles/commonStyles";
import { navHomeID } from "../handlers/pageRoutes";
import videoContent from "../../../assets/videos/home_video.mp4";
import styled from "styled-components";
import { BsSoundwave } from "react-icons/bs";
import { VscMute } from "react-icons/vsc";

export const HomeVideoContent = () => {
  const homeVideoText = "A BMX Brand for all kinds of people BMX!";
  const refVideo = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  // const isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;

  function playMusic(e) {
    setIsMuted(!isMuted);
    e.preventDefault();
    if (!isMuted) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
    } else {
      refVideo.current.defaultMuted = false;
      refVideo.current.muted = false;
    }
  }

  return (
    <Element name={navHomeID} z-index={1}>
      <VideoContainer id="homeVideo">
        <HomeVideo
          src={videoContent}
          ref={refVideo}
          muted={isMuted}
          autoPlay
          playsInline
          preload="metadata"
          loop
          z-index={-1}
        ></HomeVideo>
        <OverlayBox id="homeVideoText">
          <VideoText variant="h1">{homeVideoText} </VideoText>
          {!isMuted && (
            <SoundIcon
              size={laptopSize}
              onClick={playMusic}
              color={bgWhiteColor}
            />
          )}
          {isMuted && (
            <MuteIcon
              size={laptopSize}
              onClick={playMusic}
              color={bgWhiteColor}
            />
          )}
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
  height: 110vh;
  display: flex;
`;

const OverlayBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

const VideoText = styled(HeaderText)`
  && {
    font-size: 60px !important;
    font-family: ${myFont};
    text-shadow: -2px 2px 1px #000;
    font-weight: 700;
    height: 90vh;
    @media (min-width: 1024px) {
      max-width: 720px;
    }
    @media (min-width: 1024px) {
      font-size: 80px !important;
    }
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const SoundIcon = styled(BsSoundwave)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 2%;
  padding-bottom: 2%;
`;

const MuteIcon = styled(VscMute)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 2%;
  padding-bottom: 2%;
`;
