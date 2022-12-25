import type { RequestHandler } from "./$types";
import {
  OUATH_GITHUB_CLIENT_ID,
  OUATH_GITHUB_CLIENT_SECRET,
} from "$env/static/private";
import github from "@lucia-auth/oauth/github";
import { auth } from "$lib/server/lucia";
import { error, redirect } from "@sveltejs/kit";

const githubAuth = github(auth, {
  clientId: OUATH_GITHUB_CLIENT_ID,
  clientSecret: OUATH_GITHUB_CLIENT_SECRET,
});

export const GET = (async ({ url, cookies }) => {
  const code = url.searchParams.get("code") ?? "";
  const authState = url.searchParams.get("state") ?? "";
  const storedAuthState = cookies.get("authState");

  if (authState !== storedAuthState) throw error(500, "Auth state mismatch.");

  const { existingUser, providerUser, createUser } =
    await githubAuth.validateCallback(code);
  const user =
    existingUser ||
    (await createUser({
      username: providerUser.name,
    }));

  const newSession = await auth.createSession(user.userId);
  const sessionCookies = auth.createSessionCookies(newSession);

  sessionCookies.forEach((cookie) => {
    cookies.set(cookie.name, cookie.value, cookie.attributes);
  });

  throw redirect(307, "/");
}) satisfies RequestHandler;
