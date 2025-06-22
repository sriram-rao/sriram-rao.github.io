<script lang="ts">
  import "../app.css";
  import Experience from "./experience.svelte";
  import Skills from "./skills.svelte";
  import Projects from "./projects.svelte";
  let { children } = $props();
</script>

<span class="space-10"></span>
<div class="flex flex-col items-center justify-center">
  <div
    class="box-border size-1/2 content-center basis-sm font-sans pt-20 antialiased"
  >
    <div class="m-10"></div>
    {@render children()}
    <div class="m-15"></div>
    <Projects />
    <div class="m-15"></div>
    <Experience />
    <div class="m-10"></div>
    <Skills />
  </div>
</div>
