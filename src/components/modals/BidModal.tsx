"use client";

import { LogoBidModal } from "@/shared/icons/LogoBidModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { $bidOpen, toggleBidOpen } from "@/store/bidModal";
import { useUnit } from "effector-react";
import { FormFeedbackForm } from "../FormFeedback";

const BidModal = () => {
  const isOpen = useUnit($bidOpen);

  return (
    <Dialog open={isOpen} onOpenChange={() => toggleBidOpen()}>
      <DialogContent
        classNameClose="top-[12px] right-[14px] max-mobile:top-[8px] max-mobile:right-[8px]"
        className="flex h-[640px] w-full max-w-[414px] flex-col justify-between gap-[0px] rounded-[4px] border-none bg-[#EDEDED] px-[28px] pt-[36px] max-mobile:h-[583px] max-mobile:max-w-[320px] max-mobile:px-[24px]"
      >
        <DialogHeader className="m-0 flex flex-col items-center gap-[28px] space-y-0 pb-[25px] max-mobile:gap-[24px] max-mobile:pb-4">
          <LogoBidModal className="h-[81px]" />

          <DialogTitle className="mt-0 text-[24px] font-medium leading-[28px]">
            Оставить заявку
          </DialogTitle>
        </DialogHeader>

        <FormFeedbackForm type="bid" />
      </DialogContent>
    </Dialog>
  );
};

export { BidModal };
