<script lang="ts">
  import { getUser, signOut } from "@lucia-auth/sveltekit/client";
  import { invalidateAll } from "$app/navigation";
  import { slide } from "svelte/transition";

  const user = getUser();
  const username = $user?.username;
  const email = $user?.email;
  const avatar_url = $user?.avatar_url;

  let settingsExpanded = false;
</script>

<nav
  class="fixed flex h-[64px] w-full items-center justify-end space-x-4 bg-base-100 bg-opacity-30 p-3  px-6 shadow backdrop-blur-md"
>
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
    transition:slide
    class="absolute right-3 top-14 z-10 flex w-[240px] rounded border border-base-300 bg-base-50 shadow-md"
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
      <span class="font-bold text-base-800">{username}</span>
      <span class="text-base-500">{email}</span>
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
