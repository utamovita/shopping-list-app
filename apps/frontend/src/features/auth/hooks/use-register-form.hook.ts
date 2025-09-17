"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterDto,
} from "../../../../../../packages/validation-schemas/src/auth.schema";
import { useAuthMutation } from "./use-auth-mutation.hook";

export function useRegisterForm() {
  const { mutate, isPending } = useAuthMutation("register");

  const form = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: RegisterDto) {
    mutate(values);
  }

  return { form, onSubmit, isPending };
}
