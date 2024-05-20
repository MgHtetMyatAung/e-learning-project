import { envlope } from "../../assets/icons";

export default function IconText({ icons = [], label }) {
  return (
    <div className="border border-white-4  rounded-[8px] p-[30px] flex flex-col items-center gap-[20px] ">
      <div className="flex gap-4">
        {icons.map((icon, i) => (
          <div key={i} className="flex justify-center items-center desktop:p-[14px] p-[12px] bg-white-4 rounded  desktop:w-[52px] desktop:h-[52px] w-[44px] h-[44px] ">
            <img className="" src={icon} alt="icon" />
          </div>
        ))}
      </div>
      <p className="text-grey-5 font-[400] desktop:text-[18px] desktop:leading-[27px] laptop:text-[16px] laptop:leading-[24px] text-[14px] leading-[21px] text-center">{label}</p>
    </div>
  );
}
