import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="flex flex-col desktop:p-[50px] laptop:p-[40px] p-[24px]  desktop:rounded-[12px] laptop:rounded-[10px] rounded-[8px] bg-white-1 shadow-sm gap-[40px]">
      {/* upper 3 part title / images / due data container */}
      <div className="flex flex-col desktop:gap-[30px] gap-[28px]">
        {/* title and content  */}
        <div className="flex  laptop:justify-center laptop:items-center laptop:flex-row flex-col laptop:gap-[50px] gap-[40px]">
          <div className="flex-1 space-y-2 ">
            <h6 className="font-[600] text-grey-7 capitalize desktop:text-[24px] desktop:leading-[36px] laptop:text-[20px] laptop:leading-[30px] text-[18px] leading-[27px]">
              {course.title}
            </h6>
            <p className="text-grey-4 font-[400] desktop:text-[18px] desktop:leading-[27px] laptop:text-[16px] laptop:leading-[24px] text-[14px] leading-[21px]">
              {course.content}
            </p>
          </div>
          <div className="text-left">
            <NavLink
              to={`/courses/${course.course_id}`}
              className="text-grey-7 bg-white-2 border font-[500] border-white-4 justify-start  desktop:py-[18px] desktop:px-[24px] py-[14px] px-[16px] desktop:rounded-[8px] laptop:rounded-[6px]"
            >
              View Course
            </NavLink>
          </div>
        </div>
        {/* cousre cover images  */}
        <div className="grid grid-cols-3 desktop:gap-[30px] laptop:gap-[20px] gap-[10px] desktop:rounded-[8px] laptop:rounded-[6px] rounded-[4px]">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="">
              <img
                src={`/src/assets/images/courses/${course.img_name}${
                  i + 1
                }.png`}
                alt={`${course.img_name}${i + 1}`}
              />
            </div>
          ))}
        </div>
        {/* some stats  */}
        <div className="flex justify-between  laptop:flex-row flex-col gap-[20px]">
          <div className="space-x-[10px] text-grey-4 ">
            <span className="py-[10px] px-[16px] border border-white-4 bg-white-1 rounded-[8px] ">
              {course.posted_date} week{course.posted_date > 1 ? "s" : ""}
            </span>
            <span className="py-[10px] px-[16px] border border-white-4 bg-white-1 rounded-[8px]">{course.difficulty}</span>
          </div>

          <h6 className="font-[500] desktop:text-[20px] laptop:text-[18px] text-[16px] desktop:leading-[25.3px] text-grey-7">By {course.instructor}</h6>
        </div>
      </div>
      {/* Curriculum   */}
      <div className=" border border-white-4 rounded-lg">
        <h6 className="text-grey-7 font-[600] desktop:text-[22px] desktop:leading-[33px] laptop:text-[18px] laptop:leading-[27px] text-[16px] leading-[24px] desktop:py-[24px] desktop:px-[30px] laptop:py-[20px] laptop:px-[24px] py-[14px] px-[20px] border-b border-b-white-4">
          Curriculum
        </h6>
        <ul className="grid grid-cols-5 desktop:gap-[50px] gap-[20px] desktop:py-[30px] desktop:px-[50px]  laptop:py-[24px] laptop:px-[40px] p-[24px]">
          {course.curriculums.map((curriculum, i) => (
            <li
              key={i}
              className={`laptop:col-span-1 col-span-5 space-y-2  ${
                course.curriculums.length - 1 != i
                  ? "laptop:border-r laptop:border-r-white-4 laptop:border-b-0  border-b border-b-white-4 laptop:p-0 pb-[20px]"
                  : ""
              } `}
            >
              <h6 className="font-[800] text-grey-7 desktop:text-[50px] desktop:leading-[75px] laptop:text-[40px] laptop:leading-[60px] text-[30px] leading-[45px]">0{i + 1}</h6>
              <p className="font-[500] desktop:text-[18px] desktop:leading-[27px] laptop:text-[16px] laptop:leading-[24px]  text-[14px] leading-[21px] text-[#333333]  ">
                {curriculum.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
