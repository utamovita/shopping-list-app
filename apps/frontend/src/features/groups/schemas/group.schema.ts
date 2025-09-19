import { z } from "zod";

export const createGroupSchema = z.object({
  name: z.string().min(3, {
    message: JSON.stringify({
      key: "validation:name.minLength",
      values: { count: 3 },
    }),
  }),
});

export type CreateGroupDto = z.infer<typeof createGroupSchema>;
