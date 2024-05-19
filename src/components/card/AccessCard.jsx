
export default function AccessCard({text, src}) {
  return (
    <div className="shadow bg-white-1 rounded-[6px] flex gap-[8px] p-[12px] items-center">
        <div className="min-w-[25px]">
            <img className="w-[25px]" src={src} alt="" />
        </div>
        <h1 className="text-[13px] text-grey-5">{text}</h1>
    </div>
  )
}
