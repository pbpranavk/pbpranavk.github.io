import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({
  icon = <></>,
  title = "",
  shortDesc = "",
  date = "",
  keyResponsibilities = [],
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#fff", color: "#475569" }}
      contentArrowStyle={{ borderRight: "7px solid #e2e8f0" }}
      iconStyle={{ background: "#eff4ff", color: "#1e40af" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{shortDesc}</h4>
      <p className="experience-date">
        {date}
      </p>
      <p>Key responsibilities include:</p>
      <ul className="experience-ul" style={{ marginTop: "0px" }}>
        {keyResponsibilities?.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceSection = () => {
  return (
    <section className="portfolio-section portfolio-experience" aria-labelledby="experience-heading">
      <header className="portfolio-section-header">
        <p className="section-eyebrow">Background</p>
        <h2 id="experience-heading">Experience &amp; Education</h2>
      </header>
      <VerticalTimeline lineColor="#e2e8f0">
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Data Scientist"}
          shortDesc={"Suniksha Technologies LLC · Texas, USA"}
          date={"Mar 2026 – Present"}
          keyResponsibilities={[
            "Building an AI-powered contract review application with Claude, MCP, Python, and Streamlit to analyze contracts and Excel-based requirements and generate structured review outputs.",
            "Developed an MCP-enabled data service exposing pharmaceutical operational data to ground contract analysis in internal business context.",
            "Designing prompts, context strategies, validation rules, and structured outputs for multi-document contract analysis.",
            "Developing Azure Synapse pipelines and SQL transformations for inventory, dispense status, patient demographics, and enhanced services reporting.",
            "Modernizing stored-procedure-based processing into SQL workflows using CTEs and dimensional data models across patient, provider, prescription, and operational datasets.",
            "Automated daily monitoring of production data jobs to identify pipeline failures and operational issues."
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Senior ML Engineer"}
          shortDesc={"Beautiful Code LLC · Texas, USA"}
          date={"Nov 2024 – Feb 2026"}
          keyResponsibilities={[
            "Built and productionized ML pipelines for reactivation, retargeting, and prospecting across an enterprise advertising platform.",
            "Developed SQL-based feature extraction from BigQuery and maintained Keras training workflows orchestrated with Kubeflow Pipelines and deployed on Vertex AI.",
            "Transformed product-defined audience configurations into training, deployment, and inference pipelines integrating historical data with real-time behavioral events.",
            "Supported ML-powered audience generation from incoming activity streams and historical behavior, with user activity persisted in Bigtable.",
            "Contributed across the ML product lifecycle, from React audience configuration to training, inference, and monitoring, alongside applied scientists and platform engineers.",
            "Explored Generative AI, RAG, MCP, and agent-based architectures for Ad Tech use cases."
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Technical Lead / Engineering Lead"}
          shortDesc={"Beautiful Code LLC · Texas, USA"}
          date={"Jun 2023 – Oct 2024"}
          keyResponsibilities={[
            "Led a three-person engineering team building Growthy, owning feature delivery, technical decisions, work allocation, and production releases.",
            "Built React and TypeScript product experiences and contributed to Supabase schemas, application logic, integrations, and deployments.",
            "Developed React applications enabling enterprise ML platform users to configure audience criteria and initiate downstream ML processes.",
            "Developed backend features with Go, BigQuery, Pub/Sub, and Kubernetes for audience management and processing."
          ]}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#eff4ff", color: "#1e40af" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Master of Engineering, Artificial Intelligence
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Cincinnati · Ohio, USA
          </h4>
          <p className="experience-date">Aug 2022 – Dec 2023</p>
          <p>GPA: 3.92</p>
        </VerticalTimelineElement>
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Senior Software Engineer"}
          shortDesc={"Beautiful Code LLP · Hyderabad, India"}
          date={"May 2021 – Jul 2022"}
          keyResponsibilities={[
            "Owned the React frontend for a production SaaS platform, independently driving feature development, maintenance, and production releases.",
            "Built React and TypeScript applications with reusable components, state management, API integrations, and data-driven interfaces.",
            "Owned features from requirements and design through implementation, testing, deployment, and production support."
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Software Engineer"}
          shortDesc={"Beautiful Code LLP · Hyderabad, India"}
          date={"Jun 2019 – May 2021"}
          keyResponsibilities={[
            "Developed production React and JavaScript applications for enterprise campaign, audience management, and internal business platforms.",
            "Built reusable UI components, application screens, state management, API integrations, and data-driven interfaces across large React applications.",
            "Contributed API response transformations, application logic, and backend integration support."
          ]}
        />
        <ExperienceCard
          icon={<WorkIcon />}
          title={"Associate Engineer"}
          shortDesc={"Kony IT Professional Services Ltd · Hyderabad, India"}
          date={"Jun 2018 – Jun 2019"}
          keyResponsibilities={[
            "Developed customer-facing enterprise banking features and backend API integrations for deposits, transactions, and account management."
          ]}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#eff4ff", color: "#1e40af" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology, Computer Science &amp; Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jawaharlal Nehru Technological University Hyderabad · Telangana, India
          </h4>
          <p className="experience-date">Aug 2015 – May 2019</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#eff4ff", color: "#1e40af" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceSection;
