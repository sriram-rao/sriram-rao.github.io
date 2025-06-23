<script lang="ts">
  import LinkTo from "./linkto.svelte";
</script>

<div class="flex flex-row place-content-center items-center gap-10">
  <p class="text-base color-prominent">
    Connect with me<br />
    <span class="text-sm color-subhead">Are you hiring?</span>
  </p>

  <LinkTo text="Email" href="mailto:reach@sriramrao.com" style="btn-accent" />
  <LinkTo
    text="LinkedIn"
    href="https://www.linkedin.com/in/sriram-rao"
    style="btn-info"
  />

  <LinkTo
    text="GitHub"
    href="https://www.github.com/sriram-rao/"
    style="btn-default"
  />
</div>
