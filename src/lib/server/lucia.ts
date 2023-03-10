import { PrismaClient } from "@prisma/client";
import lucia from "lucia-auth";
import prisma from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";

const client = new PrismaClient();

export const auth = lucia({
  adapter: prisma(client),
  env: dev ? "DEV" : "PROD",
  transformUserData: (userData) => {
    return {
      userId: userData.id,
      username: userData.username,
      email: userData.email,
      avatar_url: userData.avatar_url,
    };
  },
});

export type Auth = typeof auth;
