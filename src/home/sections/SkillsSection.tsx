import React from "react";

const skillGroups = {
  "Programming": [
    "Python",
    "SQL",
    "TypeScript",
    "JavaScript",
    "Go"
  ],
  "Applied AI & ML": [
    "LLM Applications",
    "Prompt Engineering",
    "RAG",
    "AI Agents",
    "MCP",
    "Embeddings",
    "Vector Search",
    "Model Evaluation",
    "Feature Engineering",
    "Classification",
    "Deep Learning"
  ],
  "AI/ML Frameworks": [
    "Google ADK",
    "Microsoft Agent SDK",
    "LlamaIndex",
    "Keras",
    "Scikit-learn",
    "Pinecone",
    "Kubeflow"
  ],
  "Application Development": [
    "React",
    "FastAPI",
    "REST APIs",
    "Streamlit",
    "Supabase"
  ],
  "Cloud & ML Platforms": [
    "Vertex AI",
    "GCP",
    "Azure",
    "Azure Synapse",
    "AWS"
  ],
  "Data & Infrastructure": [
    "BigQuery",
    "Bigtable",
    "Redis",
    "Vector Databases",
    "Docker",
    "Kubernetes",
    "Pub/Sub",
    "Event-Driven Systems"
  ]
};

const SkillsSection = () => (
  <section className="portfolio-section" aria-labelledby="skills-heading">
    <header className="portfolio-section-header">
      <h2 id="skills-heading">Skills</h2>
    </header>
    <dl className="skills-grid">
      {Object.entries(skillGroups).map(([category, skills]) => (
        <div className="skill-category" key={category}>
          <dt>{category}</dt>
          <dd>{skills.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default SkillsSection;
