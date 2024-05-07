import { clock } from "../../assets/icons";

export default function Lesson({ lesson, i }) {
  function calcDurationFromMinute(duration) {
    return lesson.duration >= 60
      ? lesson.duration === 60
        ? `${lesson.duration / 60}hour`
        : `${lesson.duration / 60}hour ${lesson.duration % 60} minutes`
      : `${lesson.duration} minutes`;
  }
  return (
    <li className="flex justify-between laptop:items-center laptop:gap-1 gap-7 laptop:flex-row flex-col p-4  shadow rounded-lg border border-white-1   hover:ring hover:ring-orange-4 hover:border hover:border-orange-6 transition-all duration-500">
      <div className="space-y-1 ">
        <h6 className="text-grey-7">{lesson.name}</h6>
        <p className="text-grey-4">Lesson 0{i + 1}</p>
      </div>
      <div className="">
        <div className="laptop:block clear-both inline-block bg-white-5 py-2 laptop:px-3 laptop:px-6 px-4 rounded-lg space-x-2 hover:bg-orange-4 ">
          <img className=" float-left" src={clock} alt="clock" />
          <span className="text-grey-4">{calcDurationFromMinute(lesson.duration)}</span>
        </div>
      </div>
    </li>
  );
}
