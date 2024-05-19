import { useEffect, useState } from "react";
import { FeeCard } from "../../card";

export default function FeeSession({monthly, yearly}) {

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
        <div className="grid grid-cols-1 gap-6 mb-[5rem] desktop:grid-cols-3">
          <div className="col-span-2 ">
              <h1 className="text-[28px] laptop:text-[38px] font-semibold mb-3">Our Pricing</h1>
              <p className=" text-[15px] text-grey-5">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          </div>
          <div className="flex items-end justify-center desktop:justify-end">
              <div className="flex bg-white-1 gap-4 rounded-[8px] p-[12px] h-fit text-grey-5">
                  <button onClick={() => click === 'yearly' && setClick('monthly')} className={` ${click === "monthly" ? 'bg-orange-8 text-white-1' : 'text-grey-5'} px-[24px] text-[15px] py-[12px] h-fit cursor-pointer rounded-[5px] translate-x-1 transform ease-linear delay-100`}>Monthly</button>
                  <button onClick={() => click === 'monthly' && setClick('yearly')} className={`${click === "yearly" ? 'bg-orange-8 text-white-1': 'text-grey-5'} px-[24px] text-[15px] py-[12px] h-fit cursor-pointer rounded-[5px] transform ease-linear delay-100`}>Yearly</button>
              </div>
          </div>
        </div>

        <div className=" bg-white-1 rounded-[12px] tablet:p-[40px] desktop:p-[80px] p-[20px] grid desktop:grid-cols-2 grid-cols-1 gap-8">
          <FeeCard {...update.normal}/>
          <FeeCard {...update.pro}/>
        </div>
      </div>
  )
}
