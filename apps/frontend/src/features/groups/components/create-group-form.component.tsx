"use client";

import { useCreateGroup } from "../hooks/use-create-group.hook";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

export function CreateGroupForm() {
  const { mutate, isPending } = useCreateGroup();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset({ name: "" });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <Input
        {...register("name", { required: true })}
        placeholder="Nazwa nowej grupy..."
        disabled={isPending}
      />
      <Button type="submit" isLoading={isPending}>
        Stwórz
      </Button>
    </form>
  );
}
