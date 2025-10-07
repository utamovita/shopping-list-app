import { z } from "zod";

export const createGroupSchema = z.object({
  name: z
    .string()
    .min(1, { message: "validation:required" })
    .min(3, { message: "validation:name.minLength" }),
});

export type CreateGroupDto = z.infer<typeof createGroupSchema>;

export const updateGroupSchema = z.object({
  name: z
    .string()
    .min(1, { message: "validation:required" })
    .min(3, { message: "validation:name.minLength" }),
});

export type UpdateGroupDto = z.infer<typeof updateGroupSchema>;

export const updateMemberRoleSchema = z.object({
  role: z.enum(["ADMIN", "USER"]),
});

export type UpdateMemberRoleDto = z.infer<typeof updateMemberRoleSchema>;
