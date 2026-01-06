import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

/* Reusable router and procedure helpers */
export const router = t.router;
export const publicProcedure = t.procedure;
