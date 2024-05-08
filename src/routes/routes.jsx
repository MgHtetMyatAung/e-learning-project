import { AboutUsPage, HomePage, LoginPage, SignUpPage } from "../pages";

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
  },
  {
    path: "/sign-up",
    element: <SignUpPage/>
  }
  // add others
];
