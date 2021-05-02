import React from "react";
// import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterSection = (props) => {
  return (
    <div className="flex footer mt-24">
      <Button
        href="https://github.com/pbpranavk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className="footer-icon margin-right-10px wheat-color" />
      </Button>
      <Button
        href="https://twitter.com/pbpranav24/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="footer-icon margin-right-10px wheat-color" />
      </Button>
      <Button
        href="https://www.linkedin.com/in/p-b-pranav-kumar-b0563b147/"
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
