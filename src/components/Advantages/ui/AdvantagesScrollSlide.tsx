import { GetAdvantagesQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

const AdvantagesScrollSlide = ({
  item,
}: {
  item: GetAdvantagesQuery["advantages"][0];
}) => {
  return (
    <article className="w-[440px] flex-shrink-0 flex-grow-0 bg-[#F3F3F3] pb-[30px] pl-[32px] pr-[39px] pt-[32px] max-mobile:w-full max-mobile:p-[32px]">
      <img src={pathImage(item.icon.id)} alt="advantages" />

      <div className="flex flex-col gap-6 pt-6">
        <p className="text-[20px] font-medium leading-[24px]">{item.title}</p>

        <p className="text-[15px] font-light leading-[18px] text-[#5A5A5A]">
          {item.description}
        </p>
      </div>
    </article>
  );
};

export { AdvantagesScrollSlide };
