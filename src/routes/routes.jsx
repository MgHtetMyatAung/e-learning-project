import { AboutUsPage, HomePage ,CoursesPage} from "../pages";

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
  }
  // add others
];
