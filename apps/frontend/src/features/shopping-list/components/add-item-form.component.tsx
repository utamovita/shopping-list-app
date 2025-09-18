"use client";

import { useAddItem } from "../hooks/use-add-item.hook";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormValues = {
  name: string;
};

export function AddItemForm({ groupId }: { groupId: string }) {
  const { mutate, isPending } = useAddItem(groupId);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { t } = useTranslation("common");

  const onSubmit = (data: FormValues) => {
    mutate(data.name, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <Input
        {...register("name", { required: true })}
        placeholder={t("shoppingList.addItemPlaceholder")}
        disabled={isPending}
      />
      <Button type="submit" isLoading={isPending}>
        {t("add")}
      </Button>
    </form>
  );
}
