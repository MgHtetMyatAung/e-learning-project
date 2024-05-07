export default function Info_card({head, body}) {
  return (
    <div className=" text-grey-8 desktop:mb-[5rem] mb-[3rem]">
        <h1 className="text-[30px] font-semibold mb-4">{head}</h1>
        <div className="grid grid-cols-1 gap-8 desktop:grid-cols-3">
            <div className="col-span-2">
                <p className=" desktop:text-[15px] text-grey-5">{body}</p>
            </div>
            <div className="flex desktop:justify-end ">
                <button className="px-5 text-[18px] py-3 h-fit rounded shadow-sm cursor-pointer bg-white-1">View All</button>
            </div>
        </div>
    </div>
  )
}
