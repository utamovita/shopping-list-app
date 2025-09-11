"use client";

import { useCreateGroup } from "../hooks/use-create-group.hook";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

type FormValues = {
  name: string;
};

export function CreateGroupForm() {
  const { mutate, isPending } = useCreateGroup();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { t } = useTranslation();

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset({ name: "" });
        toast.success(t("validation:success.groupCreated"));
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <Input
        {...register("name", { required: true })}
        placeholder={t("common:group.namePlaceholder")}
        disabled={isPending}
      />
      <Button type="submit" isLoading={isPending}>
        {t("common:create")}
      </Button>
    </form>
  );
}
