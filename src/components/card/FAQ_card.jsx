import { Cross_color, Plus, Right_circle_arrow } from "../../assets/icons";

export default function FAQ_card({ id, head, body, selected_id, selectedHandel }) {

    const isActive = selected_id === id;
  return (
    <div className=" bg-white-1 rounded-[8px] shadow-md px-[30px] py-[20px] grid gap-[2rem]">
        <div className="grid grid-cols-5 gap-[1rem]">
            <h1 className="col-span-4 font-semibold text-grey-8 ">{head}</h1>
            <div className="flex items-stretch justify-end">
                <button onClick={() => selectedHandel(id)}>
                    <img className=" w-[40px] " src={ !isActive ? Plus : Cross_color} alt="" />
                </button>
            </div>
        </div>
        <div className={`${ !isActive ?  'hidden' : ""} grid gap-[2rem]`}>
            <div className="border-t border-t-white-5 pt-[30px]">
                <p className=" text-grey-5">{body}</p>
            </div>
            <div className="grid grid-cols-6 bg-white-4 py-[10px] text-grey-7 px-[20px] rounded-[8px]">
                <h1 className=" text-[15px] col-span-5 items-center gap-4">Enrollment Process for Different Courses</h1>
                <div className="flex justify-end ">
                    <img className=" w-[40px] " src={Right_circle_arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
