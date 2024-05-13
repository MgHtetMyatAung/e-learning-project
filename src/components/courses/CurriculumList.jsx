import { courseDetailContainer } from "../../assets/images/courses";
export default function CurriculumList({ children }) {
  return (
    <>
      <div className="mb-[80px]">
        <img className="w-full shadow rounded-[8px]" src={courseDetailContainer} alt="cover img" />
      </div>
      {/* curri list  */}
      <div className="grid laptop:grid-cols-2 grid-cols-1 desktop:gap-[30px] gap-[20px] ">
        {/* single  curri */}
        {children}
     
      </div>
    </>
  );
}
