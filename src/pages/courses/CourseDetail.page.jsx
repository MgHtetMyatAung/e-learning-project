import { useParams } from "react-router";
import { courses } from "../../components/courses/course-list";
import { Container } from "../../components/layouts";
import { Hero } from "../../components/courses";
import { courseDetailContainer } from "../../assets/images/courses";
import { clock } from "../../assets/icons";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.course_id === courseId);
  console.log(course);
  return (
    <Container>
      <Hero title={course.title} content={course.content} />
      <div className="py-20">
        <img src={courseDetailContainer} alt="cover img" />
      </div>
      {/* curri list  */}
      <div className="grid tablet:grid-cols-2 grid-cols-1 gap-5">
        {/* single  curri */}
        <div className="bg-white-1 p-10 shadow rounded-lg space-y-8">
          <h6 className="text-grey-7 text-5xl font-bold text-right">01</h6>
          <h5 className="font-semibold text-grey-5 text-lg capitalize">Introduction to UI/UX design</h5>
          <ul className="p-5">
            <li className="flex justify-between items-center tablet:flex-row flex-col">
                <div>
                    <h6>Understanding uI/Ux design</h6>
                    <p>Lesson 01</p>
                </div>
                <div className="flex">
                    
                       <img src={clock} alt="" /> <span>45 minute</span>
                    
                </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
    
  );
}
