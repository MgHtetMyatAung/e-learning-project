import { Cross_color, Plus, Right_circle_arrow } from "../../assets/icons";

export default function FAQCard({ id, head, body, selectedId, selectedHandel }) {

    const isActive = selectedId === id;
  return (
    <div className=" bg-white-1 rounded-[10px] shadow-md p-[24px] tablet:p-[40px] grid">
        <div className={`grid grid-cols-5 gap-[30px] ${ isActive && 'pb-[30px]'}`}>
            <h1 className="col-span-4 font-semibold text-grey-8 text-[18px]">{head}</h1>
            <div className="flex items-stretch justify-end w-full ">
                <button onClick={() => selectedHandel(id)}>
                    <img className=" w-[40px] " src={ !isActive ? Plus : Cross_color} alt="" />
                </button>
            </div>
        </div>
        <div className={`${ !isActive ?  'hidden' : ""} grid gap-[20px] overflow-hidden tablet:gap-[40px]`}>
            <div className="border-t border-t-white-5 pt-[20px] tablet:pt-[40px] overflow-hidden">
                <p className=" text-grey-5 text-[16px]">{body}</p>
            </div>
            <div className="grid grid-cols-6 bg-white-4 py-[12px] text-grey-7 px-[20px] rounded-[6px] items-center overflow-hidden">
                <h1 className=" text-[14px] tablet:text-[16px] col-span-5 items-center gap-4">Enrollment Process for Different Courses</h1>
                <div className="flex justify-end min-w-[40px]">
                    <img className=" w-[40px] tablet:w-[40px]" src={Right_circle_arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
