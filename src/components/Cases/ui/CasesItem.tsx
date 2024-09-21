import Image from "next/image";
import { useMedia } from "@/shared/hooks/useMedia";
import { GetSuccessfulCasesQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

const CasesItem = ({
  item,
}: {
  item: GetSuccessfulCasesQuery["successfulCases"][0];
}) => {
  const isMobile = useMedia(768);

  return (
    <article className="swiper-slide flex w-[350px] flex-shrink-0 flex-grow-0 flex-col gap-[20px] max-mobile:items-center">
      <Image
        src={pathImage(item.img.id)}
        alt="image"
        width={isMobile ? 320 : 348}
        height={isMobile ? 426 : 401}
        className="bg-black"
      />

      <p className="text-[17px] font-light leading-[24px] text-[#5A5A5A] max-mobile:max-w-[320px]">
        {item.title}
      </p>
    </article>
  );
};

export { CasesItem };
