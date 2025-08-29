"use client";

import { useAuthStore } from "@/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { env } from "@/lib/env";

type AuthType = "login" | "register";

export function useAuthForm(type: AuthType) {
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();
  const isLoginForm = type === "login";
  const schema = isLoginForm ? loginSchema : registerSchema;

  const formRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof schema>) => {
      const endpoint = isLoginForm ? "/auth/login" : "/auth/register";
      const url = `${env.NEXT_PUBLIC_API_URL}${endpoint}`;
      return axios.post(url, values);
    },
    onSuccess: (response) => {
      if (response.data.access_token) {
        setToken(response.data.access_token);
        router.push("/");
      } else {
        router.push("/login");
      }
    },
    onError: (error) => {
      console.error("Authentication error:", error);
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    mutate(values);
  }

  return { formLogin, formRegister, onSubmit, isPending };
}
