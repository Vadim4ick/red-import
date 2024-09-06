import Image from "next/image";
import { TCasesItem } from "../model/mockData";
import { useMedia } from "@/shared/hooks/useMedia";

const CasesItem = ({ item }: { item: TCasesItem }) => {
  const isMobile = useMedia(768);

  return (
    <article className="flex flex-col gap-[20px] max-mobile:items-center">
      <Image
        src={item.img}
        alt="image"
        width={isMobile ? 320 : 348}
        height={isMobile ? 426 : 401}
        className="bg-black"
      />

      <p className="text-[17px] font-light leading-[24px] text-[#5A5A5A] max-mobile:max-w-[320px]">
        {item.text}
      </p>
    </article>
  );
};

export { CasesItem };
