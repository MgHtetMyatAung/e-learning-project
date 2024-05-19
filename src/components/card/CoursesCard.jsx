
export default function CoursesCard({src, week, tag, author, head, body}) {
  return (
    <div>
      <div className="bg-white-1 rounded-[10px] laptop:p-[40px] p-[20px] grid text-grey-5 gap-[24px] shadow">
          <div className="">
            <img className=" w-full object-cover rounded-[8px] tablet:h-[300px] h-[267px] w-[450px]" src={src} alt="" />
          </div>
          <div className="grid items-center grid-cols-1 gap-4 tablet:grid-cols-3">
            <div className="flex gap-[10px] col-span-2">
              <a className="py-[10px] px-[16px] rounded-[8px] shadow-inner">{week}</a>
              <a className="py-[10px] px-[16px] rounded-[8px] shadow-inner">{tag}</a>
            </div>
            <h1 className=" text-[15px] font-medium text-grey-8">By {author}</h1>
          </div>
          <div className="">
            <h1 className=" laptop:text-[20px] text-[18px] font-bold mb-4">{head}</h1>
            <p className="text-[16px]">{body}</p>
          </div>
          <div className="">
            <button className=" bg-white-4 px-[24px] py-[14px] w-full rounded-[8px] text-[15px] cursor-pointer">Get it Now</button>
          </div>
        </div>
    </div>
  )
}
