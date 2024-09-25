"use client";

import { phoneNumber } from "@/shared/const";
import { useBurgerMenu } from "@/shared/hooks/useBurgerMenu";
import { Arrow } from "@/shared/icons/Arrow";
import { Phone } from "@/shared/icons/Phone";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { toggleBidOpen } from "@/store/bidModal";
import { $burgerOpen, toggleBurgerOpen } from "@/store/burger";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const BurgerMenuModal = () => {
  const isOpen = useUnit($burgerOpen);
  const { asideMenu } = useBurgerMenu();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 top-0 z-[55] h-full w-full bg-[#181818]/50",
          {
            hidden: !isOpen,
          },
        )}
      />

      <div
        className={`fixed left-0 top-[var(--header-height)] z-[55] flex h-[360px] w-full flex-col justify-between bg-[#F0F0F0] p-[24px] transition-transform duration-300 ${isOpen ? "translate-y-0 transform" : "-translate-y-full transform"}`}
      >
        <div className="flex flex-col gap-[20px]">
          {asideMenu.map((el) => (
            <button
              onClick={() => {
                el.fn();
                toggleBurgerOpen();
              }}
              key={el.name}
              className="flex cursor-pointer items-center justify-between"
            >
              <span className="text-[24px] font-medium leading-[28px] text-[#3D3D3D]">
                {el.name}
              </span>
              <Arrow className="size-[14px] rotate-180 text-[#3D3D3D]" />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-[6px]">
            <Phone className="size-[16px] fill-buttonColor text-buttonColor" />
            <p className="text-[12px] font-medium leading-[14px]">
              {phoneNumber}
            </p>
          </div>
          <Button
            onClick={() => {
              toggleBidOpen();
              toggleBurgerOpen();
            }}
            className="h-[40px] w-[155px] text-[12px] leading-[16px]"
          >
            Заказать звонок
          </Button>
        </div>
      </div>
    </>
  );
};

export { BurgerMenuModal };
