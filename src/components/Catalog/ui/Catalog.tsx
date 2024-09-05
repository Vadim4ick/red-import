import { Container } from "@/shared/ui/container";
import { Filters } from "./Filters";

const Catalog = () => {
  return (
    <section className="bg-[#F5F5F5] pb-[96px] pt-[64px]">
      <Container>
        <h2 className="heading-two text-center">Каталог техники</h2>

        <div className="pt-[64px]">
          <Filters />
        </div>
      </Container>
    </section>
  );
};

export { Catalog };
