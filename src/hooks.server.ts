import { auth } from "$lib/server/auth/lucia";
import { handleHooks } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

export const handle = sequence(
  handleHooks(auth),
  async ({ event, resolve }) => {
    if (
      event.url.pathname !== "/auth/signin" &&
      !event.url.pathname.includes("/auth/")
    ) {
      const session = await event.locals.validate();
      if (!session) throw redirect(302, "/auth/signin");
    }

    return await resolve(event);
  }
);
