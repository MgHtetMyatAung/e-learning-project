import {
  AboutUsPage,
  HomePage,
  CoursesPage,
  CourseDetail,
  LoginPage,
  SignUpPage,
  ContactUs,
  PricePage,
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
    path: "/pricing",
    element: <PricePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  // add others
];
