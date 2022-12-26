<script lang="ts">
  import { page } from "$app/stores";
</script>

<div
  class=" fixed flex h-[calc(100vh-160px)] w-[260px] flex-col text-text-light"
>
  <a class:active={$page.url.pathname == "/"} href="/" class="p-2 px-4">Home</a>
  <a
    class:active={$page.url.pathname == "/menus"}
    href="/menus"
    class="p-2 px-4">Menus</a
  >
</div>

<style lang="postcss">
  .active {
    @apply rounded-md bg-primary-200 font-bold text-text-dark;
  }
</style>
