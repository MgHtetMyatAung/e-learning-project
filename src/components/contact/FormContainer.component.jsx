import { LableInput } from ".";
import { Button } from "../button";
import { formData } from "../../data/Forms";

export default function FormContainer() {
  return (
    <div className="laptop:col-span-2 col-span-3 grid grid-cols-2 border-r  border-r-white-4 desktop:gap-[50px] desktop:p-[80px] laptop:p-[60px] laptop:gap-[40px] p-[30px] gap-[30px]">
      {/* single input and label  */}
      {formData.map((input, index) => (
        <LableInput
          key={index}
          label={input.label}
          placeholder={input.placeholder}
          col={input?.col}
          isTextArea={input?.isTextArea}
        />
      ))}

      <div className="col-span-2 text-center">
        <Button
          className={
            "bg-orange-8 font-[500] text-white-1 desktop:text-[18px] desktop:leading-[27px] laptop:w-auto w-full "
          }
          label={"Send your Message"}
        />
      </div>
    </div>
  );
}
