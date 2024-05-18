import "../../data/CourseList";
export default function CourseList({ children }) {
  return (
    <div className="flex flex-col desktop:gap-[50px] laptop:gap-[40px] gap-[20px]">
      {/* signle course  */}
      {children}
    </div>
  );
}
