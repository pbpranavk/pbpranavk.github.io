import React from "react";
import { useHistory } from "react-router-dom";
import { Paper, Box, Typography, Button } from "@material-ui/core";

const ArticleCard = ({ className = "", imgSrc, title, desc, link }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(link);
  };

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
          style={{ height: "250px", margin: "4px" }}
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

          <Box
            display="flex"
            style={{
              justifyContent: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Button variant="contained" onClick={handleClick}>
              Open Article
            </Button>
          </Box>
        </Box>{" "}
      </Box>
    </Paper>
  );
};

export default ArticleCard;
