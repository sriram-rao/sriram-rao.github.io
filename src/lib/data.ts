export type Experience = {
  company: string;
  position: string;
  start: string;
  end: string;
  summary?: string;
  description: string[];
};

export const industryExperience: Experience[] = [
  {
    company: "University of California, Irvine",
    position: "Graduate Researcher",
    start: "Sep 2020",
    end: "Sep 2024",
    summary: "Latency-aware data management and distributed systems research",
    description: [
      "Designed a PostgreSQL plugin that balances latency and cost for ML forecast workloads by scheduling compute across live and predictive queries.",
      "Developed a framework to invoke environmental simulators (e.g., HYSPLIT) implicitly during analysis so domain scientists could run models inline.",
      "Collaborated with civil engineers, chemists, and physicists to build backend systems for IoT networks monitoring prescribed fires.",
      "Authored a lightweight DAG workflow runner in Python to orchestrate research pipelines (open-sourced as sriram-rao/rush).",
    ],
  },
  {
    company: "Dremio",
    position: "Software Engineer - PhD Intern",
    start: "Jun 2022",
    end: "Sep 2022",
    summary: "Lakehouse query performance through progressive planning",
    description: [
      "Prototyped progressive query-response plans in Apache Calcite + Iceberg so analysts received partial answers while scans continued.",
      "Improved planner row-count estimates by feeding runtime statistics back into the cost model for subsequent queries.",
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    start: "Jun 2016",
    end: "Sep 2020",
    summary: "Data platform. Large-scale data-intensive systems",
    description: [
      "Owned Bing Ads experimentation framework processing billions of ad-serving requests daily to compute metrics for trigger-string experiments in under 20 minutes.",
      "Rebuilt an ETL workflow manager that coordinated 100+ pipelines; cut deployment time from an hour to under five seconds.",
      "Led a Spark Streaming POC that delivered A/B experiment results 3x faster than the previous batch system.",
      "Refactored an Azure-hosted API cache layer with aspect-oriented patterns, eliminating repetitive configuration code.",
      "Reviewed 40+ designs and 100+ code changes to keep data platform services reliable at scale.",
    ],
  },
  {
    company: "Microsoft",
    position: "Intern",
    start: "May 2015",
    end: "Jun 2016",
    summary: "Kusto, MongoDB, column-store: performance analysis",
    description: [
      "Benchmarked Kusto, MongoDB, and a column-store under stress; mapped each engine to product workloads to guide migrations.",
      "Enabled a shift from legacy OLAP cubes to columnar storage by proving it could shrink ETL turnaround from 10 days to 1 hour.",
    ],
  },
  {
    company: "Bilent Services",
    position: "Intern",
    start: "May 2014",
    end: "Jul 2014",
    summary: "Web dev: AngularJS API, parallax scroll UI",
    description: [
      "Built an AngularJS API layer for a services marketplace and paired it with a parallax-scrolling marketing site.",
      "Integrated responsive front-end components so the single-page experience worked cleanly on desktop and mobile.",
    ],
  },
];

export const researchExperience: Experience[] = [
  {
    company: "University of California, Irvine",
    position: "Teaching Assistant",
    start: "Sep 2020",
    end: "Dec 2024",
    summary: "Instruction for large-scale data management and programming courses",
    description: [
      "Facilitated large-class discussions, assignments, and office hours that reinforced database concepts and practical SQL debugging.",
      "Coordinated lecture materials, assessments, and lab support for cohorts of 200+ students; student evaluations averaged 4/5.",
    ],
  },
];
