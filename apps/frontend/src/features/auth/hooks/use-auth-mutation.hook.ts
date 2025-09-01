"use client";

import { useAuthStore } from "@/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { authService } from "../services/auth.service";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { AuthResponseType } from "@repo/validation-schemas/auth.schema";
import { SuccessResponse } from "@repo/types/api";

type AuthType = "login" | "register";
type FormSchema = z.infer<typeof loginSchema | typeof registerSchema>;

export function useAuthMutation(type: AuthType) {
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();
  const { t } = useTranslation();

  return useMutation<SuccessResponse<AuthResponseType>, Error, FormSchema>({
    mutationFn: (values: FormSchema) => {
      return type === "login"
        ? authService.login(values as z.infer<typeof loginSchema>)
        : authService.register(values as z.infer<typeof registerSchema>);
    },
    onSuccess: (response) => {
      if (response.data.access_token) {
        setToken(response.data.access_token);
        if (response.message) {
          toast.success(t(response.message));
        }
        router.push("/");
      }
    },
    onError: (error) => {
      toast.error(t(error.message));
    },
  });
}
