"use client";

import { Toaster } from "@school-erp/ui/components/sonner";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
      {children}
      <Toaster richColors />
    </ThemeProvider>
  );
}
