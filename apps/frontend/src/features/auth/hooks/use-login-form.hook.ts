"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginDto } from "@repo/schemas";
import { useAuthMutation } from "./use-auth-mutation.hook";

export function useLoginForm() {
  const { mutate, isPending } = useAuthMutation("login");

  const form = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginDto) {
    mutate(values);
  }

  return { form, onSubmit, isPending };
}
