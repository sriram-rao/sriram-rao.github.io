<script lang="ts">
  let { children } = $props();
</script>

<div class="blog-content">
  {@render children()}
</div>

<style>
  @import "tailwindcss";

  :global(.blog-content h1) {
    @apply text-2xl font-bold mt-4 mb-8;
  }

  :global(.blog-content h3) {
    @apply text-lg font-bold mt-8 mb-4;
  }

  :global(.blog-content h4) {
    @apply text-base italic mt-2 mb-2;
  }

  :global(.blog-content ol) {
    @apply list-decimal list-inside mb-[1em] pl-[2.5ch];
  }

  :global(.blog-content ul) {
    @apply list-disc list-outside mb-[1em] pl-[2.5ch];
  }

  :global(.blog-content p) {
    @apply mb-[1em];
  }

  :global(.blog-content) {
    @apply mb-[15em];
  }

  :global(.blog-content .crop-bottom) {
    margin-top: 2em;
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: top;
  }
</style>
