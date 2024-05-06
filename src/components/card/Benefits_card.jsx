import { AngleArrow } from "../../assets/icons";

export default function Benefits_card({number, head, body}) {
  return (
    <div className="grid gap-[1rem] bg-white-1 rounded-[12px] desktop:p-[50px] p-[30px] text-grey-7 shadow-sm">
        <h1 className=" desktop:text-[80px] text-[50px] text-end font-extrabold py-0 leading-none">{number}</h1>
        <div className="">
            <h1 className="text-[20px] font-semibold leading-loose mb-2">{head}</h1>
            <p className=" text-[15px] text-grey-5">{body}</p>
        </div>
        <div className="flex items-center justify-end ">
            <img className=" desktop:w-[74px] w-[54px]" src={AngleArrow} alt="" />
        </div>
    </div>
  )
}
