<script lang="ts">
  import { getUser, signOut } from "@lucia-auth/sveltekit/client";
  import { invalidateAll } from "$app/navigation";
  import { fade } from "svelte/transition";
  import logo from "$lib/assets/images/ella-logo.svg";
  import darkLogo from "$lib/assets/images/ella-logo-dark.svg";
  import { browser } from "$app/environment";

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
  class="fixed flex h-[86px] w-full place-content-between items-center bg-base-100 bg-opacity-30 p-3 px-12 shadow backdrop-blur-md dark:bg-base_dark-900 dark:bg-opacity-80"
>
  <button
    class="text-text-minor dark:text-text_dark-minor lg:hidden"
    on:click={() => {
      showSidebar = !showSidebar;
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24"
      ><path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h7"
      /></svg
    >
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
