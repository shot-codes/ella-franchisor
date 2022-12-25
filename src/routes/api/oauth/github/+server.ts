import type { RequestHandler } from "./$types";
import {
  OUATH_GITHUB_CLIENT_ID,
  OUATH_GITHUB_CLIENT_SECRET,
} from "$env/static/private";
import github from "@lucia-auth/oauth/github";
import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";

const githubAuth = github(auth, {
  clientId: OUATH_GITHUB_CLIENT_ID,
  clientSecret: OUATH_GITHUB_CLIENT_SECRET,
});

export const GET = (({ cookies }) => {
  const [authUrl, state] = githubAuth.getAuthorizationUrl();

  cookies.set("authState", state, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60,
  });

  throw redirect(303, authUrl);
}) satisfies RequestHandler;
