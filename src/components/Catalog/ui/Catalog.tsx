import { Container } from "@/shared/ui/container";
import { Filters } from "./Filters";
import { mockDataItems } from "@/shared/const";
import { CatalogItem } from "./CatalogItem";
import { Button } from "@/shared/ui/button";

const Catalog = () => {
  return (
    <section className="bg-[#F5F5F5] pb-[96px] pt-[64px]">
      <Container>
        <h2 className="heading-two text-center">Каталог техники</h2>

        <div className="pt-[64px]">
          <Filters />
        </div>

        <div className="flex w-full flex-col items-center gap-[48px]">
          {mockDataItems.map((item) => (
            <CatalogItem key={item.id} item={item} />
          ))}

          <Button
            className="flex h-[42px] w-[210px] text-[13px] leading-[16px]"
            variant={"secondary"}
          >
            Показать еще
          </Button>
        </div>
      </Container>
    </section>
  );
};

export { Catalog };
