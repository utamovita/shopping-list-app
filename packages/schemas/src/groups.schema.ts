import { z } from "zod";

export const createGroupSchema = z.object({
  name: z.string().min(1, { message: "validation:required" }),
});

export type CreateGroupDto = z.infer<typeof createGroupSchema>;
