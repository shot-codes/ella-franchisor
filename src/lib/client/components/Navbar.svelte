<script lang="ts">
  import { getUser, signOut } from "@lucia-auth/sveltekit/client";
  import { invalidateAll } from "$app/navigation";

  const user = getUser();
  const username = $user?.username;
</script>

<nav
  class="flex h-full items-center justify-end space-x-4 bg-base-100 p-3 shadow"
>
  <span class="text-base-500">
    {username}
  </span>

  <button
    class="gg-btn-secondary"
    on:click={async () => {
      await signOut();
      invalidateAll();
    }}
  >
    Sign out
  </button>
</nav>
