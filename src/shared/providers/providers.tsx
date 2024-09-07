"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatalogModalProvider } from "./catalogModal";

// Create a client
const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CatalogModalProvider>{children}</CatalogModalProvider>;
    </QueryClientProvider>
  );
};

export { Providers };
