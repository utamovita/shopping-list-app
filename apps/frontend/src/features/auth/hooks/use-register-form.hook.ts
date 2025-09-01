"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { registerSchema } from "../schemas/auth.schema";
import { useAuthMutation } from "./use-auth-mutation.hook";

export function useRegisterForm() {
  const { mutate, isPending } = useAuthMutation("register");

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    mutate(values);
  }

  return { form, onSubmit, isPending };
}
