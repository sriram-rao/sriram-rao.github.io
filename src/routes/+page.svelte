<script lang="ts">
  import "../app.css";
  import Connect from "./connect.svelte";
  import Experience from "./experience.svelte";
  import Skills from "./skills.svelte";
  import Projects from "./projects.svelte";
</script>

<div class="m-10"></div>
<p class="text-base prose color-main">Sriram Rao</p>
<p class="text-sm prose color-subhead">Software Engineer</p>
<p class="mt-5 text-base prose color-subhead">
  Software engineer specializing in large-scale data management systems. Proven
  track record developing efficient, scalable backend solutions and
  collaborating to drive innovation. Expertise in distributed workflow
  orchestration, query processing, and ML-assisted automation, paired with
  strengths in cross-functional communication, teaching, and research
  partnerships to deliver complex systems that land with users.
</p>

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
