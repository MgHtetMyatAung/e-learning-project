import { clock } from "../../assets/icons";

export default function Lesson({ lesson, i }) {
  function calcDurationFromMinute(duration) {
    return lesson.duration >= 60
      ? lesson.duration === 60
        ? `${lesson.duration / 60} hour`
        : `${lesson.duration / 60} hour ${lesson.duration % 60} minutes`
      : `${lesson.duration} minutes`;
  }
  return (
    <li className="flex justify-between laptop:items-center laptop:flex-row flex-col rounded-[8px] border border-white-4  hover:ring hover:ring-orange-4 hover:border hover:border-orange-6 transition-all duration-500 desktop:px-[30px] desktop:py-[24px] p-[24px] space-y-[24px]">
      <div className="space-y-1 flex-1">
        <h6 className="text-grey-7 font-[500] desktop:text-[20px]  desktop:leading-[30px] text-[16px]  leading-[24px]">
          {lesson.name}
        </h6>
        <p className="text-grey-4 desktop:text-[18px] desktop:leading-[27px] text-[14px] leading-[21px]">
          Lesson 0{i + 1}
        </p>
      </div>
      <div className="flex">
        <div className=" flex items-center  bg-white-5  desktop:py-[12px] desktop:px-[14px] p-[10px] gap-[4px]  rounded-[8px] hover:bg-orange-4 ">
          <img className="" src={clock} alt="clock" />
          <span className="text-grey-4 font-[400] desktop:text-[18px] text-[14px]">
            {calcDurationFromMinute(lesson.duration)}
          </span>
        </div>
      </div>
    </li>
  );
}
