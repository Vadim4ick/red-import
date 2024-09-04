import { phoneNumber } from "@/shared/const";
import { Creatin } from "@/shared/icons/Creatin";
import { Logo } from "@/shared/icons/Logo";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mobile:pb-[39px] bg-bgFooter pt-[48px]">
      <Container>
        <div className="max-mobile:flex-col flex items-center justify-between gap-8">
          <Link href={"/"}>
            <Logo variant="footer" className="max-w-full" />
          </Link>

          <div className="max-mobile:gap-[31px] flex items-center gap-4">
            <div className="flex items-center gap-[6px]">
              <Phone className="size-5 fill-white text-white" />

              <p className="max-mobile:text-[12px] max-mobile:leading-[20px] whitespace-nowrap text-[14px] font-medium leading-[18px] text-white">
                {phoneNumber}
              </p>
            </div>

            <Button className="max-mobile:w-[155px] max-mobile:h-[40px] h-[42px] w-[188px]">
              Заказать звонок
            </Button>
          </div>
        </div>

        <div className="max-mobile:justify-center max-mobile:items-center flex justify-end pt-[24px]">
          <div className="max-mobile:justify-center max-mobile:items-center max-mobile:gap-3 flex flex-col items-end justify-end gap-[9px] text-white">
            <p className="max-mobile:text-center max-mobile:text-[12px] max-mobile:leading-[16px] leading-[19px]">
              Общество с ограниченной ответственностью{" "}
              <br className="mobile:hidden" /> «РЭД ИМПОРТ»
            </p>

            <div className="max-mobile:flex-col max-mobile:justify-center max-mobile:items-center max-mobile:gap-1.5 flex gap-[15px]">
              <p className="max-mobile:text-center max-mobile:text-[12px] max-mobile:leading-[16px] leading-[19px]">
                ОГРН 1036601472016
              </p>
              <p className="max-mobile:text-center max-mobile:text-[12px] max-mobile:leading-[16px] leading-[19px]">
                ИНН/КПП 6625028804/770701001
              </p>
            </div>
          </div>
        </div>

        <div className="max-mobile:flex-col max-mobile:-mx-[20px] max-mobile:px-[20px] max-mobile:justify-center max-mobile:items-start max-mobile:gap-3 max-mobile:py-[20px] max-mobile:mt-[20px] max-mobile:bg-[#242424] flex items-end justify-between pt-[59px]">
          <div className="max-mobile:text-[12px] max-mobile:leading-[12px] max-mobile:flex-col-reverse flex flex-col gap-3 text-[14px] leading-[14px] text-[#6F6F6F]">
            <a>Публичная оферта</a>
            <a>Пользовательское соглашение</a>
          </div>

          <div className="max-mobile:self-end flex items-center gap-2 rounded-3xl bg-[#2E2E2E] pb-[3px] pl-[16px] pr-[3px] pt-[3px] text-[12px]">
            <span className="font-semibold text-[#787878]">разработано</span>

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
