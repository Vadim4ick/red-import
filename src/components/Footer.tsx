import { Creatin } from "@/shared/icons/Creatin";
import { Logo } from "@/shared/icons/Logo";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bgFooter pb-[39px] pt-[48px]">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Logo variant="footer" />
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[6px]">
              <Phone className="size-5 fill-white text-white" />

              <p className="text-[14px] font-medium leading-[18px] text-white">
                +7 (918) 214-22-45
              </p>
            </div>

            <Button className="h-[42px] w-[188px]">Заказать звонок</Button>
          </div>
        </div>

        <div className="flex justify-end pt-[24px]">
          <div className="flex flex-col items-end justify-end gap-[9px] text-white">
            <p className="leading-[19px]">
              Общество с ограниченной ответственностью «РЭД ИМПОРТ»
            </p>

            <div className="flex gap-[15px]">
              <p className="leading-[19px]">ОГРН 1036601472016</p>
              <p className="leading-[19px]">ИНН/КПП 6625028804/770701001</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between pt-[59px]">
          <div className="flex flex-col gap-3 text-[14px] leading-[14px] text-[#6F6F6F]">
            <a>Публичная оферта</a>
            <a>Пользовательское соглашение</a>
          </div>

          <div className="flex items-center gap-2 rounded-3xl bg-[#2E2E2E] pb-[3px] pl-[16px] pr-[3px] pt-[3px] text-[12px]">
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
