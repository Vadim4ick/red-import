"use client";

import { calculateLeasingDetails, cn, formatPrice } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { toggleCatalogBidOpen } from "@/store/catalogBidModal";
import { $contribution, $percent, $price, $term } from "@/store/leasing";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

const LeasingForm = ({ className }: { className?: string }) => {
  const [price, contribution, term, percent] = useUnit([
    $price,
    $contribution,
    $term,
    $percent,
  ]);

  const [result, setResult] = useState({
    annualCostIncreasePercentage: "0",
    monthlyPayment: "0",
    totalContractAmount: "0",
  });

  useEffect(() => {
    const {
      annualCostIncreasePercentage,
      monthlyPayment,
      totalContractAmount,
    } = calculateLeasingDetails(price, contribution, term, percent);

    setResult({
      annualCostIncreasePercentage,
      monthlyPayment,
      totalContractAmount,
    });
  }, [contribution, percent, price, term]);

  return (
    <div
      className={cn(
        "h-fit bg-[#F3F3F3] px-[22px] py-4 max-mobile:px-[20px] max-mobile:py-[24px]",
        className,
      )}
    >
      <div className="flex flex-col gap-[6px]">
        <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
          Ежемесячный платёж:
        </p>

        <div className="text-[24px] font-semibold leading-[33px]">
          {formatPrice(parseInt(result.monthlyPayment))} руб.
        </div>
      </div>

      <div className="flex justify-between gap-1 pt-[22px] max-mobile:pt-[24px]">
        <div className="flex flex-col gap-[4px] text-[#5A5A5A]">
          <p className="text-[12px] leading-[17px]">Годовое удорожание:</p>

          <div className="text-[15px] font-semibold leading-[21px]">
            {result.annualCostIncreasePercentage}%
          </div>
        </div>

        <div className="flex flex-col gap-[4px] text-[#5A5A5A] tablet:pr-[22px]">
          <p className="text-[12px] leading-[17px]">Сумма договора:</p>

          <div className="text-[15px] font-semibold leading-[21px]">
            {formatPrice(parseInt(result.totalContractAmount))} руб.
          </div>
        </div>
      </div>

      <Button
        onClick={() => toggleCatalogBidOpen()}
        className="mt-[36px] h-[48px] w-full max-mobile:mt-[32px] max-mobile:h-[46px]"
      >
        Оставить заявку
      </Button>

      <p className="pt-[12px] text-[10px] font-light leading-[14px] text-[#5A5A5A] max-mobile:pt-[16px]">
        Стоимость предмета лизинга и приведенные расчеты через калькулятор
        являются предварительными. Для точного определения процентной ставки по
        договору, пожалуйста, обратитесь к менеджеру в вашем регионе.
        Калькулятор не следует применять для расчетов по 44-ФЗ и 223-ФЗ.
      </p>
    </div>
  );
};

export { LeasingForm };
