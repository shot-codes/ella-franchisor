<script lang="ts">
  import { page } from "$app/stores";
</script>

<div
  class=" fixed flex h-[calc(100vh-160px)] w-[260px] flex-col space-y-2 text-text-minor"
>
  <a class:active={$page.url.pathname == "/"} href="/" class="p-2 px-4">Home</a>
  <a
    class:active={$page.url.pathname == "/menus"}
    href="/menus"
    class="p-2 px-4">Menus</a
  >
</div>

<style lang="postcss">
  a {
    @apply rounded-lg ring-primary-200 hover:ring-1 dark:text-text_dark-minor dark:ring-base_dark-800;
  }

  .active {
    @apply bg-primary-200 font-bold text-text-major dark:bg-base_dark-800 dark:text-text_dark-accent;
  }
</style>
