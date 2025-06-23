<script lang="ts">
  import LinkTo from "./linkto.svelte";
</script>

<div
  class="md:flex md:flex-row place-content-center items-center gap-3 md:gap-10"
>
  <div class="mb-3">
    <p class="text-base color-prominent">Connect with me</p>
    <span class="text-sm color-subhead">Are you hiring?</span>
  </div>

  <span class="flex place-content-center justify-between md:gap-5">
    <LinkTo
      text="Email"
      href="mailto:reach@sriramrao.com"
      style="btn-secondary"
    />
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

    <LinkTo text="Résumé" href="/Sriram_Rao_Resume.pdf" style="btn-error" />
  </span>
</div>
