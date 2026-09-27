import React from "react";
// import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterSection = (props) => {
  return (
    <div className="flex footer mt-24">
      <Button
        aria-label="GitHub"
        href="https://github.com/pbpranavk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className="footer-icon margin-right-10px wheat-color" />
      </Button>
      <Button
        href="mailto:pbpranav24@gmail.com"
        aria-label="Email Pranav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon className="footer-icon margin-right-10px wheat-color" />
      </Button>
      <Button
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/p-b-pranav-kumar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="footer-icon wheat-color" />
      </Button>
    </div>
  );
};

FooterSection.propTypes = {};

export default FooterSection;
