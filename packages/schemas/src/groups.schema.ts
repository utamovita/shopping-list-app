import { z } from "zod";

export const createGroupSchema = z.object({
  name: z
    .string()
    .min(1, { message: "validation:required" })
    .min(3, { message: "validation:name.minLength" }),
});

export type CreateGroupDto = z.infer<typeof createGroupSchema>;
