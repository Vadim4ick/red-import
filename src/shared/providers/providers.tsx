"use client";

import { CatalogModalProvider } from "./catalogModal";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CatalogModalProvider>{children}</CatalogModalProvider>;
};

export { Providers };
