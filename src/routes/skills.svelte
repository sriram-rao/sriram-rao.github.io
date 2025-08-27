<script lang="ts">
  // This script block is intentionally left empty as no specific logic is needed for this component.
  let skills = {
    "Core Languages": [
      "Python",
      "C#",
      "Java",
      "C++",
      "C",
      "Ruby",
      "Lisp",
      "Prolog",
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
    ],
    "Compute Platforms": [
      "Spark",
      "Trino",
      "Athena",
      "Clickhouse",
      "ETL",
      "Query Engines",
      "Calcite",
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
    ],
    "UI/UX": ["HTML", "CSS", "JavaScript", "TypeScript", "Svelte", "SwiftUI"],
    "Automation & Infrastructure": [
      "Bash",
      "Powershell",
      "Lua",
      "Docker",
      "Azure",
      "AWS",
      "CI/CD",
      "Custom IaC",
    ],
  };
</script>

<div class="flex items-center m-8">
  <div class="box-border">
    <span class="text-base prose color-prominent">Skills </span>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5 -mx-4 w-[calc(100%+6rem)]"
    >
      {#each Object.entries(skills) as [skill, languages]}
        <div class="card shadow-md dark:shadow-neutral">
          <div class="card-body">
            <span class="text-sm text-center color-prominent">
              {skill}
            </span>
            <span class="flex flex-wrap gap-1 justify-center">
              {#each languages as language}
                <span
                  class="badge badge-ghost dark:bg-[#2f3640] text-base-content"
                  >{language}</span
                >
              {/each}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
