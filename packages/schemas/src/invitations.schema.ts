import { z } from "zod";

export const createInvitationSchema = z.object({
  email: z.string().email({ message: "validation:email.invalid" }),
});

export type CreateInvitationDto = z.infer<typeof createInvitationSchema>;
