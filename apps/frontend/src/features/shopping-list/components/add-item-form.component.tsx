"use client";

import { useAddItem } from "../hooks/use-add-item.hook";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type FormValues = {
  name: string;
};

export function AddItemForm({ groupId }: { groupId: string }) {
  const { mutate, isPending } = useAddItem(groupId);
  const { register, handleSubmit, setFocus, reset } = useForm<FormValues>();
  const [submissionCount, setSubmissionCount] = useState(0);
  const { t } = useTranslation("common");

  const onSubmit = (data: FormValues) => {
    if (data.name.trim() === "") return;

    mutate(data.name, {
      onSuccess: () => {
        reset();
        setSubmissionCount((count) => count + 1);
      },
    });
  };

  useEffect(() => {
    if (submissionCount > 0) {
      setFocus("name");
    }
  }, [submissionCount, setFocus]);

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
