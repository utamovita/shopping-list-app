"use client";

import { useUiStore } from "@/shared/store/ui.store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PageTransitionManager() {
  const setPageTransitioning = useUiStore(
    (state) => state.setPageTransitioning,
  );
  const pathname = usePathname();

  useEffect(() => {
    setPageTransitioning(false);
  }, [pathname, setPageTransitioning]);

  return null;
}
