import React from "react";
import { Paper, Box, Typography } from "@material-ui/core";

const ProjectCard = ({
  className = "",
  imgSrc,
  title,
  desc,
  link,
  linkTxt,
}) => {
  return (
    <Paper className={className} variant="outlined" elevation={3}>
      <Box
        style={{
          width: "280px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{ height: "160px", width: "100%", objectFit: "contain" }}
          src={`${imgSrc}`}
          alt="text"
          className="paper_image"
        />
        <Box
          style={{
            padding: "12px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          <Box style={{ flex: 1, overflow: "hidden", marginBottom: "12px" }}>
            <Typography
              variant="h6"
              color="primary"
              style={{
                marginBottom: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {`${title}`}
            </Typography>
            <Typography
              variant="body2"
              style={{
                lineHeight: 1.4,
                color: "#64748b",
                fontSize: "0.875rem",
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {`${desc}`}
            </Typography>
          </Box>
          <Box style={{ marginTop: "auto", flexShrink: 0 }}>
            <Typography variant="body2">
              <a
                href={`${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
                style={{ fontWeight: 500, fontSize: "0.875rem" }}
              >
                {`${linkTxt}`}
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
