export default function Testimonials({head, src, name}) {
  return (
    <div className="">
        <div className=" desktop:p-[50px] p-[20px] rounded-t-[8px] bg-white-1">
            <h1 className=" text-[15px] text-grey-5">{head}</h1>
        </div>
        <div className="p-[20px] rounded-b-[8px] bg-white-2 flex justify-between">
            <div className="flex items-center gap-3">
                <img className=" w-[50px] h-[50px] object-cover rounded-md" src={src} alt="" />
                <h1 className="">{name}</h1>
            </div>
            <div className="">
                <h1 className="bg-white-4 px-[24px] py-[10px] w-full rounded-[8px] text-[13px] ">Read Full Story</h1>
            </div>
        </div>
    </div>
  )
}
