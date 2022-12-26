<script lang="ts">
  import Navbar from "$lib/client/components/Navbar.svelte";
  import "$styles/index.css";
</script>

<div class="flex h-full flex-col">
  <div class="h-16">
    <Navbar />
  </div>

  <div class="flex-grow">
    <slot />
  </div>
</div>
