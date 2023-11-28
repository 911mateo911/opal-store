import { lucia } from "lucia";
import { nextjs_future } from "lucia/middleware";
import { prisma as prismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "../_shared/db";
import { cache } from "react";
import * as context from "next/headers";

export const auth = lucia({
  // TODO: fix this
  env: "DEV", // "PROD" if deployed to HTTPS
  middleware: nextjs_future(),
  sessionCookie: {
    expires: false
  },
  adapter: prismaAdapter(prisma),
  getSessionAttributes(data) {
    return data;
  },
});

export type Auth = typeof auth;

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest("GET", context);
  return authRequest.validate();
});
