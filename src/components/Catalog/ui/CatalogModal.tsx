"use client";

import { CatalogModalProviderContext } from "@/shared/providers/catalogModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useContext } from "react";

const CatalogModal = () => {
  const { open, onClickCatalogModal, selectedItem } = useContext(
    CatalogModalProviderContext,
  );

  return (
    <Dialog open={open} onOpenChange={onClickCatalogModal}>
      <DialogContent className="h-full max-h-[725px] w-full max-w-[482px] p-[20px]">
        <DialogHeader>
          <DialogTitle>{selectedItem?.title}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { CatalogModal };
