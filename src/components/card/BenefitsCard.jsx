import { AngleArrow } from "../../assets/icons";

export default function BenefitsCard({id, head, body}) {
  return (
    <div className="grid gap-[30px] bg-white-1 rounded-[10px] desktop:p-[40px] p-[30px] text-grey-7 shadow-sm">
        <h1 className=" monitor:text-[80px] desktop:text-[60px] text-[50px] text-end font-extrabold py-0 leading-none">0{id}</h1>
        <div className="">
            <h1 className=" monitor:text-[24px] text-[20px] font-semibold leading-loose mb-2">{head}</h1>
            <p className=" monitor:text-[18px] text-[16px] text-grey-5">{body}</p>
        </div>
        <div className="flex items-center justify-end min-w-[54px]">
            <img className=" monitor:w-[74px] w-[54px]" src={AngleArrow} alt="" />
        </div>
    </div>
  )
}
