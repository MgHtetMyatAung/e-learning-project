import { useParams } from "react-router";
import { courses } from "../../components/courses/course-list";
import { Container } from "../../components/layouts";
import { Hero,CurriculumList, CurriculumCard } from "../../components/courses";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.course_id === courseId);
  return (
    <Container>
      <Hero title={course.title} content={course.content} />
      <CurriculumList >
      {course.curriculums.map((curr, i) => (
         <CurriculumCard key={i} curr={curr} i={i}/>
        ))}
      </CurriculumList>
    </Container>
  );
}
