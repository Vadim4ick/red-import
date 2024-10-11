"use client";

import { phoneNumber } from "@/shared/const";
import { useMedia } from "@/shared/hooks/useMedia";
import { Logo } from "@/shared/icons/Logo";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Burger } from "./Burger";
import { toggleBidOpen } from "@/store/bidModal";
import { useNavbarHeader } from "@/shared/hooks/useNavbarHeader";
import { cn } from "@/shared/lib/utils";

const Header = () => {
  const isMobile = useMedia(768);

  const { asideMenu, activeSection } = useNavbarHeader();

  return (
    <header className="fixed z-[100] w-[100vw] bg-white">
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between">
          <Link href={"/"}>
            <Logo className="max-h-[28px] max-w-[162px] max-mobile:max-h-[24px] max-mobile:max-w-[139px]" />
          </Link>

          {!isMobile ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-[6px]">
                <Phone className="size-5 fill-buttonColor text-buttonColor" />

                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] font-medium leading-[18px]">
                    +7 (980) 422-12-06
                  </p>
                  <p className="text-[14px] font-medium leading-[18px]">
                    +7 (980) 422-12-06
                  </p>
                </div>
              </div>

              <Button
                onClick={() => toggleBidOpen()}
                className="h-[42px] w-[188px]"
              >
                Заказать звонок
              </Button>
            </div>
          ) : (
            <Burger />
          )}
        </div>
      </Container>

      <div className="flex h-[36px] items-center border-t border-t-[#E8E8E8] max-tablet:hidden">
        <Container className="w-full">
          <ul className="flex gap-[24px] max-desktop:gap-[10px] max-tablet:hidden">
            {!isMobile &&
              asideMenu.map((el) => {
                return (
                  <li key={el.name}>
                    <button
                      className={cn(
                        "text-[14px] font-medium leading-[20px] text-[#8F8F8F]",
                        {
                          "text-[#3D3D3D]": activeSection === el.id,
                        },
                      )}
                      onClick={el.fn}
                    >
                      {el.name}
                    </button>
                  </li>
                );
              })}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export { Header };
