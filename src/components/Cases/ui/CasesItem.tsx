import Image from "next/image";
import { GetSuccessfulCasesQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

const CasesItem = ({
  item,
}: {
  item: GetSuccessfulCasesQuery["successfulCases"][0];
}) => {
  return (
    <article className="swiper-slide flex w-[350px] flex-shrink-0 flex-grow-0 flex-col gap-[20px] max-mobile:w-full max-mobile:items-start max-mobile:gap-3">
      <div className="relative h-[196px] max-mobile:w-full">
        <Image
          src={pathImage(item.img.id)}
          alt="image"
          fill
          className="w-[350px] bg-black object-cover max-mobile:w-full"
        />
      </div>

      <p className="text-[17px] font-light leading-[24px] text-[#5A5A5A] max-mobile:max-w-[320px]">
        {item.title}
      </p>
    </article>
  );
};

export { CasesItem };
