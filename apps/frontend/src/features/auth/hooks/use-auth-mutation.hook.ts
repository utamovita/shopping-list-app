"use client";

import { useAuthStore } from "@/shared/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "../services/auth.service";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { AuthResponseType, LoginDto, RegisterDto } from "@repo/schemas";
import { SuccessResponse } from "@repo/types/api";
import { APP_PATHS } from "@repo/config";
import { handleError } from "@/shared/lib/error/handle-error";

type AuthType = "login" | "register";
type FormSchema = LoginDto | RegisterDto;

export function useAuthMutation(type: AuthType) {
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();
  const { t } = useTranslation();

  return useMutation<SuccessResponse<AuthResponseType>, Error, FormSchema>({
    mutationFn: (values: FormSchema) => {
      return type === "login"
        ? authService.login(values as LoginDto)
        : authService.register(values as RegisterDto);
    },
    onSuccess: (response) => {
      if (response.data.access_token) {
        setToken(response.data.access_token);
        if (response.message) {
          toast.success(t(response.message));
        }
        router.push(APP_PATHS.dashboard);
      }
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
