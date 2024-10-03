"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatalogModalProvider } from "./catalogModal";
import { useEffect, useState } from "react";
import { Loader } from "../ui/loader";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader className="absolute left-1/2 top-1/2 size-10" />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CatalogModalProvider>{children}</CatalogModalProvider>
    </QueryClientProvider>
  );
};

export { Providers };
