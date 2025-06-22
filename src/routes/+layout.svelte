<script lang="ts">
  import "../app.css";
  import Experience from "./experience.svelte";
  import Skills from "./skills.svelte";
  import Projects from "./projects.svelte";
  let { children } = $props();
</script>

<div class="flex flex-row sticky top-0 z-50 bg-base-100">
  <ul class="menu menu-horizontal rounded-box">
    <li><a href="#">Home</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#skills">Skills</a></li>
  </ul>
</div>

<div class="flex flex-col mx-8 md:mx-24 lg:mx-96">
  <div class="font-sans pt-20 antialiased">
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
