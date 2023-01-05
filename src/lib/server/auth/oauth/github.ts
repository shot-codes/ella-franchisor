import {
  OUATH_GITHUB_CLIENT_ID,
  OUATH_GITHUB_CLIENT_SECRET,
} from "$env/static/private";
import github from "@lucia-auth/oauth/github";
import { auth } from "$lib/server/auth/lucia";

export const githubAuth = github(auth, {
  clientId: OUATH_GITHUB_CLIENT_ID,
  clientSecret: OUATH_GITHUB_CLIENT_SECRET,
  scope: ["user:email"],
});
