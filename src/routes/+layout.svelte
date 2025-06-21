<script lang="ts">
  import "../app.css";
  import Experience from "./experience.svelte";
  let { children } = $props();
</script>

<span class="space-10"></span>
<div class="flex flex-col items-center justify-center">
  <div class="box-border size-1/2 content-center basis-sm font-sans pt-20">
    <div class="m-20"></div>
    {@render children()}
    <div class="m-20"></div>
    <Experience />
  </div>
</div>
