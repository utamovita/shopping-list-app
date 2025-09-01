import { z } from "zod";

export const authResponseSchema = z.object({
  access_token: z.string(),
});

export type AuthResponseType = z.infer<typeof authResponseSchema>;
