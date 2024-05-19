import { InfoCard, CoursesCard } from "../../card"

export default function CourseSession({courses}) {
  return (
    <div className="">
        <InfoCard 
          head={"Our Courses"}
          body={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
        />

        <div className=" grid desktop:grid-cols-2 gap-[30px]">

          {
            courses && courses.map((course) => {
              return <CoursesCard key={course.id} {...course} />
            })
          }


        </div>
      </div>
  )
}
