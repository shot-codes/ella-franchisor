<script lang="ts">
  import TopNav from "./TopNav.svelte";
  import SideNav from "./SideNav.svelte";

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
      <div class="absolute w-full">
        <SideNav />
      </div>
    {/if}

    <!-- Layout -->
    <div class="flex-grow p-10">
      <slot />
    </div>
  </div>
</div>
