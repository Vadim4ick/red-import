import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

const LeasingForm = ({ className }: { className?: string }) => {
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
          34 152 руб.
        </div>
      </div>

      <div className="flex justify-between gap-1 pt-[22px] max-mobile:pt-[24px]">
        <div className="flex flex-col gap-[4px] text-[#5A5A5A]">
          <p className="text-[12px] leading-[17px]">Годовое удорожание:</p>

          <div className="text-[15px] font-semibold leading-[21px]">23.21%</div>
        </div>

        <div className="flex flex-col gap-[4px] text-[#5A5A5A] tablet:pr-[22px]">
          <p className="text-[12px] leading-[17px]">Сумма договора:</p>

          <div className="text-[15px] font-semibold leading-[21px]">
            500 000 руб.
          </div>
        </div>
      </div>

      <Button className="mt-[36px] h-[48px] w-full max-mobile:mt-[32px] max-mobile:h-[46px]">
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
