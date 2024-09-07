import { Skeleton } from "@/shared/ui/skeleton";

const SkeletonCatalogItem = () => {
  return (
    <article className="grid w-full grid-cols-[336px_1fr] gap-[30px] object-cover py-[32px] max-mobile:mt-[38px] max-mobile:grid-cols-1 max-mobile:gap-3 max-mobile:rounded-[4px] max-mobile:bg-white max-mobile:p-[6px] mobile:border-b mobile:border-[#8F8F8F]">
      <div className="relative h-[264px] max-mobile:h-[231px]">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex flex-col justify-between gap-2 max-mobile:gap-4">
        <div className="flex items-center justify-between gap-2 max-mobile:flex-col max-mobile:gap-[20px]">
          <div className="flex flex-col gap-[6px] max-mobile:items-center max-mobile:gap-[2px]">
            <Skeleton className="h-[46px] w-[210px]" />
          </div>

          <div className="flex flex-col gap-[6px] max-mobile:items-center max-mobile:gap-[2px] mobile:items-end">
            <Skeleton className="h-[46px] w-[210px]" />
          </div>
        </div>

        <div className="flex w-full items-end justify-between gap-2">
          <div className="flex w-full flex-col gap-2 pt-[27px] max-tablet:hidden max-mobile:pt-[31px]">
            <Skeleton className="h-[163px] w-[355px]" />
          </div>

          <div className="flex w-full flex-col items-end justify-end gap-2 max-mobile:items-center">
            <Skeleton className="h-[42px] w-[220px]" />
            <Skeleton className="h-[42px] w-[220px]" />
          </div>
        </div>
      </div>
    </article>
  );
};

export { SkeletonCatalogItem };
