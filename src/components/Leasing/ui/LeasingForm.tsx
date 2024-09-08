"use client";

import { Input } from "@/shared/ui/input";
import { Slider } from "./RangeSlider";
import { formatNumber, formatPrice } from "@/shared/lib/utils";
import { useState } from "react";

const LeasingForm = () => {
  const [price, setPrice] = useState(500000);
  const [contribution, setContribution] = useState(0);
  const [term, setTerm] = useState(12);
  const [percent, setPercent] = useState(0);

  const updatePrice = (newPrice: number) => {
    setPrice(newPrice);
  };

  const updateContribution = (newContribution: number) => {
    setContribution(newContribution);
  };

  const updateTerm = (newTerm: number) => {
    setTerm(newTerm);
  };

  const updatePercent = (newPercent: number) => {
    setPercent(newPercent);
  };

  return (
    <div className="flex max-w-[625px] flex-col gap-[63px]">
      <div className="flex items-center justify-between gap-[36px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Стоимость имущества (руб.)
          </p>

          <Slider
            min={500000}
            max={30000000}
            step={50000}
            value={price}
            onValueChange={updatePrice}
            marks={[500000, 10000000, 15000000, 20000000, 25000000]}
            formatLabel={(val) => `${formatNumber(val)}`}
            // label={true}
          />
        </div>

        <Input
          readOnly
          value={`${formatPrice(price)} руб.`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Первоначальный взнос
          </p>

          <Slider
            min={0}
            max={49}
            step={1}
            value={contribution}
            onValueChange={updateContribution}
            // label={true}
            minMaxLabel={true}
            formatLabel={(val) => `${val}%`}
          />
        </div>

        <Input
          readOnly
          value={`${contribution} %`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Срок договора
          </p>

          <Slider
            min={12}
            max={72}
            step={1}
            value={term}
            onValueChange={updateTerm}
            marks={[12, 24, 36, 48, 60]}
            formatLabel={(val) => `${val} мес.`}
            // label={true}
          />
        </div>

        <Input
          readOnly
          value={`${term} месяцев`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Процентная ставка
          </p>

          <Slider
            min={0}
            max={40}
            step={1}
            value={percent}
            onValueChange={updatePercent}
            // label={true}
            minMaxLabel={true}
            formatLabel={(val) => `${val}%`}
          />
        </div>

        <Input
          readOnly
          value={`${percent} %`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>
    </div>
  );
};

export { LeasingForm };
