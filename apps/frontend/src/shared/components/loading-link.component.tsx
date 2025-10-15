"use client";

import { useUiStore } from "@/shared/store/ui.store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

type LoadingLinkProps = React.ComponentProps<typeof Link>;

export function LoadingLink({
  href,
  children,
  onClick,
  ...props
}: LoadingLinkProps) {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();
  const setPageTransitioning = useUiStore(
    (state) => state.setPageTransitioning,
  );

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onClick) {
      onClick(e);
    }
    e.preventDefault();

    setPageTransitioning(true);

    startTransition(() => {
      router.push(href.toString());
    });
  };

  return (
    <Link href={href} onClick={handleLinkClick} {...props}>
      {children}
    </Link>
  );
}
