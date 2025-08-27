<script lang="ts">
  import "../app.css";
  import Menu from "./menu.svelte";
  let { children } = $props();
</script>

<div class="flex flex-col mx-8 md:mx-24 lg:mx-96">
  <Menu />
  <div class="font-sans pt-10 antialiased">
    {@render children()}
  </div>
</div>
