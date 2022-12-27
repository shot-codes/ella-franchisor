<script lang="ts">
  import TopNav from "./TopNav.svelte";
  import SideNav from "./SideNav.svelte";
  import SideNavMobile from "./SideNavMobile.svelte";
  import { fade } from "svelte/transition";

  let showSidebar = false;
</script>

<div class="flex h-full flex-col">
  <!-- Top Nav -->
  <div class="min-h-[86px]">
    <TopNav bind:showSidebar />
  </div>

  <div class="flex flex-grow">
    <!-- Side Nav -->
    <div class="hidden min-w-[300px] p-10 pr-0 lg:block">
      <SideNav />
    </div>

    <!-- Mobile Side Nav -->
    {#if showSidebar}
      <div
        transition:fade={{ duration: 250, delay: 50 }}
        class="absolute w-full lg:hidden"
      >
        <div class="fixed top-0 right-0 h-full w-full dark:bg-[#181818]" />
        <SideNavMobile bind:showSidebar />
      </div>
    {/if}

    <!-- Layout -->
    <div class="flex-grow p-10">
      <slot />
    </div>
  </div>
</div>
