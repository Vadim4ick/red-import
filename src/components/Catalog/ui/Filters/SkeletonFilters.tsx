import { Skeleton } from "@/shared/ui/skeleton";

const SkeletonFilters = () => {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6 border-b border-[#8F8F8F] pb-[36px] max-tablet:grid-cols-2 max-mobile:grid-cols-1">
      <div className="flex flex-col gap-[12px] max-tablet:col-span-full">
        <Skeleton className="h-[24px] w-[351px]" />

        <Skeleton className="h-[58px] w-[351px]" />
      </div>

      <div className="flex flex-col gap-[12px] max-tablet:col-span-full">
        <Skeleton className="h-[24px] w-[351px]" />

        <Skeleton className="h-[58px] w-[351px]" />
      </div>

      <div className="flex flex-col gap-[12px] max-tablet:col-span-full">
        <Skeleton className="h-[24px] w-[351px]" />

        <Skeleton className="h-[58px] w-[351px]" />
      </div>
    </div>
  );
};

export { SkeletonFilters };
