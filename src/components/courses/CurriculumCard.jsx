import Lesson from "./Lesson";

export default function CurriculumCard({curr,i}){
    return (
        <div  className="bg-white-1 p-10 shadow rounded-lg space-y-8">
        <h6 className="text-grey-7 text-5xl font-bold text-right">
          0{i + 1}
        </h6>
        <h5 className="font-semibold text-grey-5 text-lg capitalize">
          {curr.title}
        </h5>
        <ul className="space-y-6">
          {curr.lessons.map((lesson, i) => (
           <Lesson key={i} lesson={lesson} i={i}/>
          ))}
        </ul>
      </div>
    )
}