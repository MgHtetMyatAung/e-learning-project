import { useEffect, useState } from "react";
import { FeeCard } from "../../card";
export default function PriceSession({monthly, yearly}) {

    const [update, setUpdate] = useState(monthly);  
    const [click, setClick] = useState("monthly");

    useEffect(() => {
        if (click === "monthly") {
        setUpdate(monthly);
        }else{
        setUpdate(yearly);
        }
    },[click]);

  return (
    <div className="">
        <div className="flex justify-center mb-[2rem]">
            <div className="flex bg-white-1 gap-4 rounded-[8px] p-[12px] h-fit text-grey-5">
                <button onClick={() => click === 'yearly' && setClick('monthly')} className={` ${click === "monthly" ? 'bg-orange-8 text-white-1' : 'text-grey-5'} px-5 text-[15px] py-2 h-fit cursor-pointer rounded-[5px]`}>Monthly</button>
                <button onClick={() => click === 'monthly' && setClick('yearly')} className={`${click === "yearly" ? 'bg-orange-8 text-white-1': 'text-grey-5'} px-5 text-[15px] py-2 h-fit cursor-pointer rounded-[5px]`}>Yearly</button>
            </div>
        </div>
        <div className=" bg-white-1 rounded-[12px] tablet:p-[40px] desktop:p-[80px] p-[20px] grid laptop:grid-cols-2 grid-cols-1 gap-8">
            <FeeCard {...update.normal}/>
            <FeeCard {...update.pro}/>
        </div>
    </div>
  )
}
