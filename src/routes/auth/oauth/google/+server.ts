import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";
import { googleAuth } from "$lib/server/auth/oauth/google";

export const GET = (({ cookies }) => {
  const [authUrl, state] = googleAuth.getAuthorizationUrl();

  cookies.set("authState", state, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60,
  });

  throw redirect(303, authUrl);
}) satisfies RequestHandler;
