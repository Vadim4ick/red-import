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

const Header = () => {
  const isMobile = useMedia(768);

  return (
    <header className="fixed z-50 w-[100vw] border-b border-b-[#E8E8E8] bg-white">
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between">
          <Link href={"/"}>
            <Logo className="max-h-[28px] max-w-[166px] max-mobile:max-h-[24px] max-mobile:max-w-[141px]" />
          </Link>

          {!isMobile ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-[6px]">
                <Phone className="size-5 fill-buttonColor text-buttonColor" />

                <p className="text-[14px] font-medium leading-[18px]">
                  {phoneNumber}
                </p>
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
    </header>
  );
};

export { Header };
