export default function InfoCard({head, body}) {
  return (
    <div className=" text-grey-8 desktop:mb-[5rem] mb-[3rem]">
        <h1 className=" laptop:text-[38px] text-[28px] font-semibold mb-4">{head}</h1>
        <div className="grid grid-cols-1 gap-8 desktop:grid-cols-3">
            <div className="col-span-2">
                <p className=" laptop:text-[16px] text-[14px] text-grey-5">{body}</p>
            </div>
            <div className="flex desktop:justify-end ">
                <button className="px-[20px] text-[14px] py-[14px] h-fit rounded-[6px] shadow-sm cursor-pointer bg-white-1">View All</button>
            </div>
        </div>
    </div>
  )
}
