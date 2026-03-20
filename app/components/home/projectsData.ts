export type Project = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
  iconSrc: string;
};

export const projects: Project[] = [
  {
    title: "Blockchain Voting Website",
    description:
      "A decentralized voting platform built on Solana devnet—secure, transparent, and verifiable transactions.",
    tags: ["Solana", "Web3", "Devnet", "Smart Contracts"],
    iconSrc: "/next.svg",
  },
  {
    title: "Amazon Sentiment Analysis",
    description:
      "Scrape reviews, analyze sentiment, and predict feedback using ML models like Random Forest and Linear Regression.",
    tags: ["Web Scraping", "Sentiment", "ML", "Data Analysis"],
    iconSrc: "/globe.svg",
  },
  {
    title: "Analytics Dashboard Concept",
    description:
      "A clean, interactive dashboard blueprint for turning raw data into decisions—filters, KPIs, and trend storytelling.",
    tags: ["Dashboards", "KPIs", "UX", "Insights"],
    iconSrc: "/file.svg",
  },
  {
    title: "Automation & Data Pipelines",
    description:
      "Workflow automation ideas for reliable data ingestion, cleaning, and repeatable analysis runs.",
    tags: ["Pipelines", "Automation", "Quality", "Repeatability"],
    iconSrc: "/window.svg",
  },
];

