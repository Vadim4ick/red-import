import { Logo } from "@/shared/icons/Logo";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Phone } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between">
          <Link href={"/"}>
            <Logo className="max-h-[28px] max-w-[166px]" />
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[6px]">
              <Phone className="size-5 fill-buttonColor text-buttonColor" />

              <p className="text-[14px] font-medium leading-[18px]">
                +7 (918) 214-22-45
              </p>
            </div>

            <Button className="h-[42px] w-[188px]">Заказать звонок</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
