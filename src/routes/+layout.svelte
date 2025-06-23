<script lang="ts">
  import "../app.css";
  import Menu from "./menu.svelte";
  import Connect from "./connect.svelte";
  import Experience from "./experience.svelte";
  import Skills from "./skills.svelte";
  import Projects from "./projects.svelte";
  let { children } = $props();
</script>

<div class="flex flex-col mx-8 md:mx-24 lg:mx-96">
  <Menu />
  <div class="font-sans pt-10 antialiased">
    <div class="m-10"></div>
    {@render children()}
    <div class="m-10"></div>
    <Connect />
    <div class="m-15"></div>
    <Projects />
    <span id="experience"></span>
    <div class="m-20"></div>
    <Experience />
    <span id="skills"></span>
    <div class="m-10"></div>
    <Skills />
    <div class="m-40"></div>
  </div>
</div>
