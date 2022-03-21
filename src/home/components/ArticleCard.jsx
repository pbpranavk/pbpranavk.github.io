import React from "react";
// import { useHistory } from "react-router-dom";
import { Paper, Box, Typography, Button } from "@material-ui/core";

const ArticleCard = ({ className = "", imgSrc, title, desc, link }) => {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push(link);
  // };

  return (
    <Paper
      className={className}
      style={{ margin: "2%" }}
      variant="outlined"
      elevation={3}
    >
      <Box
        style={{
          width: "375px",
        }}
      >
        <img
          style={{ height: "250px", margin: "4px" }}
          src={`${imgSrc}`}
          alt="text"
          className="paper_image"
        />
        <Box
          m={1}
          display="flex"
          style={{
            height: "175px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" color="primary">
            {`${title}`}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "5px" }}>
            {`${desc}`}
          </Typography>

          <Box
            display="flex"
            style={{
              justifyContent: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Button variant="contained" target="_blank" href={link}>
              Open Article
            </Button>
          </Box>
        </Box>{" "}
      </Box>
    </Paper>
  );
};

export default ArticleCard;
