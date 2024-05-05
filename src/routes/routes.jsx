import { AboutUsPage, HomePage, LoginPage } from "../pages";

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
    path: "/login",
    element: <LoginPage />
  }
  // add others
];
