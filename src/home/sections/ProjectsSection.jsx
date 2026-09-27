import React from "react";
import { ProjectCard } from "../components";

const ProjectsSection = () => (
  <section className="portfolio-section" aria-labelledby="projects-heading">
    <header className="portfolio-section-header">
      <h2 id="projects-heading">Personal projects</h2>
      <p>Things I build outside of work to explore AI agents and machine learning.</p>
    </header>
    <div className="featured-projects-grid">
      <ProjectCard
        imgSrc="fin_agent_adk.png"
        category="AI agents · Personal finance"
        title="Personal Finance Agent"
        desc="I built this personal project to explore how AI agents can help make sense of spending. It processes bank statement PDFs, classifies transactions, and generates spending summaries and budgeting insights."
        stack="Google ADK / Vertex AI / LLM workflows"
        link="https://github.com/pbpranavk/finance_agent_adk"
        linkTxt="View on GitHub"
      />
      <ProjectCard
        imgSrc="fraud_detect.png"
        category="Machine learning · Fraud detection"
        title="Fraud Detection System"
        desc="A hands-on project exploring the full ML lifecycle through fraud detection. I built a pipeline for transaction classification and anomaly detection, covering feature engineering, training, evaluation, deployment, and inference."
        stack="Keras / Vertex AI / Kubeflow Pipelines"
        link="https://github.com/pbpranavk/fraud_detect"
        linkTxt="View on GitHub"
      />
    </div>
  </section>
);

export default ProjectsSection;
