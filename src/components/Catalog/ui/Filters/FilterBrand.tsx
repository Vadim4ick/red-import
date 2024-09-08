import { cn } from "@/shared/lib/utils";
import { Checkbox } from "@/shared/ui/checkbox";
import { $activeBrands, $brands, setActiveBrands } from "@/store/filters";
import { useUnit } from "effector-react";

const FilterBrand = () => {
  const [brands, activeBrands] = useUnit([$brands, $activeBrands]);

  return (
    <div className="flex flex-col gap-[12px] max-tablet:col-span-full">
      <h3 className="heading-three">Марка</h3>

      <div className="flex flex-wrap gap-[6px]">
        {brands.map((brand) => (
          <label key={brand}>
            <Checkbox
              className="hidden"
              checked={activeBrands.includes(brand)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setActiveBrands([...activeBrands, brand]);
                } else {
                  const newActiveBrands = activeBrands.filter(
                    (activeBrand) => activeBrand !== brand,
                  );

                  setActiveBrands(newActiveBrands);
                }
              }}
              id={brand}
            />

            <span
              className={cn(
                "cursor-pointer rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] uppercase leading-[18px] text-[#5A5A5A]",
                {
                  "bg-defaultTextColor text-white":
                    activeBrands.includes(brand),
                },
              )}
            >
              {brand}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export { FilterBrand };
