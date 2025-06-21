export type Experience = {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string[];
};

export const industryExperience: Experience[] = [
  {
    company: "Dremio",
    position: "Software Engineer - PhD Intern",
    start: "Jun 2022",
    end: "Jun 2022",
    description: [
      "Devised a proof-of-concept (POC) to progressively improve " +
        "query response in data lakes. Familiarized with Calcite and Iceberg." +
        "Improved row-count estimation in query planning via accurate statistics " +
        "observed in previous executions. (From LEO by https://www.vldb.org/conf/2001/P019.pdf Markl V., VLDB 2001)",
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    start: "Jun 2016",
    end: "Sep 2020",
    description: "",
  },
  {
    company: "Microsoft",
    position: "Intern",
    start: "May 2015",
    end: "Jun 2016",
    description: "",
  },
  {
    company: "Bilent Services",
    position: "Intern",
    start: "May 2014",
    end: "Jul 2014",
  },
];

export const researchExperience: Experience[] = [
  {
    company: "University of California, Irvine",
    position: "Graduate Researcher",
    start: "Sep 2020",
    end: "Sep 2024",
  },
  {
    company: "University of California, Irvine",
    position: "Teaching Assistant",
    start: "Sep 2020",
    end: "Dec 2024",
  },
];
