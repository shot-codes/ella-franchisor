<script lang="ts">
  import { enhance } from "$app/forms";
  import Logo from "$lib/client/components/Logo.svelte";
</script>

<div class="flex h-full flex-col items-center justify-center">
  <div class="mb-12">
    <Logo scale={1.5} />
  </div>

  <div class="flex w-96 flex-col p-1">
    <a
      href={"/auth/oauth/github"}
      data-sveltekit-preload-data="off"
      class="gg-oauth-login-btn"
    >
      <div class="w-7 text-base-700 dark:text-base_dark-400">
        <svg viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          /></svg
        >
      </div>
      <span class="pt-[2px]">Continue with Github</span>
    </a>
  </div>

  <div class="flex w-96 flex-col p-1">
    <a
      href={"/auth/oauth/google"}
      data-sveltekit-preload-data="off"
      class="gg-oauth-login-btn"
    >
      <div class="w-7 text-base-700 dark:text-base_dark-400">
        <svg width="28" height="28" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9c0 .66.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"
          /></svg
        >
      </div>
      <span class="pt-[2px]">Continue with Google</span>
    </a>
  </div>

  <div class=" mt-10 flex w-96 flex-col space-y-2 p-1">
    <h2 class="mx-auto mb-2 text-text-minor">Sign in with credentials</h2>
    <form class="ella-form" method="POST" use:enhance>
      <input type="text" id="username" name="username" placeholder="username" />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
      />
      <input type="submit" value="Continue" />
    </form>
    <div class="pt-1 text-text-minor">
      Don't have an account?
      <a href="/auth/signup" class="text-text-accent underline">Sign up</a>
    </div>
  </div>
</div>
