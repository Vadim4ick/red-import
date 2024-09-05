import { advantagesData } from "../model/mockData";
import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";

const AdvantagesScrollSlider = () => {
  return (
    <div className="flex gap-[20px] overflow-x-auto">
      {advantagesData.map((el) => {
        return <AdvantagesScrollSlide key={el.id} item={el} />;
      })}
    </div>
  );
};

export { AdvantagesScrollSlider };
