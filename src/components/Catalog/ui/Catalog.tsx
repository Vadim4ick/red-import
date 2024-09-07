import { Container } from "@/shared/ui/container";
import { Filters } from "./Filters";
import { CatalogItems } from "./CatalogItems/CatalogItems";

const Catalog = () => {
  return (
    <section className="bg-[#F5F5F5] pb-[96px] pt-[64px] max-mobile:pb-[64px] max-mobile:pt-[32px]">
      <Container>
        <h2 className="heading-two text-center">Каталог техники</h2>

        <div className="pt-[64px] max-mobile:pt-[32px]">
          <Filters />
        </div>

        <CatalogItems />
      </Container>
    </section>
  );
};

export { Catalog };
