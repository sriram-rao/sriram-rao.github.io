<script lang="ts">
  import type { Experience } from "$lib/data";

  export let exp: Experience;

  let open = false;
</script>

<div
  class="mb-8 antialiased p-4 border border-gray-200 dark:border-gray-700 rounded-xl"
>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row justify-between color-prominent">
      <span class="text-base">{exp.position}</span>
      <span class="text-sm text-right float-right">
        {exp.company}
      </span>
    </div>
    <div class="flex flex-row gap-5 justify-between text-sm color-content">
      <p class="text-sm color-content">
        {exp.summary}
      </p>
      <span class="text-sm md:text-nowrap text-right float-right">
        {exp.start} to {exp.end}
      </span>
    </div>
  </div>
  {#if exp.description.length}
    <div class="mt-3">
      <button
        type="button"
        class="flex items-center gap-1 text-xs font-medium text-base-content/70 hover:text-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-content/30 transition-colors"
        aria-expanded={open}
        on:click={() => (open = !open)}
      >
        <span>{open ? "Hide highlights" : "Show highlights"}</span>
        <span
          aria-hidden="true"
          class="inline-flex h-3 w-3 items-center justify-center rounded-full border border-current text-[8px] leading-none transition-transform"
          style:transform={open ? "rotate(45deg)" : "rotate(0deg)"}
        >
          +
        </span>
      </button>
      <div
        class="mt-2 overflow-hidden transition-all duration-300 ease-out"
        style:max-height={open ? "500px" : "0px"}
        style:opacity={open ? 1 : 0}
        aria-hidden={!open}
      >
        <ul class="list-disc list-inside space-y-1 text-sm color-content">
          {#each exp.description as detail}
            <li>{detail}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>
