export default function NotAccess_card({src, text}) {
  return (
    <div className="shadow bg-white-1 rounded-[8px] grid grid-cols-5 p-[12px]">
        <div className="">
            <img className="w-[25px] " src={src} alt="" />
        </div>
        <h1 className="text-[13px] text-grey-5 col-span-4 ">{text}</h1>
    </div>
  )
}