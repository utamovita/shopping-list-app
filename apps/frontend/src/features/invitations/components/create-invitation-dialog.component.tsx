"use client";

import { CustomDialog } from "@/shared/ui/custom-dialog.component";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createInvitationSchema, CreateInvitationDto } from "@repo/schemas";
import { useCreateInvitation } from "../hooks/use-create-invitation.hook";
import { Group } from "@repo/types";
import { useTranslation } from "react-i18next";

type CreateInvitationDialogProps = {
  group: Group;
  children: React.ReactNode;
};

export function CreateInvitationDialog({
  group,
  children,
}: CreateInvitationDialogProps) {
  const { t } = useTranslation("common");
  const { mutate, isPending } = useCreateInvitation(group.id);

  const form = useForm<CreateInvitationDto>({
    resolver: zodResolver(createInvitationSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: CreateInvitationDto) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <CustomDialog
      trigger={children}
      title={t("invitations.dialog.title")}
      description={t("invitations.dialog.description", {
        groupName: group.name,
      })}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" isLoading={isPending}>
            {t("invitations.dialog.btnSend")}
          </Button>
        </form>
      </Form>
    </CustomDialog>
  );
}
