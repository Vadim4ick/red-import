"use client";

import { phoneNumber } from "@/shared/const";
import { Arrow } from "@/shared/icons/Arrow";
import { Phone } from "@/shared/icons/Phone";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { $burgerOpen, toggleBurgerOpen } from "@/store/burger";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const BurgerMenuModal = () => {
  const isOpen = useUnit($burgerOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={() => toggleBurgerOpen()}>
      <SheetContent
        side={"left"}
        className="h-[calc(100vh_-_var(--header-height)] top-[var(--header-height)] flex w-full flex-col justify-between gap-2 border-none bg-[#F0F0F0] p-[24px]"
        overlay={false}
      >
        <SheetHeader className="flex flex-col gap-[20px]">
          <button className="flex cursor-pointer items-center justify-between">
            <SheetTitle className="text-[24px] font-medium leading-[28px] text-[#3D3D3D]">
              Преимущества
            </SheetTitle>

            <Arrow className="size-[14px] rotate-180 text-[#3D3D3D]" />
          </button>

          <button className="flex cursor-pointer items-center justify-between">
            <SheetTitle className="text-[24px] font-medium leading-[28px] text-[#3D3D3D]">
              Каталог техники
            </SheetTitle>

            <Arrow className="size-[14px] rotate-180 text-[#3D3D3D]" />
          </button>

          <button className="flex cursor-pointer items-center justify-between">
            <SheetTitle className="text-[24px] font-medium leading-[28px] text-[#3D3D3D]">
              О нас
            </SheetTitle>

            <Arrow className="size-[14px] rotate-180 text-[#3D3D3D]" />
          </button>
        </SheetHeader>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-[6px]">
            <Phone className="size-[16px] fill-buttonColor text-buttonColor" />

            <p className="text-[12px] font-medium leading-[14px]">
              {phoneNumber}
            </p>
          </div>

          <Button className="h-[40px] w-[155px] text-[12px] leading-[16px]">
            Заказать звонок
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { BurgerMenuModal };
