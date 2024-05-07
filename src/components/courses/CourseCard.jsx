import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="laptop:p-12 tablet:p-8  p-5 rounded-[12px] bg-white-1 space-y-5 shadow">
      {/* title and content  */}
      <div className="flex gap-8 tablet:justify-center tablet:items-center tablet:flex-row flex-col">
        <div className="flex-1 space-y-2">
          <h6 className="font-[600] text-grey-7 capitalize">{course.title}</h6>
          <p className="text-grey-4">{course.content}</p>
        </div>
        <div className="text-left">
          <NavLink
            to={`/courses/${course.course_id}`}
            className="text-grey-7 justify-start tablet:font-normal font-semibold"
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
      <div className="flex justify-between px-2 tablet:flex-row flex-col">
        <div className="space-x-7 text-grey-4">
          <span>
            {course.posted_date} week{course.posted_date > 1 ? "s" : ""}
          </span>
          <span>{course.difficulty}</span>
        </div>

        <h6 className="font-semibold text-grey-7">By {course.instructor}</h6>
      </div>
      {/* Curriculum   */}
      <div className="tablet:p-3 p-1">
        <h6 className="text-grey-7">Curriculum</h6>
        <ul className="grid grid-cols-5 gap-6 laptop:px-3 tablet:px-0 py-10">
          {course.curriculums.map((curriculum, i) => (
            <li key={i} className="tablet:col-span-1 col-span-5 space-y-2">
              <h6 className="text-3xl font-bold">0{i + 1}</h6>
              <p className="text-grey-4 laptop:text-base tablet:text-sm">{curriculum.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
