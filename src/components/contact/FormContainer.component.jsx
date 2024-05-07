import { LableInput } from ".";
import { Button } from "../button";

export default function FormContainer() {
  return (
    <div className="laptop:col-span-2 col-span-3 grid grid-cols-2 border-r laptop:p-20 p-10 border-r-white-5 gap-7">
      {/* single input and label  */}
      <LableInput label={"First Name"} placeholder={"Enter First Name"} />
      <LableInput label={"Last Name"} placeholder={"Enter Last Name"} />
      <LableInput label={"Email"} placeholder={"Enter your Email"} />
      <LableInput label={"Phone"} placeholder={"Enter Phone Number"} />
      <LableInput
        col={2}
        label={"Subject"}
        placeholder={"Enter Your Subject"}
      />
      <LableInput
        col={2}
        isTextArea={true}
        label={"Message"}
        placeholder={"Enter your Message here..."}
      />
      <div className="col-span-2 text-center mt-5">
        <Button
          className={
            "bg-orange-8 text-white-2 text-sm laptop:w-auto w-full py-5"
          }
          label={"Send your Message"}
        />
      </div>
    </div>
  );
}
