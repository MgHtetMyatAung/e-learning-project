import './course-list'
export default function CourseList({children}){
    return (
        <div className="tablet:py-24 py-14 space-y-10">
        {/* signle course  */}
         {children}
        </div>
    )
}