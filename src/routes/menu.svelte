<script lang="ts">
  import LinkTo from "./linkto.svelte";
  import { onMount } from "svelte";

  let isDark = $state(false);

  onMount(() => {
    const saved = localStorage.getItem("theme");
    isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
  });

  function toggleTheme() {
    isDark = !isDark;
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
  }
</script>

<div class="flex flex-row sticky top-0 z-50">
  <div class="dropdown md:hidden m-4">
    <div tabindex="0" role="button" class="btn">Menu</div>
    <ul class="menu dropdown-content menu-compact rounded-box bg-base-100">
      <li><a href="/">Home</a></li>
      <li><a href="/#experience">Experience</a></li>
      <li><a href="/#skills">Skills</a></li>
      <li>
        <a href="/blog" class="text-success">Blog</a>
      </li>
      <li>
        <LinkTo
          text="LinkedIn"
          href="https://www.linkedin.com/in/sriram-rao/"
          style="text-info"
          reset="true"
        />
      </li>
      <li>
        <button onclick={toggleTheme} class="btn btn-ghost btn-sm">
          {isDark ? "☀️" : "🌙"}
        </button>
      </li>
    </ul>
  </div>

  <div class="hidden md:flex bg-base-100 w-full">
    <ul class="menu md:menu-horizontal rounded-box bg-base-100">
      <li><a href="/">Home</a></li>
      <li><a href="/#experience">Experience</a></li>
      <li><a href="/#skills">Skills</a></li>
      <li>
        <a href="/blog" class="text-success">Blog</a>
      </li>
      <li>
        <LinkTo
          text="LinkedIn"
          href="https://www.linkedin.com/in/sriram-rao/"
          style="text-info"
          reset="true"
        />
      </li>
      <li>
        <button onclick={toggleTheme} class="btn btn-ghost btn-sm">
          {isDark ? "☀️" : "🌙"}
        </button>
      </li>
    </ul>
  </div>
</div>
