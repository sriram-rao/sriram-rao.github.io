<script lang="ts">
  import * as data from "$lib/data";
  import type { Experience } from "$lib/data";
</script>

{#snippet work(exp: Experience)}
  <div
    class="mb-8 antialiased p-4 border border-gray-200 dark:border-gray-700 rounded-xl"
  >
    <span class="flex flex-row justify-between color-prominent">
      <span class="text-base">{exp.position}</span>
      <span class="text-sm text-right float-right">
        {exp.company}
      </span>
    </span>
    <span class="flex flex-row gap-5 justify-between text-sm color-content">
      <p class="text-sm color-content">
        {exp.summary}
      </p>
      <span class="text-sm md:text-nowrap text-right float-right">
        {exp.start} to {exp.end}
      </span>
    </span>
  </div>
{/snippet}

<div class="flex place-content-center items-center">
  <div class="box-border">
    <p class="mb-5 text-base prose color-prominent">Work Experience</p>
    <p class="mb-5 text-sm color-content">Industry</p>
    {#each data.industryExperience as experience}
      {@render work(experience)}
    {/each}
    <p class="mb-5 text-sm color-content">Academia</p>
    {#each data.researchExperience as experience}
      {@render work(experience)}
    {/each}
  </div>
</div>
