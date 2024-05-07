import {
  AboutUsPage,
  HomePage,
  CoursesPage,
  CourseDetail,
  LoginPage,
  SignUpPage,
} from "../pages";

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
    path: "courses",
    element: <CoursesPage />,
  },
  {
    path: "courses/:courseId",
    element: <CourseDetail />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign up",
    element: <SignUpPage />,
  },
  // add others
];
