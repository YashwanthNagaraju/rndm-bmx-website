import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {
  blackColor,
  errorColor,
  GeneralText,
  greenColor,
  HeaderText,
  OverlayBefore,
  StyleDiv,
  successColor,
  whiteColor,
} from "../../../styles/commonStyles";
import { navContactID } from "../handlers/pageRoutes";
import bgImage from "../../../assets/images/home/contact/bg.jpg";
import { Alert, Box, Button, Container, Snackbar, Stack } from "@mui/material";
import { apiKey } from "../handlers/emailKey";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";

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
    if (!message) {
      return handleMessage("Enter a message to submit.", errorText);
    }
    if (emailID) {
      if (!emailID.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        console.log("test");
        return handleMessage("Invalid email id.", errorText);
      }
    }
    try {
      var templateParams = {
        from_name: name,
        from_email: emailID,
        message: message,
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

  const contactText="on the right"
  const contactTextM="on the bottom"

  return (
    <ContactElement name={navContactID}>
      <OverlayBefore />
      <ContactContainer id="homeContact">
        <ContactStack id="contactStack" direction="row" spacing={2}>
          <ContactBox id="contactBox">
            <ContactHeading color={blackColor} as="h2">
              Reach out to us
            </ContactHeading>
            <ContactText variant="body1" textAlign={"left"} color={blackColor}>
              For questions, queries and anything in between, just fill out the
              form (on the right) and we will get back to you really soon.
            </ContactText>
          </ContactBox>
          <ContactInfoBox component="form" id="contactInfoBox">
            <FormStack direction="row" spacing={4}>
              <HiddenLabel htmlFor="nameField">Name: </HiddenLabel>
              <InfoField
                hasMargin={true}
                maxLength={40}
                isAdjacent={true}
                id="nameField"
                type="text"
                placeholder="Name"
                style={{}}
                onChange={(e) => setName(e.target.value)}
              />
              <HiddenLabel htmlFor="emailIdField">Email ID: </HiddenLabel>
              <InfoField
                id="emailIdField"
                isAdjacent={true}
                type="text"
                maxLength={40}
                placeholder="Email Id"
                onChange={(e) => setEmailID(e.target.value)}
              />
            </FormStack>
            <StyleDiv />
            <HiddenLabel htmlFor="subjectIdField">Subject:</HiddenLabel>
            <InfoField
              id="subjectIdField"
              type="text"
              maxLength={60}
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <StyleDiv />
            <HiddenLabel htmlFor="messageField">Message: </HiddenLabel>
            <TextField
              id="messageField"
              placeholder="Message"
              type="text"
              maxLength={1000}
              style={{
                minHeight: "20%",
                paddingBottom: "25%",
              }}
              onChange={(e) => setMessage(e.target.value)}
            />
            <StyleDiv />
            <MessageButton
              id="profileButton"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND IT!
            </MessageButton>
            {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
          </ContactInfoBox>
        </ContactStack>
        {msg !== "" && alert && (
          <InfoBar
            id="infoBar"
            anchorOrigin={{ vertical, horizontal }}
            open={msg !== ""}
            autoHideDuration={2}
            key={vertical + horizontal}
          >
            <Alert
              id="alertInfoBar"
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
    max-width: 100vw;
    min-height: 60vh;
    background: url(${bgImage});
    background-size: cover !important;
    background-attachment: fixed;
    @media (min-width: 729px) {
      background-attachment: fixed;
    }
    @media (max-width: 728px) {
      background-attachment: inherit;
    }
    background-size: auto;
  }
`;

const ContactContainer = styled(Container)`
  && {
    @media (max-width: 768px) {
      padding-bottom: 15vh;
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
      max-width: 85% !important;
      padding: 15vh 0% 15vh 0%;
      display: inline-flex;
    }
    @media (min-width: 1200px) {
      max-width: 80% !important;
      padding: 15vh 0% 15vh 0%;
      display: inline-flex;
    }
  }
`;

const ContactStack = styled(Stack)`
  && {
    width: 100%;
    @media (max-width: 900px) {
      display: block;
    }
    @media (min-width: 900px) {
      display: flex;
    }
  }
`;

const ContactBox = styled(Box)`
  align-content: baseline;
  @media (max-width: 900px) {
    height:50vh
    width: 80%;
  }
  @media (min-width: 900px) and (max-width:1400px) {
    padding-right:5%;
    width: 60%;
  }
  @media (min-width: 1400px) {
    padding-right:5%;
    width: 50%;
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
    width: 80%;
  }
  @media (min-width: 900px) and (max-width:1400px) {
    padding-top:0%;
    padding-left:5%;
    margin-left:0%;
    width: 60%;
  }
  @media (min-width: 1400px) {
    padding-top:0%;
    padding-left:5%;
    margin-left:0%;
    width: 60%;
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
    border-radius: 50px;
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

const FormStack = styled(Stack)``;

const InfoBar = styled(Snackbar)`
  && {
    display: flex;
  }
`;
