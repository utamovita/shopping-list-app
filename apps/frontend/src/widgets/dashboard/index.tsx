"use client";

import { useAuthStore } from "@/shared/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useProfile } from "@/features/auth/hooks/use-profile.hook";
import { Button } from "@/shared/ui/button";
import { useTranslation } from "react-i18next";
import { APP_PATHS } from "@repo/config/paths";
import { useLogout } from "@/features/auth/hooks/use-logout.hook";

export default function DashboardView() {
  const { handleLogout } = useLogout();
  const { token } = useAuthStore();
  const router = useRouter();
  const { data: profile, isLoading, isError } = useProfile();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (!token) {
      router.replace(APP_PATHS.login);
    }
  }, [token, router]);

  if (!token || isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (isError || !profile) {
    return <div>Wystąpił błąd podczas pobierania profilu.</div>;
  }

  console.log(profile);
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Witaj, {profile.data.name}!</h1>
        <Button onClick={handleLogout} variant="outline">
          {t("logout")}
        </Button>
      </header>

      <main>
        <p>TODO: shopping list</p>
      </main>
    </div>
  );
}
