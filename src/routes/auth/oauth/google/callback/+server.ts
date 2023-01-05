import type { RequestHandler } from "./$types";
import { googleAuth } from "$lib/server/auth/oauth/google";
import { auth } from "$lib/server/auth/lucia";
import { error, redirect } from "@sveltejs/kit";

export const GET = (async ({ url, cookies }) => {
  const code = url.searchParams.get("code") ?? "";
  const authState = url.searchParams.get("state") ?? "";
  const storedAuthState = cookies.get("authState");

  console.log(code);
  if (authState !== storedAuthState) throw error(500, "Auth state mismatch.");
  const { existingUser, providerUser, createUser } =
    await googleAuth.validateCallback(code);

  const user =
    existingUser ||
    (await createUser({
      username: providerUser.name,
      email: providerUser.email,
      avatar_url: providerUser.picture,
    }));

  const newSession = await auth.createSession(user.userId);
  const sessionCookies = auth.createSessionCookies(newSession);

  sessionCookies.forEach((cookie) => {
    cookies.set(cookie.name, cookie.value, cookie.attributes);
  });

  throw redirect(307, "/");
}) satisfies RequestHandler;
