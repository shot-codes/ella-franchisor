<script lang="ts">
  import { page } from "$app/stores";
</script>

<ul
  class=" fixed flex h-[calc(100vh-160px)] w-[260px] flex-col space-y-2 text-text-minor"
>
  <li>
    <a
      class:active={$page.url.pathname == "/"}
      href="/"
      class="flex w-full items-center space-x-4 p-2 px-4"
    >
      <svg
        class="mb-[1px] text-text-minor"
        width="19"
        height="19"
        viewBox="0 0 256 256"
        ><path
          fill="currentColor"
          d="M224 115.5V208a16.1 16.1 0 0 1-8.4 14.1a15.3 15.3 0 0 1-7.6 1.9h-48a8 8 0 0 1-8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-8 8H48a15.9 15.9 0 0 1-12-5.4a16.9 16.9 0 0 1-4-11v-92.1a16 16 0 0 1 5.2-11.8l80-72.7a16 16 0 0 1 21.6 0l80 72.7a16 16 0 0 1 5.2 11.8Z"
        /></svg
      >
      <span>Home</span>
    </a>
  </li>
  <li>
    <a
      class:active={$page.url.pathname == "/menus"}
      href="/menus"
      class="flex w-full items-center space-x-4 p-2 px-4"
    >
      <svg width="19" height="19" viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="m8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88l1.41-1.41L13.41 13l1.47-1.47z"
        /></svg
      >
      <span>Menus</span>
    </a>
  </li>
</ul>

<style lang="postcss">
  a {
    @apply rounded-lg ring-primary-200 hover:ring-1 dark:text-text_dark-minor dark:ring-base_dark-800;
  }

  .active {
    @apply bg-primary-200 font-bold text-text-major dark:bg-base_dark-800 dark:text-text_dark-accent;
  }

  .active svg {
    @apply text-text-major dark:text-text_dark-accent;
  }
</style>
