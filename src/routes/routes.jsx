import { AboutUsPage, HomePage ,CoursesPage,CourseDetail} from "../pages";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path : "courses",
    element: <CoursesPage/>
  },{
    path : "courses/:courseId",
    element : <CourseDetail/>
  }
  // add others
];
