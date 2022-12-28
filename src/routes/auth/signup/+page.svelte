<script lang="ts">
  import { enhance } from "$app/forms";
  import Logo from "$lib/client/components/Logo.svelte";
</script>

<div class="flex h-full flex-col items-center justify-center">
  <div class="mb-20">
    <Logo scale={1.5} />
  </div>
  <h1 class="mx-auto mb-4">Continue with new account</h1>
  <div class="w-96">
    <form class="ella-form mb-3" method="POST" use:enhance>
      <input type="text" id="username" name="username" placeholder="username" />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
      />
      <input type="submit" value="Signup" />
    </form>
    <div class="text-text-minor">
      Already have an account, or want to sign in with a provider?
      <a href="/auth/signin" class="text-text-accent underline">Sign in</a>
    </div>
  </div>
</div>
