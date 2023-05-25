import {
  Box,
  Container,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import RNDM_Boys from "../../assets/logos/boys_logo.png";
import RNDM_Girls from "../../assets/logos/girls_logo.png";
import {
  GeneralText,
  bgWhiteColor,
  myFont,
  whiteColor,
} from "../../styles/commonStyles";
import { Link } from "react-scroll";
import { footerLinks, navLinks } from "../pages/handlers/pageRoutes";
import { RiVimeoLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { Privacy, Return } from "./Text";
import { GiCancel } from "react-icons/gi";

const LOGO_WIDTH_L = 180;
const LOGO_HEIGHT_L = 120;

const LOGO_WIDTH_T = 150;
const LOGO_HEIGHT_T = 100;

const LOGO_WIDTH_M = 120;
const LOGO_HEIGHT_M = 80;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90vw",
  maxHeight: "60vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  overflow: "scroll",
  display: "grid",
  justifyItems: "end",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const modalStyle1 = {
  overflow: "scroll",
  display: "grid",
  justifyItems: "end",
};

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);

  const isMobile = !useMediaQuery("(min-width:450px)");
  const isTablet = !useMediaQuery("(min-width:900px)");

  const vimeoLink = "https://vimeo.com/rndmbmx";
  const youtubeLink =
    "https://www.youtube.com/channel/UCU2PTmpskLSJgWchiiOccSQ";
  const instagramLink = "https://www.instagram.com/rndm_bmx/";

  const handleOpen = useCallback((click) => {
    setValue(click);
    setOpen(true);
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  });

  return (
    <FooterContainer id="footer-content" as="footer">
      <FooterMainGrid container spacing={{ xs: 2, md: 2 }}>
        <Grid
          item
          xs={12}
          md={4}
          lg={5}
          paddingTop={{ xs: "15px", md: "0px!important" }}
        >
          <Box>
            <img
              width={
                isMobile ? LOGO_WIDTH_M : isTablet ? LOGO_WIDTH_T : LOGO_WIDTH_L
              }
              height={
                isMobile
                  ? LOGO_HEIGHT_M
                  : isTablet
                  ? LOGO_HEIGHT_T
                  : LOGO_HEIGHT_L
              }
              src={RNDM_Boys}
              alt="RNDM-BMX Boys"
            />
            <img
              style={{ paddingLeft: "3%" }}
              width={
                isMobile ? LOGO_WIDTH_M : isTablet ? LOGO_WIDTH_T : LOGO_WIDTH_L
              }
              height={
                isMobile
                  ? LOGO_HEIGHT_M
                  : isTablet
                  ? LOGO_HEIGHT_T
                  : LOGO_HEIGHT_L
              }
              src={RNDM_Girls}
              alt="RNDM-BMX Girls"
            />
            <FooterText color={whiteColor} marginTop={"2vh"}>
              BMX for the Boys and the Girls!
            </FooterText>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3.5}
          paddingTop={{ xs: "15px", md: "0px!important" }}
        >
          <LinksBox padding={{ sx: "0% 20%", md: "0% 5%" }}>
            <FooterHeader as="h2" textAlign={"start"}>
              Quick links
            </FooterHeader>

            {navLinks.map((page) => (
              <HomeLink
                key={"footer" + page.id}
                offset={page.offset}
                to={page.id}
                spy={true}
                smooth={true}
                duration={500}
                tabIndex={0}
                href="/"
              >
                {page.name}
              </HomeLink>
            ))}

            {footerLinks.map((page) => (
              <StyledButton
                key={"footer" + page.id}
                onClick={() => handleOpen(page.click)}
                tabIndex={0}
              >
                {page.name}
              </StyledButton>
            ))}
          </LinksBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3.5}
          paddingTop={{ xs: "15px", md: "0px!important" }}
        >
          <FooterHeader as="h2" textAlign={"center"}>
            RNDM-BMX Info.
          </FooterHeader>
          <FooterText color={"grey"}>Address:</FooterText>
          <FooterText color={whiteColor}>Melbourne, Australia</FooterText>
          <FooterSpacing />
          <FooterText color={"grey"}>EST:</FooterText>
          <FooterText color={whiteColor}>2016</FooterText>
          <FooterSpacing />
          <FooterText color={"grey"}>Favourite Slogan:</FooterText>
          <FooterText color={whiteColor}>Got BMX?!</FooterText>
        </Grid>
      </FooterMainGrid>
      <Modal sx={{ ...modalStyle1 }} open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 400 }}>
          <GiCancel
            style={{ alignContent: "right" }}
            size={30}
            onClick={handleClose}
          ></GiCancel>
          {value === 1 && <Return />}
          {value === 2 && <Privacy />}
        </Box>
      </Modal>
      <hr />
      <IconDiv>
        <Icon>
          <LinkNoStyle href={vimeoLink} aria-label={"vimeo"} target="_blank">
            <RiVimeoLine size={30} color={bgWhiteColor} />
          </LinkNoStyle>
        </Icon>
        <Icon>
          <LinkNoStyle
            href={youtubeLink}
            aria-label={"youtube"}
            target="_blank"
          >
            <TbBrandYoutube size={30} color={bgWhiteColor} />
          </LinkNoStyle>
        </Icon>
        <Icon>
          <LinkNoStyle
            href={instagramLink}
            aria-label={"instagram"}
            target="_blank"
          >
            <AiOutlineInstagram size={30} color={bgWhiteColor} />
          </LinkNoStyle>
        </Icon>
      </IconDiv>
    </FooterContainer>
  );
};

const FooterText = styled(GeneralText)`
  && {
    color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop};
    font-size: 20px;
    @media (min-width: 900px) {
      font-size: 24px;
    }
  }
`;

const FooterContainer = styled(Container)`
  min-width: 100vw;
  background: #0e0e11;
  min-height: 35vh;
`;

const FooterMainGrid = styled(Grid)`
  padding: 8% 0% 3% 0%;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    padding: 2% 0% 2% 0%;
  }
  align-items: center;
  color: ${whiteColor};
`;

const FooterHeader = styled(Typography)`
  font-size: 32px;
`;

const StyledButton = styled.button`
  background: #0e0e11;
  border: none;
  color: ${whiteColor};
  font-size: 20px !important;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 24px !important;
    text-align: initial;
  }
  padding: 0%;
  margin-top: 2%;
  font-family: ${myFont};
`;

const HomeLink = styled(Link)`
  && {
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    color: ${whiteColor};
    @media (min-width: 900px) {
      font-size: 24px;
    }
    margin-top: 2%;
  }
`;

const LinksBox = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 900px) {
      align-items: baseline;
      justify-content: start;
    }
  }
`;

const FooterSpacing = styled.div`
  padding-top: 2%;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1% 0%;
`;

const Icon = styled.div`
  padding-right: 1%;
  padding-left: 1%;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  z-index: 1;
  &#linkedinIcon:hover {
    color: #0177b5;
  }
  &#githubIcon:hover {
  }
  &#whatsappIcon:hover {
    color: #25d366;
  }
  &#instagramIcon:hover {
    color: #bc2a8d;
  }
`;
