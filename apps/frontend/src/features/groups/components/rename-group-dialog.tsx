"use client";

import { CustomDialog } from "@/shared/ui/custom-dialog.component";
import { Group } from "@repo/database";
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
import { useUpdateGroup } from "../hooks/use-update-group.hook";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type RenameGroupDialogProps = {
  group: Group;
  children: React.ReactNode;
};

type FormValues = {
  name: string;
};

export function RenameGroupDialog({ group, children }: RenameGroupDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = useUpdateGroup();
  const { t } = useTranslation("common");
  const form = useForm<FormValues>({
    defaultValues: { name: group.name },
  });

  const onSubmit = (data: FormValues) => {
    mutate(
      { groupId: group.id, data },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <CustomDialog
      trigger={children}
      title={t("group.changeNameDialog.title")}
      description={t("group.changeNameDialog.description")}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("group.changeNameDialog.newName")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("group.changeNameDialog.newNamePlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" isLoading={isPending}>
            {t("group.changeNameDialog.save")}
          </Button>
        </form>
      </Form>
    </CustomDialog>
  );
}
