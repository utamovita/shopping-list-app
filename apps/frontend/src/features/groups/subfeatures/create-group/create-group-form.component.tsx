"use client";

import { useCreateGroup } from "./use-create-group.hook";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { createGroupSchema, type CreateGroupDto } from "@repo/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useUiStore } from "@/shared/store/ui.store";

export function CreateGroupForm() {
  const { mutate, isPending } = useCreateGroup();
  const { closeDialog } = useUiStore();

  const { t } = useTranslation();

  const form = useForm<CreateGroupDto>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: CreateGroupDto) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        toast.success(t("validation:success.groupCreated"));
        closeDialog();
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-start gap-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel className="sr-only">
                {t("common:group.namePlaceholder")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t("common:group.namePlaceholder")}
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isPending}>
          {t("common:create")}
        </Button>
      </form>
    </Form>
  );
}
