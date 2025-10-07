"use client";

import "@/shared/lib/i18n/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "@/shared/ui/sonner";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { DialogManager } from "@/widgets/dialog-manager";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors />
        <DialogManager />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
