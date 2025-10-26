<script lang="ts">
  import * as data from "$lib/data";
  import ExperienceCard from "$lib/ExperienceCard.svelte";
</script>

<div class="flex place-content-center items-center">
  <div class="box-border">
    <p class="mb-5 text-base prose color-prominent">Work Experience</p>
    {#each data.industryExperience as experience (experience.company + experience.position + experience.start)}
      <ExperienceCard exp={experience} />
    {/each}
    <p class="mb-5 text-sm color-content">Academia</p>
    {#each data.researchExperience as experience (experience.company + experience.position + experience.start)}
      <ExperienceCard exp={experience} />
    {/each}
  </div>
</div>
