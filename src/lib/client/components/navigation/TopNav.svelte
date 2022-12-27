<script lang="ts">
  import { getUser, signOut } from "@lucia-auth/sveltekit/client";
  import { invalidateAll } from "$app/navigation";
  import logo from "$lib/assets/images/ella-logo.svg";
  import darkLogo from "$lib/assets/images/ella-logo-dark.svg";
  import { browser } from "$app/environment";
  import { fade } from "svelte/transition";

  export let showSidebar: boolean;

  const user = getUser();
  const username = $user?.username;
  const email = $user?.email;
  const avatar_url = $user?.avatar_url;

  let settingsExpanded = false;
  let isDarkMode = false;

  if (browser && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    isDarkMode = true;
  }
  if (browser) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        isDarkMode = !isDarkMode;
      });
  }
</script>

<nav
  class="fixed z-10 flex h-[86px] w-full place-content-between items-center bg-base-100 bg-opacity-30 p-3 px-12 shadow backdrop-blur-md dark:bg-base_dark-900 dark:bg-opacity-80"
>
  <button
    class="py-2 text-text-minor dark:text-text_dark-minor lg:hidden"
    on:click={() => {
      showSidebar = !showSidebar;
    }}
  >
    <div class="relative h-[32px] w-[32px]">
      {#if showSidebar}
        <svg
          class="absolute"
          in:fade={{ duration: 400, delay: 150 }}
          out:fade={{ duration: 400 }}
          width="32"
          height="32"
          viewBox="0 0 24 24"
          ><g fill="none" fill-rule="evenodd"
            ><path
              d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
            /><path
              fill="currentColor"
              d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z"
            /></g
          >
        </svg>
      {:else}
        <svg
          class="absolute"
          in:fade={{ duration: 400, delay: 150 }}
          out:fade={{ duration: 400 }}
          width="32"
          height="32"
          viewBox="0 0 24 24"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      {/if}
    </div>
  </button>

  {#if isDarkMode}
    <img src={darkLogo} class="w-16" alt="ella logo." />
  {:else}
    <img src={logo} class="w-16" alt="ella logo." />
  {/if}

  <img
    on:click={() => {
      settingsExpanded = !settingsExpanded;
    }}
    on:keypress={() => {
      settingsExpanded = !settingsExpanded;
    }}
    class="w-10 rounded-full shadow-inner hover:cursor-pointer"
    src={avatar_url}
    alt="avatar"
  />
</nav>

{#if settingsExpanded}
  <div
    transition:fade={{ duration: 100 }}
    class="fixed right-3 top-[75px] z-10 flex w-[240px] rounded border border-base-300 bg-base-50 shadow-md dark:border-base_dark-700 dark:bg-base_dark-800 dark:shadow-xl"
  >
    <button
      on:click={() => {
        settingsExpanded = false;
      }}
      class="absolute top-3 right-4 text-base-500"
    >
      <svg width="1em" height="1em" viewBox="0 0 16 16"
        ><path
          fill="currentColor"
          d="M2.22 10.78a.75.75 0 0 1 0-1.06l5.252-5.252a.75.75 0 0 1 1.06 0l5.252 5.252a.75.75 0 1 1-1.06 1.06L8.001 6.06L3.28 10.78a.75.75 0 0 1-1.06 0Z"
        /></svg
      >
    </button>
    <div class="m-6 flex w-full flex-col">
      <span class="font-bold text-text-major dark:text-text_dark-major"
        >{username}</span
      >
      <span class="text-text-minor dark:text-text_dark-minor">{email}</span>
      <button
        class="gg-btn-secondary mt-4 w-full"
        on:click={async () => {
          await signOut();
          invalidateAll();
        }}
      >
        Sign out
      </button>
    </div>
  </div>
{/if}
