"use client";

import { useAuthStore } from "@/shared/store/auth.store";
import { useProfile } from "@/features/auth/hooks/use-profile.hook";
import { Button } from "@/shared/ui/button";
import { useTranslation } from "react-i18next";
import { useLogout } from "@/features/auth/hooks/use-logout.hook";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { AlertFallback } from "@/shared/ui/alert";
import { useGroups } from "@/features/groups/hooks/use-groups.hook";

export default function DashboardView() {
  const { handleLogout } = useLogout();
  const profileQuery = useProfile();
  const groupsQuery = useGroups();
  const { t } = useTranslation();

  const isLoading = profileQuery.isLoading || groupsQuery.isLoading;
  const isError = profileQuery.isError || groupsQuery.isError;
  const profile = profileQuery.data;
  const groups = groupsQuery.data;

  if (isLoading) {
    return <SpinnerOverlay variant={"page"} spinnerSize={"lg"} />;
  }

  if (isError || !profile) {
    return <AlertFallback />;
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          {t("common:hello")}, {profile.data.name}!
        </h1>
        <Button onClick={handleLogout} variant="outline">
          {t("common:auth.logout")}
        </Button>
      </header>

      <main>
        {groups && groups.data.length > 0 ? (
          <ul>
            {groups.data.map((group) => (
              <li key={group.id}>{group.name}</li>
            ))}
          </ul>
        ) : (
          <div>
            <p>Nie należysz jeszcze do żadnej grupy.</p>
            {/* TODO: Dodać formularz tworzenia grupy */}
          </div>
        )}
      </main>
    </div>
  );
}
