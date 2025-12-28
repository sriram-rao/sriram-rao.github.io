<script lang="ts">
  // This script block is intentionally left empty as no specific logic is needed for this component.
  let skills = {
    "Core Languages": [
      "Python",
      "C#",
      "Java",
      "C++",
      "C",
      "Swift",
      "Ruby",
      "Lisp",
      "Prolog",
      "SQL",
    ],

    Databases: [
      "Big Data",
      "SQL",
      "NoSQL",
      "MongoDB",
      "Redis",
      "OLAP",
      "OLTP",
      "PostgreSQL",
      "Column stores",
      "Iceberg",
      "InfluxDB",
      "Trino",
    ],
    "Compute Platforms": [
      "Spark",
      "Trino",
      "Athena",
      "Clickhouse",
      "ETL",
      "Query Engines",
      "Calcite",
      "Spark SQL",
      "Apache Calcite",
      "Distributed DAGs",
      "Progressive Results",
    ],
    Backend: [
      ".NET",
      "Spring",
      "Flask",
      "SvelteKit",
      "Caching",
      "REST",
      "Microservices",
      "Architecture",
      "Distributed Systems",
      "Rails",
      "AOP",
    ],
    "UI/UX": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Svelte",
      "SwiftUI",
      "TailwindCSS",
      "daisyUI",
      "Grafana",
    ],
    "Automation & Infrastructure": [
      "Bash",
      "Powershell",
      "Lua",
      "Docker",
      "Azure",
      "AWS",
      "CI/CD",
      "Custom IaC",
      "ML-assisted Tooling",
    ],
    "Data Science": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "SciPy",
      "Scikit-Learn",
      "GeoPandas",
      "Shapely",
      "Statsmodels",
      "XGBoost",
    ],
  };
</script>

<div class="max-w-6xl mx-auto px-4 py-10">
  <p class="text-base color-prominent">Skills</p>

  <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {#each Object.entries(skills) as [skill, languages]}
      <div class="card bg-base-100 shadow-md dark:shadow-neutral overflow-hidden">
        <div class="bg-base-200 dark:bg-[#2f3640] px-4 py-3">
          <h3 class="text-sm font-medium color-prominent">
            {skill}
          </h3>
        </div>
        <div class="p-4">
          <div class="flex flex-wrap gap-2">
            {#each (() => {
              const sorted = [...languages].sort((a, b) => a.length - b.length);
              const groups = [[], [], []];
              sorted.forEach((item, i) => {
                groups[i % 3].push(item);
              });
              return [...groups[0], ...groups[1], ...groups[2]];
            })() as language}
              <span class="badge badge-ghost dark:bg-[#2f3640] text-base-content">
                {language}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
