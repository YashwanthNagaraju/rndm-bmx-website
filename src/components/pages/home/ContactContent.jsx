import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {
  blackColor,
  errorColor,
  GeneralText,
  greenColor,
  HeaderText,
  StyleDiv,
  successColor,
  Title,
  whiteColor,
} from "../../../styles/commonStyles";
import { navContactID } from "../handlers/pageRoutes";
import bgImage from "../../../assets/images/home/contact_background.png";
import { Alert, Box, Button, Container, Snackbar, Stack } from "@mui/material";
import { apiKey } from "../handlers/emailKey";
import emailjs from "@emailjs/browser";
import overlayBefore from "../../../assets/images/home/before.png";

export const errorText = "error";
export const successText = "success";
export const alertVerticalPos = "top";
export const alertHorizontalPos = "center";

export const ContactContent = () => {
  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState({
    msg: "",
    vertical: alertVerticalPos,
    horizontal: alertHorizontalPos,
  });
  const [info, setInfo] = useState("");
  const [alert, setAlert] = useState(false);
  const { vertical, horizontal, msg } = status;

  function handleStatus(text) {
    setStatus({
      msg: text,
      vertical: alertVerticalPos,
      horizontal: alertHorizontalPos,
    });
  }
  function handleMessage(infoText, type) {
    setInfo(infoText);
    handleStatus(type);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAlert(true);
    if (!emailID) {
      return handleMessage("Enter your email ID to submit.", errorText);
    }
    if (emailID) {
      if (!emailID.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        return handleMessage("Invalid email id.", errorText);
      }
    }
    if (!message) {
      return handleMessage("Enter a message to submit.", errorText);
    }
    try {
      var templateParams = {
        from_name: name,
        from_email: emailID,
        message: message,
        subject: subject,
      };
      emailjs
        .send(
          apiKey.SERVICE_ID,
          apiKey.TEMPLATE_ID,
          templateParams,
          apiKey.USER_ID
        )
        .then(() => {
          return handleMessage("Message has been sent.", successText);
        })
        .catch(() => {
          return handleMessage("Something went wrong.", errorText);
        });
    } catch {
      return handleMessage("Something went wrong.", errorText);
    }
  }

  function handleClose(e) {
    if (e.reason === "clickaway") {
      handleStatus("");
      return;
    }
    setInfo("");
    handleStatus("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [alert]);

  // const contactText = "on the right";
  // const contactTextM = "on the bottom";
  const isMobile = window.matchMedia(
    "only screen and (max-width: 900px)"
  ).matches;
  const contactText = isMobile ? "bottom" : "right";
  return (
    <ContactElement name={navContactID} id="home-contact-section">
      <Box style={{ textAlign: "center" }}>
        <Title as="h2" isBlack={true}>
          Contact Us
        </Title>
      </Box>
      <ContactContainer id="contact-container">
        <ContactStack direction="row" spacing={1}>
          <ContactBox id="contact-text-box">
            <ContactHeading color={blackColor} as="h2">
              Reach out to us
            </ContactHeading>
            <ContactText variant="body1" textAlign={"left"} color={blackColor}>
              For questions, queries and anything in between, just fill out the
              form (on the {contactText}) and we will get back to you really
              soon.
            </ContactText>
          </ContactBox>
          <ContactInfoBox component="form" id="contact-form-box">
            <Stack direction="row" spacing={4}>
              <HiddenLabel htmlFor="name-field">Name:* </HiddenLabel>
              <InfoField
                hasMargin={true}
                maxLength={40}
                isAdjacent={true}
                id="name-field"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <HiddenLabel htmlFor="email-id-field">Email ID: </HiddenLabel>
              <InfoField
                id="email-id-field"
                required
                isAdjacent={true}
                type="email"
                maxLength={40}
                placeholder="Email Id"
                onChange={(e) => setEmailID(e.target.value)}
              />
            </Stack>
            <StyleDiv />
            <HiddenLabel htmlFor="subject-id-field">Subject:</HiddenLabel>
            <InfoField
              id="subject-id-field"
              type="text"
              maxLength={60}
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <StyleDiv />
            <HiddenLabel htmlFor="message-field">Message: </HiddenLabel>
            <TextField
              id="message-field"
              placeholder="Message"
              type="text"
              required
              maxLength={1000}
              style={{
                minHeight: "20%",
                paddingBottom: "25%",
              }}
              onChange={(e) => setMessage(e.target.value)}
            />
            <StyleDiv />
            <MessageButton
              id="profile-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND IT!
            </MessageButton>
          </ContactInfoBox>
        </ContactStack>
        {msg !== "" && alert && (
          <InfoBar
            id="info-bar"
            anchorOrigin={{ vertical, horizontal }}
            open={msg !== ""}
            autoHideDuration={2}
            key={vertical + horizontal}
          >
            <Alert
              id="alert-bar"
              style={{
                backgroundColor: msg === "error" ? errorColor : successColor,
                color: whiteColor,
              }}
              onClose={(e) => handleClose(e)}
              severity={msg}
              sx={{ width: "100%" }}
            >
              {info}
            </Alert>
          </InfoBar>
        )}
      </ContactContainer>
    </ContactElement>
  );
};

const ContactElement = styled(Element)`
  &&& {
    min-height: 60vh;
    min-width: 100vw;
    background: url(${bgImage});
    background-size: cover !important;
    background-attachment: fixed;
    @media (min-width: 0px) {
      background-attachment: inherit;
    }
    @media (min-width: 728px) {
      background-attachment: fixed;
    }
    background-size: auto;
    ::before {
      content: "";
      display: block;
      width: 100%;
      min-height: 100px;
      position: inherit;
      transform: translate(0, -99px);
      top: 0;
      left: 0;
      z-index: 3;
      background: url(${overlayBefore});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
`;

const ContactContainer = styled(Container)`
  && {
    @media (min-width: 0px) {
      padding-bottom: 15vh;
      max-width: 90% !important;
      display: flex;
      justify-content: center;
    }
    @media (min-width: 768px) {
      max-width: 85% !important;
      display: inline-flex;
      justify-content: center;
    }
    @media (min-width: 1200px) {
      max-width: 80% !important;
      padding: 10vh 0% 15vh 0%;
      display: inline-flex;
      justify-content: center;
    }
  }
`;

const ContactStack = styled(Stack)`
  && {
    display: block;
    @media (min-width: 900px) {
      justify-content: center;
      display: flex;
    }
  }
`;

const ContactBox = styled(Box)`
  align-content: baseline;
  max-width: 80%;
  @media (min-width: 900px) {
    max-width: 40%;
    padding-right: 5%;
  }
  @media (min-width: 1400px) {
    padding-right: 5%;
    max-width: 50%;
  }
`;

const ContactInfoBox = styled(Box)`
&&{
  display: grid;
  align-content: baseline;
  @media (max-width: 900px) {
    padding-top:10%;
    margin:0%;
    height:50vh
    max-width: 80%;
  }
  @media (min-width: 900px) and (max-width:1400px) {
    padding-left:5%;
    margin-left:0%;
    max-width: 60%;
  }
  @media (min-width: 1400px) {
    padding-top:0%;
    padding-left:5%;
    margin-left:0%;
    min-width:50%;
    max-width: 70%;
  }
}
`;

const ContactHeading = styled(HeaderText)`
  && {
    display: block;
    margin-top: 0;
    text-align: left !important;
    @media (min-width: 1400px) {
      width: 40vw;
    }
    &::after {
      content: "";
      width: 140px;
      height: 7px;
      display: block;
      background: ${greenColor};
      margin-top: 20px;
    }
  }
`;

const ContactText = styled(GeneralText)`
  && {
    @media (min-width: 1400px) {
      width: 30vw;
    }
    width: inherit;
  }
`;

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const MessageButton = styled(Button)`
  && {
    padding: 2% 0%;
    background: ${greenColor};
    margin: auto;
    -webkit-transition: background-color 1s linear;
    -ms-transition: background-color 1s linear;
    transition: background-color 1s linear;
    width: 40%;
    font-size: 20px;
    text-transform: capitalize;
    @media (max-width: 425px) {
      font-size: 16px !important;
    }
    @media (min-width: 900px) {
      border-radius: 0%;
      margin: initial;
    }
    @media (max-width: 600px) {
      min-width: 50%;
    }
  }
`;

const TextField = styled.textarea`
  && {
    -webkit-transition: background-color 1.2s linear;
    -ms-transition: background-color 1.2s linear;
    transition: background-color 1.2s linear;
    cursor: pointer;
    font-size: 20px;
    border: 0px;
    text-align: left;
    @media (max-width: 728px) {
      max-width: 80vw;
    }
  }
`;

const InfoField = styled.input`
  && {
    -webkit-transition: background-color 1.2s linear;
    -ms-transition: background-color 1.2s linear;
    transition: background-color 1.2s linear;
    font-size: 20px;
    border: 0px;
    text-align: left;
    cursor: pointer;
    padding-bottom: 5%;
    margin-left: 0%;
    margin-right: ${(props) => (props.hasMargin ? "3%" : "0%")};
    padding-right: 2%;
    @media (min-width: 729px) {
      min-width: 46.2%;
    }
    margin-right: ${(props) => (props.hasMargin ? "3%" : "0%")};
    padding-right: 2%;
    @media (max-width: 728px) {
      max-width: ${(props) => (props.isAdjacent ? "37.2vw" : "80vw")};
    }
  }
`;

const InfoBar = styled(Snackbar)`
  && {
    display: flex;
  }
`;
