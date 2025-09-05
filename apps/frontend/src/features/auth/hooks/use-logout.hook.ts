"use client";

import { useAuthStore } from "@/shared/store/auth.store";
import { useRouter } from "next/navigation";
import { APP_PATHS } from "@repo/config/paths";

export function useLogout() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push(APP_PATHS.login);
  };

  return { handleLogout };
}
