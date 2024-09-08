import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

const FormFeedbackForm = () => {
  return (
    <form className="flex w-full max-w-[408px] flex-col">
      <div className="flex flex-col gap-[10px] max-mobile:gap-2">
        <Input
          placeholder="Имя или Компания"
          className="h-[56px] w-full border-none px-[17px] text-center text-[15px] font-light leading-[21px] max-mobile:h-[48px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]"
        />

        <div className="flex gap-[10px] max-mobile:gap-2">
          <Input
            placeholder="Телефон"
            className="h-[56px] w-full border-none px-[17px] text-center text-[15px] font-light leading-[21px] max-mobile:h-[48px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]"
          />

          <Input
            placeholder="E-mail"
            className="h-[56px] w-full border-none px-[17px] text-center text-[15px] font-light leading-[21px] max-mobile:h-[48px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]"
          />
        </div>

        <Textarea
          className="min-h-[170px] resize-none max-mobile:min-h-[164px] max-mobile:px-[14px] max-mobile:text-[14px] max-mobile:leading-[19px]"
          placeholder="Ваш вопрос или комментарий"
        />
      </div>

      <div className="flex w-full justify-center pb-[18px] pt-[15px] max-mobile:py-[12px]">
        <p className="max-w-[372px] text-center text-[12px] font-light leading-[14px] text-[#888888]">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных
        </p>
      </div>

      <Button
        className="h-[56px] w-full bg-transparent max-mobile:h-[46px] max-mobile:font-normal"
        variant={"reverseDefault"}
      >
        Отправить
      </Button>
    </form>
  );
};

export { FormFeedbackForm };
