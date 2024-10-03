"use client";

import { phoneNumber } from "@/shared/const";
import { Creatin } from "@/shared/icons/Creatin";
import { Logo } from "@/shared/icons/Logo";
// import { onest } from "@/shared/style/fonts";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { toggleBidOpen } from "@/store/bidModal";
import { Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bgFooter pt-[48px] mobile:pb-[39px]">
      <Container>
        <div className="flex items-center justify-between gap-8 max-mobile:flex-col">
          <Link href={"/"}>
            <Logo variant="footer" className="max-w-full" />
          </Link>

          <div className="flex items-center gap-4 max-mobile:gap-[31px]">
            <div className="flex items-center gap-[6px]">
              <Phone className="size-5 fill-white text-white" />

              <div className="flex flex-col gap-[2px]">
                <p className="whitespace-nowrap text-[14px] font-medium leading-[18px] text-white max-mobile:text-[12px] max-mobile:leading-[20px]">
                  +7 (980) 422-12-06
                </p>
                <p className="whitespace-nowrap text-[14px] font-medium leading-[18px] text-white max-mobile:text-[12px] max-mobile:leading-[20px]">
                  +7 (495) 621-33-31
                </p>
              </div>
            </div>

            <Button
              onClick={() => toggleBidOpen()}
              className="h-[42px] w-[188px] max-mobile:h-[40px] max-mobile:w-[155px] max-mobile:text-[12px] max-mobile:leading-[16px]"
            >
              Заказать звонок
            </Button>
          </div>
        </div>

        <div className="flex justify-end pt-[24px] max-mobile:items-center max-mobile:justify-center">
          <div className="flex flex-col items-end justify-end gap-[9px] text-white max-mobile:items-center max-mobile:justify-center max-mobile:gap-3">
            <p className="leading-[19px] max-mobile:text-center max-mobile:text-[12px] max-mobile:leading-[16px]">
              Общество с ограниченной ответственностью{" "}
              <br className="mobile:hidden" /> «РЭД ИМПОРТ»
            </p>

            <div className="flex gap-[15px] max-mobile:flex-col max-mobile:items-center max-mobile:justify-center max-mobile:gap-0">
              <p className="leading-[19px] max-mobile:text-center max-mobile:text-[12px] max-mobile:leading-[16px]">
                ОГРН 1036601472016
              </p>
              <p className="leading-[19px] max-mobile:text-center max-mobile:text-[12px] max-mobile:leading-[16px]">
                ИНН/КПП 6625028804/770701001
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between pt-[59px] max-mobile:-mx-[20px] max-mobile:mt-[26px] max-mobile:flex-col max-mobile:items-start max-mobile:justify-center max-mobile:gap-3 max-mobile:bg-[#242424] max-mobile:px-[20px] max-mobile:py-[20px]">
          <div className="flex flex-col gap-3 text-[14px] leading-[14px] text-[#6F6F6F] max-mobile:flex-col-reverse max-mobile:gap-[6px] max-mobile:text-[12px] max-mobile:leading-[12px]">
            <a href="#">Публичная оферта</a>
            <a href="#">Пользовательское соглашение</a>
          </div>

          <div className="flex items-center gap-2 rounded-3xl bg-[#2E2E2E] pb-[3px] pl-[16px] pr-[3px] pt-[3px] text-[12px] max-mobile:self-end">
            <span className="font-['Jeko'] font-semibold text-[#787878]">
              разработано
            </span>

            <div className="rounded-full bg-defaultTextColor px-[18px] py-[10px]">
              <Creatin className="text-white" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
