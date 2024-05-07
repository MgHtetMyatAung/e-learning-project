import { AboutUsPage, HomePage ,CoursesPage,CourseDetail, ContactUs} from "../pages";

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
  },{
    path : "/contactUs",
    element : <ContactUs/>
  }
  // add others
];
