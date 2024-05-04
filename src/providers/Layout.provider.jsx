/* eslint-disable react/prop-types */
import { Footer, Header } from "../components/layouts";

export default function LayoutProvider({ children }) {
  return (
    <main className=" bg-white-3 font-bevi">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
