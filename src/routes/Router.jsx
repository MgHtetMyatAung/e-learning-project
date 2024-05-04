import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { LayoutProvider } from "../providers";

export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, element }, id) => (
        <Route
          key={id}
          path={path}
          element={<LayoutProvider>{element}</LayoutProvider>}
        />
      ))}
    </Routes>
  );
}
