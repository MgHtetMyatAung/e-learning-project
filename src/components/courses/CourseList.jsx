import './course-list'
export default function CourseList({children}){
    return (
        <div className="laptop:py-16 py-12 space-y-10">
        {/* signle course  */}
         {children}
        </div>
    )
}