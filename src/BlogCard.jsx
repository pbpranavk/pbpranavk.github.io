import React from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const WorkCard = ({ className = "", imgSrc, title, desc, link, linkTxt }) => {
  return (
    <Paper
      className={className}
      style={{ margin: "2%" }}
      variant="outlined"
      elevation={3}
    >
      <Box
        style={{
          width: "350px",
        }}
      >
        <img
          style={{ height: "250px" }}
          src={`${imgSrc}`}
          alt="text"
          className="paper_image"
        />
        <Box
          m={1}
          display="flex"
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="primary">
            {`${title}`}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "5px" }}>
            {`${desc}`}
          </Typography>
          <Typography style={{ marginTop: "5px" }}>
            <Link to={link} className="text-blue">
              {`${linkTxt}`}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default WorkCard;
