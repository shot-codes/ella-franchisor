import type { RequestHandler } from "./$types";
import {
  OUATH_GOOGLE_CLIENT_ID,
  OUATH_GOOGLE_CLIENT_SECRET,
  OUATH_GOOGLE_REDIRECT_URI,
} from "$env/static/private";
import google from "@lucia-auth/oauth/google";
import { auth } from "$lib/server/lucia";
import { error, redirect } from "@sveltejs/kit";

const googleAuth = google(auth, {
  clientId: OUATH_GOOGLE_CLIENT_ID,
  clientSecret: OUATH_GOOGLE_CLIENT_SECRET,
  redirectUri: OUATH_GOOGLE_REDIRECT_URI,
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],
});

export const GET = (async ({ url, cookies }) => {
  const code = url.searchParams.get("code") ?? "";
  const authState = url.searchParams.get("state") ?? "";
  const storedAuthState = cookies.get("authState");

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
