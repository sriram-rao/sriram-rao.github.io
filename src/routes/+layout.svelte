<script lang="ts">
  import "../app.css";
  import Experience from "./experience.svelte";
  import Skills from "./skills.svelte";
  import Projects from "./projects.svelte";
  let { children } = $props();

  let getStyle = function (style: string, newStyle: string, reset: boolean) {
    return reset ? newStyle : style + " " + newStyle;
  };
</script>

{#snippet link_to(
  text: string,
  href: string,
  style: string = "btn-ghost",
  reset: boolean = false,
)}
  <a
    class={getStyle("btn btn-soft {style} btn-sm rounded-full", style, reset)}
    {href}
    target="_blank"
    rel="noopener noreferrer"
    >{text}
  </a>
{/snippet}

<div class="flex flex-col mx-8 md:mx-24 lg:mx-96">
  <div class="flex flex-row sticky top-0 z-50 bg-base-100">
    <ul class="menu menu-horizontal rounded-box">
      <li><a href="#">Home</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li>
        {@render link_to(
          "LinkedIn",
          "https://www.linkedin.com/in/sriram-rao/",
          "text-info",
          true,
        )}
      </li>
    </ul>
  </div>

  <div class="font-sans pt-10 antialiased">
    <div class="m-10"></div>
    {@render children()}

    <div class="m-10"></div>
    <!-- Links to my stuff -->
    <div class="flex flex-row place-content-center items-center gap-10">
      <p class="text-base color-prominent">Connect with me</p>
      {@render link_to("Email", "mailto:reach@sriramrao.com", "btn-accent")}
      {@render link_to(
        "LinkedIn",
        "http://www.linkedin.com/in/sriram-rao/",
        "btn-info",
      )}
      {@render link_to(
        "GitHub",
        "https://www.github.com/sriram-rao/",
        "btn-default",
      )}
    </div>
    <!-- End: links to my stuff -->

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
