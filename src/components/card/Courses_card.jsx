
export default function Courses_card({src, week, tag, author, head, body}) {
  return (
    <div>
      <div className="bg-white-1 rounded-[12px] desktop:p-[50px] p-[20px] grid text-grey-5 gap-[2rem] shadow">
          <div className="">
            <img className=" tablet:w-[650px] laptop:w-[1000px] object-cover rounded-[8px] tablet:h-[300px] h-[200px] w-[450px]" src={src} alt="" />
          </div>
          <div className="grid items-center grid-cols-1 gap-4 tablet:grid-cols-3">
            <div className="flex gap-[10px] col-span-2">
              <a className="py-[10px] px-[16px] rounded-[8px] shadow-inner">{week}</a>
              <a className="py-[10px] px-[16px] rounded-[8px] shadow-inner">{tag}</a>
            </div>
            <h1 className=" text-[15px] font-medium text-grey-8">By {author}</h1>
          </div>
          <div className="">
            <h1 className=" desktop:text-[24px] text-[18px] font-bold mb-4">{head}</h1>
            <p className=" desktop:text-[18px]">{body}</p>
          </div>
          <div className="">
            <button className=" bg-white-4 px-[24px] desktop:py-[18px] py-3 w-full rounded-[8px] text-[15px] cursor-pointer">Get it Now</button>
          </div>
        </div>
    </div>
  )
}
