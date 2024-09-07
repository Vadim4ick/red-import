"use client";

import { GetGoodsQuery } from "@/graphql/__generated__";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

interface CatalogModalContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: GetGoodsQuery["goods"][0] | null;
  setSelectedItem: (val: GetGoodsQuery["goods"][0] | null) => void;
  onClickCatalogModal: () => void;
}

export const CatalogModalProviderContext = createContext(
  {} as CatalogModalContext,
);

const CatalogModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    GetGoodsQuery["goods"][0] | null
  >(null);

  const onClickCatalogModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const defaultProps = useMemo(
    () => ({
      open,
      onClickCatalogModal,
      setOpen,
      selectedItem,
      setSelectedItem,
    }),
    [onClickCatalogModal, open, selectedItem],
  );

  return (
    <CatalogModalProviderContext.Provider value={defaultProps}>
      {children}
    </CatalogModalProviderContext.Provider>
  );
};

export { CatalogModalProvider };
