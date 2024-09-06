import { Container } from "@/shared/ui/container";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white pb-[96px] pt-[88px] max-tablet:pt-[32px] max-mobile:pb-[64px]">
      <Container>
        <div className="flex items-end gap-[2px]">
          <div className="flex flex-col tablet:gap-[42px]">
            <h2 className="heading-two max-tablet:pb-[24px] max-mobileSmall:max-w-[248px]">
              <span className="text-buttonColor">Red</span>Import — ваш надежный
              партнер в мире спецтехники
            </h2>

            <div className="flex-shrink-0 max-tablet:pb-[16px] tablet:hidden">
              <Image
                src={"/img/about/1.png"}
                alt="about"
                width={360}
                height={258}
              />
            </div>
            <p className="text-[17px] font-light leading-[23.8px] text-[#5A5A5A]">
              Компания ООО «РЭД ИМПОРТ» входит в состав Уральского
              горнопромышленного холдинга (далее – УГПХ) - крупной
              многоотраслевой компании, которая объединяет горнодобывающие
              производства, предприятия, оказывающие услуги хранения и
              транспортировки грузов по территории России и странам ближнего
              зарубежья. В зону ответственности ООО «РЭД ИМПОРТ» входит
              внешнеэкономическая деятельность, а именно: импорт различных
              товаров по запросам крупных российских предприятий и экспорт
              различных сырьевых ресурсов. Наша команда имеет успешный опыт в
              поставке по параллельному импорту спецтехники VOLVO, KOMATSU, JCB
              (экскаваторы, погрузчики, бульдозеры, грейдеры,
              экскаваторы-погрузчики), СХ техники DEUTZ FAHR, CLAAS, NEW
              HOLLAND, XERION, BARGAM (тракторы, комбайны, опрыскиватели,
              запасные части к ним), седельных тягачей MAN, DAFF, MERCEDES,
              VOLVO, SCANIA, IVECO и др. видов.
            </p>
          </div>

          <div className="w-[495px] flex-shrink-0 max-tablet:hidden">
            <Image
              src={"/img/about/1.png"}
              alt="about"
              width={495}
              height={376}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { About };
