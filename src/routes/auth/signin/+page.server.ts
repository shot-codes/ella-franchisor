import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/auth/lucia";
import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ locals }) => {
  const session = await locals.validate();
  if (session) throw redirect(302, "/");
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");

    if (
      !username ||
      !password ||
      typeof username !== "string" ||
      typeof password !== "string"
    )
      return fail(400);
    try {
      const user = await auth.authenticateUser(
        "provider_id",
        username,
        password
      );
      const session = await auth.createSession(user.userId);
      locals.setSession(session);
    } catch {
      return fail(400);
    }
  },
};
