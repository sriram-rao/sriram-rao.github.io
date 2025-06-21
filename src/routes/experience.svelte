<script lang="ts">
  import * as data from "$lib/data";
  import type { Experience } from "$lib/data";
</script>

{#snippet work(exp: Experience)}
  <div
    class="mb-8 antialiased p-4 w-xl border border-gray-200 dark:border-gray-700 rounded-xl"
  >
    <span class="text-md">{exp.position}</span>
    <span class="text-sm text-gray-600 dark:text-gray-400 float-right">
      {exp.start} - {exp.end}
    </span>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      {exp.company}
    </p>
  </div>
{/snippet}

<div class="flex items-center m-8">
  <div class="box-border">
    <p class="mb-5 text-md prose prose-zinc dark:prose-dark">Work Experience</p>
    <p class="mb-5 text-sm text-gray-600 dark:text-gray-400">Industry</p>
    {#each data.industryExperience as experience}
      {@render work(experience)}
    {/each}
    <p class="mb-5 text-sm text-gray-600 dark:text-gray-400">Research</p>
    {#each data.researchExperience as experience}
      {@render work(experience)}
    {/each}
  </div>
</div>
