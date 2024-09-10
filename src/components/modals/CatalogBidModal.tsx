"use client";

import { LogoBidModal } from "@/shared/icons/LogoBidModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useUnit } from "effector-react";
import { FormFeedbackForm } from "../FormFeedback";
import { $catalogBidOpen, toggleCatalogBidOpen } from "@/store/catalogBidModal";

const CatalogBidModal = () => {
  const isOpen = useUnit($catalogBidOpen);

  return (
    <Dialog open={isOpen} onOpenChange={() => toggleCatalogBidOpen()}>
      <DialogContent
        classNameClose="top-[12px] right-[14px] max-mobile:top-[8px] max-mobile:right-[8px]"
        className="flex h-[531px] w-full max-w-[414px] flex-col justify-between gap-[0px] rounded-[4px] border-none bg-[#EDEDED] px-[28px] pt-[36px] max-mobile:h-[583px] max-mobile:max-h-[471px] max-mobile:max-w-[320px] max-mobile:px-[24px]"
      >
        <DialogHeader className="m-0 flex flex-col items-center gap-[28px] space-y-0 pb-[25.8px] max-mobile:gap-[24px] max-mobile:pb-4">
          <LogoBidModal className="h-[82px]" />

          <DialogTitle className="mt-0 text-[24px] font-medium leading-[28px]">
            Оставить заявку
          </DialogTitle>
        </DialogHeader>

        <FormFeedbackForm type="catalog" />
      </DialogContent>
    </Dialog>
  );
};

export { CatalogBidModal };
