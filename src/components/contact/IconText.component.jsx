import { envlope } from "../../assets/icons";

export default function IconText({ icons = [], label }) {
  return (
    <div className="border border-white-4  rounded-[8px] p-[30px] flex flex-col items-center gap-[20px] ">
      <div className="flex gap-4">
        {icons.map((icon, i) => (
          <div key={i} className="desktop:p-[14px] bg-white-4 rounded">
            <img className="h-5 w-5" src={icon} alt="icon" />
          </div>
        ))}
      </div>
      <p className="text-grey-5 font-[400] desktop:text-[18px] desktop:leading-[27px] laptop:text-[16px] laptop:leading-[24px] text-[14px] leading-[21px]">{label}</p>
    </div>
  );
}
