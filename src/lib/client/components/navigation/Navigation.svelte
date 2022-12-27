<script lang="ts">
  import TopNav from "./TopNav.svelte";
  import SideNav from "./SideNav.svelte";
</script>

<div class="flex h-full flex-col">
  <!-- Top Nav -->
  <div class="min-h-[86px]">
    <TopNav />
  </div>

  <div class="flex flex-grow">
    <!-- Side Nav -->
    <div class="min-w-[300px] p-10 pr-0">
      <SideNav />
    </div>

    <!-- Layout -->
    <div class="flex-grow p-10">
      <slot />
    </div>
  </div>
</div>
