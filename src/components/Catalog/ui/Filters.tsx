import { Input } from "@/shared/ui/input";
import { RangeSlider } from "./RangeSlider";

const Filters = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-[12px]">
        <h3 className="heading-three">Марка</h3>

        <div className="flex flex-wrap gap-[6px]">
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            JCB
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            VOLVO
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            KOMATSU
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            DEUTZ FAHR
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            CLAAS
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            NEW HOLLAND
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Цена</h3>

        <div className="flex items-center gap-[3px] pb-[13px]">
          <Input type="tel" placeholder="3 500 000" />

          <p className="text-[#999999]">-</p>

          <Input type="tel" placeholder="14 900 000" />
        </div>

        <RangeSlider min={3500000} max={14900000} step={100000} />
      </div>

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Год выпуска</h3>

        <div className="flex items-center gap-[3px] pb-[13px]">
          <Input type="tel" placeholder="2001" />

          <p className="text-[#999999]">-</p>

          <Input type="tel" placeholder="2016" />
        </div>

        <RangeSlider min={2001} max={2016} step={1} />
      </div>
    </div>
  );
};

export { Filters };
