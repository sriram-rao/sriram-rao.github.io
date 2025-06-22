<script lang="ts">
  import "../app.css";
  import Experience from "./experience.svelte";
  import Skills from "./skills.svelte";
  import Projects from "./projects.svelte";
  let { children } = $props();
</script>

<span class="space-10"></span>
<div class="flex flex-col items-center justify-center">
  <ul
    class="menu menu-vertical lg:menu-horizontal rounded-box sticky top-0 z-50 bg-base-100"
  >
    <li><a href="#">Home</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#skills">Skills</a></li>
  </ul>
  <div
    class="box-border size-1/2 content-center basis-sm font-sans pt-20 antialiased"
  >
    <div class="m-10"></div>
    {@render children()}
    <div class="m-15"></div>
    <Projects />
    <span id="experience"></span>
    <div class="m-15"></div>
    <Experience />
    <span id="skills"></span>
    <div class="m-10"></div>
    <Skills />
    <div class="m-40"></div>
  </div>
</div>
