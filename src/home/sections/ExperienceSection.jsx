import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

import "react-vertical-timeline-component/style.min.css";

// import { JourneyCard } from "../components";

const ExperienceCard = ({
  icon = <></>,
  title = "",
  shortDesc = "",
  date = "",
  description = "",
  keyResponsibilities = [],
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{`${shortDesc} ${date}`}</h4>
      <p>{description} </p>
      <p>Key responsibilities include:</p>
      <ul className="experience-ul" style={{ marginTop: "0px" }}>
        {keyResponsibilities?.map((responsibility) => (
          <li>{responsibility}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceSection = ({ classes = {} }) => {
  return (
    <Box mt={10}>
      <Box display="flex" className={classes.justifyContentCenter}>
        <Typography
          variant="h3"
          className={classes.sectionTitle}
          color="primary"
        >
          Experience & Education
        </Typography>
      </Box>
      <VerticalTimeline lineColor={"#222"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2022 - Aug 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters in Artificial Intelligence from University of Cincinnati
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CGPA: 4.0 / 4.0
          </h4>
          <p>
            Subjects Taken: Deep Learning, Intelligent Systems, Complex Systems
            & Networks, Intro to Applied AI and ML Tools, Venture Capital, Data
            Encoding, Operating Systems
          </p>
        </VerticalTimelineElement>

        <ExperienceCard
          icon={<WorkIcon />}
          title={"Senior Software Engineer"}
          shortDesc={"Beautiful Code LLP"}
          date={"(May 2020 – Present)"}
          description={
            "I've contributed to the architecture, development and maintenance of  SaaS products at easy.xyz (Easy is a sister brand of BeautifulCode)"
          }
          keyResponsibilities={[
            "Ownership of Frontend codebase",
            "Scaling the apps to 2000 active users and ensuring a smooth experience by incorporating Design Patterns and Scalability (both vertical & horizontal)",
            "Guiding Junior Developers through code reviews",
            "Interacting with Product Owners to develop bug-free robust code",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Software Engineer"}
          shortDesc={"Beautiful Code LLP"}
          date={"(June 2019 – May 2020)"}
          description={
            "Worked for a US-based client to build a SaaS product involving Django, React & K8s"
          }
          keyResponsibilities={[
            "Developing robust APIs and Database Models",
            "Designing asynchronous microservices using python",
            "Building React components for dashboards with graphs and tables",
            "Interacting with clients",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Associate Engineer"}
          shortDesc={"Kony IT Services Pvt Ltd"}
          date={"(June 2018 – June 2019)"}
          description={
            "As an Associate Engineer, I worked on building a cross-platform mobile app (Android & iOS) for an Indian Bank. This was during my final year at college, I had to balance my work and study. I was one of the 6 students selected from our batch"
          }
          keyResponsibilities={[
            "Optimizing existing APIs",
            "Developing mobile app screens",
            "Troubleshooting & fixing issues from legacy code.",
          ]}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology in Computer science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CGPA: 3.3 / 4.0
          </h4>
          <p>
            Subjects Taken: Python Programming, Data Structures and Algorithms,
            Design Patterns, Operating Systems, Computer Networks, Big Data
            Analytics, Data Visualization, Machine Learning & Deep Learning
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Box>
  );
};

ExperienceSection.propTypes = {
  classes: PropTypes.object,
};

export default ExperienceSection;
