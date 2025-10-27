<script lang="ts">
  import SystemOverview from "$lib/SystemOverview.svelte";
</script>

<div class="max-w-6xl mx-auto px-4 py-10">
  <p class="text-base color-prominent">Selected Projects</p>

  <div
    class="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    style="grid-auto-rows: 1fr;"
  >
    <div class="card bg-base-100 shadow-md dark:shadow-neutral">
      <a
        href="https://www.github.com/sriram-rao/rush/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure class="h-40 overflow-hidden bg-white">
          <img
            src="rush.png"
            class="w-full h-full object-cover"
            alt="Workflow engine"
          />
        </figure>
      </a>
      <div class="card-body">
        <p class="text-sm color-prominent">Rush</p>
        <p class="text-sm color-content">
          Lightweight, extensible workflow manager in Python with JSON-based job
          definitions. Built for rapid prototyping of batch pipelines and
          internal tools.
        </p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md dark:shadow-neutral">
      <a
        href="https://github.com/ucisharadlab/simulation_driver"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure class="h-40 overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="fmc_architecture.png"
            alt="Simulation Driver"
          />
        </figure>
      </a>
      <div class="card-body">
        <p class="text-sm color-prominent">GenIE</p>
        <p class="text-sm color-content">
          PostgreSQL plugin for implicit invocation of external data generators
          via UDFs. Lets queries call tools seamlessly as if they were native
          functions.
        </p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md dark:shadow-neutral">
      <div class="card-body">
        <a class="link link-neutral color-prominent" href="#"
          >www.sriramrao.com</a
        >
        <p class="text-sm color-content">
          Personal site built with Svelte and TypeScript. Designed for
          minimalism, speed, and full control over layout, animations, and
          content.
        </p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md dark:shadow-neutral">
      <a
        href="https://github.com/sriram-rao/diarycard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure class="h-40 overflow-hidden">
          <img
            src="cards_dark.png"
            class="w-full h-full object-cover object-top"
            alt="Mood Journal App"
          />
        </figure>
      </a>
      <div class="card-body">
        <p class="text-sm color-prominent">
          <span>Diary Card</span>
          <a href="/blog/diarycard" class="link text-xs color-content"
            >(Read why I built this)</a
          >
        </p>

        <p class="text-sm color-content">
          An iOS app to log my daily mood measures, tailor-made to my specific
          use cases, behaviour and preferences.
        </p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md dark:shadow-neutral">
      <a
        href="https://github.com/sriram-rao/job-assistant"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure class="h-40 overflow-hidden bg-white/60">
          <SystemOverview />
        </figure>
      </a>
      <div class="card-body">
        <a
          class="link link-neutral color-prominent"
          href="https://github.com/sriram-rao/job-assistant"
          target="_blank"
          rel="noopener noreferrer"
          >Code/Job Assistant</a
        >
        <p class="text-sm color-content">
          CLI tooling that rewrites resumes, cover letters, and LinkedIn copy
          using LLM prompts tuned to each job post. Faster than waiting for
          recruiters—
          <a href="/blog/job-assistant" class="link text-xs color-content"
            >read how I vibe-coded it</a
          >.
        </p>
      </div>
    </div>
  </div>
</div>
