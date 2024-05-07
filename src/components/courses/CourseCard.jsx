import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="desktop:p-12 p-8  rounded-[12px] bg-white-1 space-y-5 shadow">
      {/* title and content  */}
      <div className="flex gap-8 laptop:justify-center laptop:items-center laptop:flex-row flex-col">
        <div className="flex-1 space-y-2">
          <h6 className="font-[600] text-grey-7 capitalize">{course.title}</h6>
          <p className="text-grey-4">{course.content}</p>
        </div>
        <div className="text-left">
          <NavLink
            to={`/courses/${course.course_id}`}
            className="text-grey-7 justify-start laptop:font-normal font-semibold"
          >
            View Course
          </NavLink>
        </div>
      </div>
      {/* cousre cover images  */}
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="">
            <img
              src={`/src/assets/images/courses/${course.img_name}${i + 1}.png`}
              alt={`${course.img_name}${i+1}`}
            />
          </div>
        ))}
      </div>
      {/* some stats  */}
      <div className="flex justify-between px-2 laptop:flex-row flex-col">
        <div className="space-x-7 text-grey-4">
          <span>
            {course.posted_date} week{course.posted_date > 1 ? "s" : ""}
          </span>
          <span>{course.difficulty}</span>
        </div>

        <h6 className="font-semibold text-grey-7">By {course.instructor}</h6>
      </div>
      {/* Curriculum   */}
      <div className=" border border-white-5 rounded-lg">
        <h6 className="text-grey-7 p-5 border-b border-b-white-5">Curriculum</h6>
        <ul className="grid grid-cols-5 laptop:gap-5">
          {course.curriculums.map((curriculum, i) => (
            <li key={i} className={`laptop:col-span-1 col-span-5 p-5 space-y-2 ${(course.curriculums.length -1)!= i ? 'laptop:border-r laptop:border-r-white-5 laptop:border-b-0  border-b border-b-white-5' : ''} `}>
              <h6 className="text-3xl font-bold">0{i + 1}</h6>
              <p className="text-grey-4 laptop:text-base text-sm">{curriculum.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
