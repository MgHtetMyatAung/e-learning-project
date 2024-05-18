import Lesson from "./Lesson";

export default function CurriculumCard({ curr, i }) {
  return (
    <div className="flex flex-col bg-white-1 desktop:p-[50px] laptop:p-[40px] p-[30px] rounded-[12px] shadow  desktop:gap-[50px] laptop:space-y-0 space-y-[30px]">
      <h6 className="text-grey-7 font-[700] desktop:text-[80px] desktop:leading-[24px] laptop:text-[60px] laptop:leading-[24px] text-[50px] leading-[24px] text-right">0{i + 1}</h6>
      <h5 className="font-[600] text-[#333] desktop:text-[24px] desktop:leading-[36px] laptop:text-[20px] laptop:leading-[30px] text-[18px] leading-[27px] capitalize">
        {curr.title}
      </h5>
      <ul className="flex flex-col desktop:gap-[20px] space-y-[16px]">
        {curr.lessons.map((lesson, i) => (
          <Lesson key={i} lesson={lesson} i={i} />
        ))}
      </ul>
    </div>
  );
}
