import { Cross, Right } from "../../assets/icons";
import AccessCard from "./AccessCard";
import NotAccessCard from "./NotAccessCard";

export default function FeeCard({plan, fee, access, notAccess}) {
  return (
    <div className=" bg-white-2 shadow-inner rounded-[8px] p-[20px] grid grid-cols-1 desktop:gap-[3rem] gap-4">
      <div className="border bg-orange-1 border-orange-4 py-[10px] text-center rounded-[4px]">
        <h1>{plan}</h1>
      </div>
      <div className="">
        <h1 className=" text-[60px] font-semibold text-center">${fee}<span className="text-[16px] font-normal text-grey-5">/month</span></h1>
      </div>
      <div className="">
        <div className="bg-white-1 p-[20px] rounded-t-[14px] grid gap-[1rem]">
          <h1 className="my-4 text-center ">Available Features</h1>

          {
            access && access.map((access, index)=>{
              return <AccessCard key={index} src={Right} text={access}/>
            })
          }
          {
            notAccess && notAccess.map((notAccess, index)=>{
              return <NotAccessCard key={index} src={Cross} text={notAccess}/>
            })
          }
          
        </div>
        <button className="w-full py-[18px] rounded-b-[8px] text-center bg-orange-8 text-white-1 text-[15px]">Get Started</button>
      </div>
      
    </div>
  )
}
