import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

const FormFeedbackForm = ({
  type = "default",
}: {
  type?: "default" | "bid" | "catalog";
}) => {
  return (
    <form className="flex w-full max-w-[408px] flex-col">
      <div
        className={cn("flex flex-col gap-[10px] max-mobile:gap-2", {
          "gap-[14px]": type === "bid" || type === "catalog",
        })}
      >
        <Input
          placeholder="Имя или Компания"
          className={cn(
            "h-[56px] w-full border-none px-[17px] text-center text-[15px] font-light leading-[21px] max-mobile:h-[48px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]",
            {
              "h-[55px]": type === "bid" || type === "catalog",
            },
          )}
        />

        <div
          className={cn("flex gap-[10px] max-mobile:gap-2", {
            "gap-[14px]": type === "bid" || type === "catalog",
            "flex-col": type === "catalog",
          })}
        >
          <Input
            placeholder="Телефон"
            className={cn(
              "h-[56px] w-full border-none px-[17px] text-center text-[15px] font-light leading-[21px] max-mobile:h-[48px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]",
              {
                "h-[55px]": type === "bid" || type === "catalog",
              },
            )}
          />

          <Input
            placeholder="E-mail"
            className={cn(
              "h-[56px] w-full border-none px-[17px] text-center text-[15px] font-light leading-[21px] max-mobile:h-[48px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]",
              {
                "h-[55px]": type === "bid" || type === "catalog",
              },
            )}
          />
        </div>

        <div className="bg-white py-[2px] pr-[4px]">
          {type !== "catalog" && (
            <Textarea
              className={cn(
                "custom-scrollbar__catalog min-h-[170px] resize-none max-mobile:min-h-[164px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]",
                {
                  "min-h-[164px] max-mobile:min-h-[160px]": type === "bid",
                },
              )}
              placeholder="Ваш вопрос или комментарий"
            />
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex w-full justify-center pb-[18px] pt-[15px] max-mobile:py-[12px]",
          {
            "pb-[8px] pt-[16px]": type === "bid" || type === "catalog",
          },
        )}
      >
        <p className="max-w-[372px] text-center text-[12px] font-light leading-[14px] text-[#888888]">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных
        </p>
      </div>

      <Button
        className={cn(
          "h-[56px] w-full bg-transparent max-mobile:h-[46px] max-mobile:font-normal",
          {
            "max-mobile:h-[48px]": type === "bid" || type === "catalog",
          },
        )}
        variant={"reverseDefault"}
      >
        Отправить
      </Button>
    </form>
  );
};

export { FormFeedbackForm };
