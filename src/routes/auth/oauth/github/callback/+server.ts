import type { RequestHandler } from "./$types";
import { auth } from "$lib/server/auth/lucia";
import { error, redirect } from "@sveltejs/kit";
import { githubAuth } from "$lib/server/auth/oauth/github";

export const GET = (async ({ url, cookies }) => {
  const code = url.searchParams.get("code") ?? "";
  const authState = url.searchParams.get("state") ?? "";
  const storedAuthState = cookies.get("authState");

  if (authState !== storedAuthState) throw error(500, "Auth state mismatch.");

  console.log(code);
  const { existingUser, providerUser, createUser } =
    await githubAuth.validateCallback(code);
  const user =
    existingUser ||
    (await createUser({
      username: providerUser.name,
      email: providerUser.email,
      avatar_url: providerUser.avatar_url,
    }));

  const newSession = await auth.createSession(user.userId);
  const sessionCookies = auth.createSessionCookies(newSession);

  sessionCookies.forEach((cookie) => {
    cookies.set(cookie.name, cookie.value, cookie.attributes);
  });

  throw redirect(307, "/");
}) satisfies RequestHandler;
