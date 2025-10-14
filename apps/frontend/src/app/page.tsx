"use client";

import { APP_PATHS } from "@repo/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  //TODO: Replace with landing page
  useEffect(() => {
    router.replace(APP_PATHS.dashboard);
  }, [router]);

  return null;
}
