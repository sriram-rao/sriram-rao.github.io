<script lang="ts">
  export let text: string;
  export let href: string = "#";
  export let style: string = "btn-ghost";
  export let reset: string = "false";
</script>

<a
  class={reset === "true" || reset === "yes"
    ? style
    : "btn btn-soft {style} btn-sm rounded-full " + style}
  {href}
  target="_blank"
  rel="noopener noreferrer"
  >{text}
</a>
