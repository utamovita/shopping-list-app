"use client";

import { useAuthStore } from "@/shared/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { APP_PATHS } from "@repo/config";
import { useIsMounted } from "@/shared/hooks/use-has-mounted.hook";
import { SpinnerOverlay } from "@/shared/ui/spinner";

export function UnauthenticatedOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = useAuthStore((state) => state.accessToken);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && token) {
      router.replace(APP_PATHS.dashboard);
    }
  }, [token, router, isMounted]);

  if (!isMounted || token) {
    return <SpinnerOverlay variant={"page"} spinnerSize={"lg"} />;
  }

  return <>{children}</>;
}
