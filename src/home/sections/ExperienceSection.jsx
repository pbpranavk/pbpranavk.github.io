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
      <ul style={{ marginTop: "0px" }}>
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
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Senior Software Engineer"}
          shortDesc={"Beautiful Code LLP"}
          date={"(May 2020 – Present)"}
          description={
            "I’m currently working as Sr. Software Engineer and I’ve led the development of culture-easy’s web app from scratch using React."
          }
          keyResponsibilities={[
            "Ownership of Frontend",
            "Scaling the app for a smooth experience",
            "Ensuring Best practices,Maintainability & Extendability",
            "Interaction with Product Owners",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Software Engineer"}
          shortDesc={"Beautiful Code LLP"}
          date={"(June 2019 – May 2020)"}
          description={
            "Travel Portal: Worked for a US-based client to build a system involving Django, React and Kubernetes."
          }
          keyResponsibilities={[
            "Developing robust APIs and Database Models",
            "Designing asynchronous systems using python and microservices",
            "Building Components for dashboards with graphs and tables",
            "Interaction with clients",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Associate Engineer"}
          shortDesc={"Kony IT Services Pvt Ltd"}
          date={"(June 2018 – June 2019)"}
          description={
            "As an Associate Engineer, I worked on building a cross-platform app (Android & IOS) for an Indian Bank. I worked here during my final year of college balancing both work and study. I was one of the 6 students selected from our batch."
          }
          keyResponsibilities={[
            "Optimizing existing APIs",
            "Quickly building app screens",
            "Troubleshooting & fixing issues from legacy code",
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
