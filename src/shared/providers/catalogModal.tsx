"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { MockDataItem } from "../const";

interface CatalogModalContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: MockDataItem | null;
  setSelectedItem: (val: MockDataItem | null) => void;
  onClickCatalogModal: () => void;
}

export const CatalogModalProviderContext = createContext(
  {} as CatalogModalContext,
);

const CatalogModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MockDataItem | null>(null);

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
