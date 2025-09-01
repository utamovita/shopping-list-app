"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginSchema } from "../schemas/auth.schema";
import { useAuthMutation } from "./use-auth-mutation.hook";

export function useLoginForm() {
  const { mutate, isPending } = useAuthMutation("login");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    mutate(values);
  }

  return { form, onSubmit, isPending };
}
