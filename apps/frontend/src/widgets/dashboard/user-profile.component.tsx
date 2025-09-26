"use client";

import { useProfile } from "@/features/auth/hooks/use-profile.hook";
import { useLogout } from "@/features/auth/hooks/use-logout.hook";
import { Button } from "@/shared/ui/button";
import { useTranslation } from "react-i18next";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { AlertFallback } from "@/shared/ui/alert";
import { InvitationsBell } from "@/features/invitations/components/invitations-bell.component";

export function UserProfile() {
  const { isError, data: profile, isLoading } = useProfile();
  const { handleLogout } = useLogout();
  const { t } = useTranslation();

  if (isLoading) {
    return <SpinnerOverlay variant={"page"} spinnerSize={"lg"} />;
  }

  if (isError || !profile) {
    return <AlertFallback />;
  }

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">
        {t("common:hello")}, {profile.data.name}!
      </h1>
      <div className="flex items-center gap-2">
        <InvitationsBell />
        <Button onClick={handleLogout} variant="outline">
          {t("common:auth.logout")}
        </Button>
      </div>
    </header>
  );
}
