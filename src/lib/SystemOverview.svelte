<script lang="ts">
  import { onMount } from "svelte";

  const diagramPath = "/system_overview.mmd";
  const diagramId = "system-overview-diagram";
  let svgMarkup = "";
  let errorMessage = "";

  onMount(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [{ default: mermaid }, definition] = await Promise.all([
          import("mermaid"),
          fetch(diagramPath).then((response) => {
            if (!response.ok) {
              throw new Error(`Unable to load ${diagramPath}`);
            }
            return response.text();
          }),
        ]);

        if (cancelled) {
          return;
        }

        mermaid.initialize({ startOnLoad: false, theme: "neutral" });
        const { svg } = await mermaid.render(diagramId, definition);
        if (!cancelled) {
          svgMarkup = svg;
        }
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          errorMessage = "Diagram unavailable right now.";
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  });
</script>

{#if svgMarkup}
  <div class="w-full h-full flex items-center justify-center bg-base-100" aria-hidden="true">
    <div class="w-full h-full max-h-60 max-w-full overflow-hidden">
      {@html svgMarkup}
    </div>
  </div>
{:else if errorMessage}
  <p class="text-xs text-center text-error">{errorMessage}</p>
{/if}
