import { Hero } from "../../components/courses";
import { Container } from "../../components/layouts";

export default function Courses() {
  const title = "Online Courses on Design and Development";
  const content =
    "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.";
  return (
    <Container>
      <Hero title={title} content={content} />
    </Container>
  );
}
