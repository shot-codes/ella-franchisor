<script lang="ts">
  import { page } from "$app/stores";
</script>

<div
  class=" fixed flex h-[calc(100vh-160px)] w-[260px] flex-col justify-between text-text-minor"
>
  <ul class="flex flex-col space-y-2">
    <li>
      <a class:active={$page.url.pathname == "/"} href="/">
        <svg class="mb-[1px]" width="19" height="19" viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M224 115.5V208a16.1 16.1 0 0 1-8.4 14.1a15.3 15.3 0 0 1-7.6 1.9h-48a8 8 0 0 1-8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-8 8H48a15.9 15.9 0 0 1-12-5.4a16.9 16.9 0 0 1-4-11v-92.1a16 16 0 0 1 5.2-11.8l80-72.7a16 16 0 0 1 21.6 0l80 72.7a16 16 0 0 1 5.2 11.8Z"
          /></svg
        >
        <span>Home</span>
      </a>
    </li>
    <li>
      <a class:active={$page.url.pathname == "/menus"} href="/menus">
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

  <ul
    class="flex flex-col space-y-2 border-t-2 border-base-300 pt-5 dark:border-base_dark-700"
  >
    <li>
      <a class:active={$page.url.pathname == "/settings"} href="/settings">
        <svg width="22" height="22" viewBox="0 0 512 512"
          ><path
            d="M32 376h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32"
            fill="currentColor"
          /><path
            d="M32 240h91.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32H196.65c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32"
            fill="currentColor"
          /><path
            d="M32 104h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32"
            fill="currentColor"
          /></svg
        >
        <span>Settings</span>
      </a>
    </li>
    <li>
      <a class:active={$page.url.pathname == "/profile"} href="/profile">
        <svg width="22" height="22" viewBox="0 0 24 24"
          ><g fill="none" fill-rule="evenodd"
            ><path
              d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
            /><path
              fill="currentColor"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM8.5 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0Zm-3.222 7.84C6.927 14.992 9.335 14 12 14s5.073.992 6.722 2.34A7.993 7.993 0 0 1 12 20a7.993 7.993 0 0 1-6.722-3.66Z"
            /></g
          ></svg
        >
        <span>Profile</span>
      </a>
    </li>
  </ul>
</div>

<style lang="postcss">
  a {
    @apply flex w-full items-center space-x-4 rounded-lg p-2 px-4 ring-primary-200 hover:ring-1 dark:text-text_dark-minor dark:ring-base_dark-800;
  }

  .active {
    @apply bg-primary-200 font-bold text-text-major dark:bg-base_dark-750 dark:text-text_dark-accent;
  }

  .active svg {
    @apply text-text-major dark:text-text_dark-accent;
  }
</style>
