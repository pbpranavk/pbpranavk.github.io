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
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Senior Machine Learning Engineer"}
          shortDesc={"Beautiful Code LLC"}
          date={"(Nov 2024 – Present)"}
          description={
            "Designed and scaled production-grade ML pipelines and infrastructure, improving accuracy, efficiency, and observability for high-volume Ad Tech systems."
          }
          keyResponsibilities={[
            "Rewrote all ML pipelines and models (Prospecting, Destinations, Retargeting, Reactivation) to combine embeddings with numeric features, achieving 92% accuracy in both online and offline performance.",
            "Engineered a modular Go library for feature extraction, reducing pipeline complexity by 40% and enabling reuse across batch and real-time inference.",
            "Developed observability dashboards (MAP, latency, conversion metrics), empowering analysts/PMs to measure performance without engineering help.",
            "Optimized infra costs by ~15% while scaling to billions of records.",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Technical Lead"}
          shortDesc={"Beautiful Code LLC"}
          date={"(June 2023 – Dec 2024)"}
          description={
            "Led cross-functional teams across geographies to deliver AI-first platforms, integrating Generative AI with robust system architecture and user-facing applications."
          }
          keyResponsibilities={[
            "Directed a distributed team (US & India) to launch an AI-first platform in under 8 months, boosting adoption by 20%.",
            "Integrated GenAI RAG (OpenAI + LangChain) into the platform, increasing user engagement by 22%.",
            "Oversaw service architecture, database design, and React/Supabase frontend.",
          ]}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2022 - Dec 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters in Artificial Intelligence from University of Cincinnati
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CGPA: 3.9 / 4.0
          </h4>
          <p>
            Subjects Taken: Deep Learning, Intelligent Systems, Applied AI & ML
            tools, Venture Capital & Strategy, Distributed Systems
          </p>
        </VerticalTimelineElement>

        <ExperienceCard
          icon={<WorkIcon />}
          title={"Senior Software Engineer"}
          shortDesc={"Beautiful Code LLP"}
          date={"(May 2021 – Jul 2022)"}
          description={
            "Owned the design and development of ML platform capabilities, enabling seamless training, deployment, and real-time use of models within distributed systems."
          }
          keyResponsibilities={[
            "Built an ML platform enabling applied scientists & PMs to train, host, and serve models with real-time inference, reducing time for PMs to generate model-driven segments by 40%.",
            "Designed APIs, schemas, Redis queues, and caching, reducing latency by 30% and increasing throughput by 25%.",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Software Engineer"}
          shortDesc={"Beautiful Code LLP"}
          date={"(June 2019 – May 2021)"}
          description={
            "Developed full-stack enterprise applications and internal tools, delivering scalable systems that improved business workflows and user experience."
          }
          keyResponsibilities={[
            "Delivered full-stack audience & campaign management system (React + Django) scaling to 3,000 DAUs.",
            "Built an internal HR tool to streamline and enable effective performance reviews.",
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Associate Engineer"}
          shortDesc={"Kony IT Professional Services Ltd"}
          date={"(June 2018 – June 2019)"}
          description={
            "Contributed to mobile banking application development, building reliable customer-facing features and improving app stability for large-scale daily use."
          }
          keyResponsibilities={[
            "Developed mobile banking features (FDs, RDs, notifications), improving stability by 80%.",
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
            Subjects Taken: Python Programming, Data Structures & Algorithms,
            OOP, Design Patterns, OS, CN, Data Visualisation & Analysis
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
