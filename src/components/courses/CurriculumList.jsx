import { courseDetailContainer } from "../../assets/images/courses";
export default function CurriculumList({ children }) {
  return (
    <>
      <div className="py-20">
        <img src={courseDetailContainer} alt="cover img" />
      </div>
      {/* curri list  */}
      <div className="grid laptop:grid-cols-2 grid-cols-1 gap-5">
        {/* single  curri */}
        {children}
     
      </div>
    </>
  );
}
