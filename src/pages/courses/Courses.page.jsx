import { Hero, CourseList, CourseCard } from "../../components/courses";
import { courses } from "../../data/CourseList";
import { Container } from "../../components/layouts";

export default function Courses() {
  const title = "Online Courses on Design and Development";
  const content =
    "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.";
  return (
    <Container>
      <Hero title={title} content={content} />

      <CourseList>
        {courses.map((course, i) => (
          <CourseCard course={course} key={i} />
        ))}
      </CourseList>
    </Container>
  );
}
