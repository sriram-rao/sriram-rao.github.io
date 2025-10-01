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
    summary: "Data management and distributed systems",
    description: [
      "Designed database plugin; balances latency and resource costs by allocating compute between current and decision-tree-forecast loads.",
      "Developed framework to call data generators implicitly during analysis.",
      "Integrated simulator into PostgreSQL for no-setup follow-up.",
      "Created a pipeline execution system for workflows defined as directed acyclic graphs of tasks. (On GitHub as sample.)",
    ],
  },
  {
    company: "Dremio",
    position: "Software Engineer - PhD Intern",
    start: "Jun 2022",
    end: "Sep 2022",
    summary: "Data lake query performance gain through better statistics",
    description: [],
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    start: "Jun 2016",
    end: "Sep 2020",
    summary: "Data platform. Large-scale data-intensive systems",
    description: [],
  },
  {
    company: "Microsoft",
    position: "Intern",
    start: "May 2015",
    end: "Jun 2016",
    summary: "Kusto, MongoDB, column-store: performance analysis",
    description: [],
  },
  {
    company: "Bilent Services",
    position: "Intern",
    start: "May 2014",
    end: "Jul 2014",
    summary: "Web dev: AngularJS API, parallax scroll UI",
  },
];

export const researchExperience: Experience[] = [
  {
    company: "University of California, Irvine",
    position: "Teaching Assistant",
    start: "Sep 2020",
    end: "Dec 2024",
    summary: "Data management, databases, programming languages",
    description: [],
  },
];
