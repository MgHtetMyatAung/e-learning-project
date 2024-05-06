import { Cross, Right } from "../../assets/icons";
import Access_card from "./Access_card";
import NotAccess_card from "./NotAccess_card";

export default function Fee_card({plan, fee, access, notAccess}) {
  return (
    <div className=" bg-white-3 shadow-inner rounded-[8px] desktop:px-[20px] p-[20px] desktop:py-[50px] grid grid-cols-1 desktop:gap-[3rem] gap-4">
      <div className="border  bg-orange-3 border-orange-4 py-[10px] text-center rounded-[4px]">
        <h1>{plan}</h1>
      </div>
      <div className="">
        <h1 className=" text-[50px] font-semibold text-center">${fee}<span className="text-[15px] font-normal text-grey-5">/month</span></h1>
      </div>
      <div className="">
        <div className="bg-white-1 p-[20px] rounded-t-[8px] grid gap-[1rem]">
          <h1 className="my-4 text-center ">Available Features</h1>

          {
            access && access.map((access, index)=>{
              return <Access_card key={index} src={Right} text={access}/>
            })
          }
          {
            notAccess && notAccess.map((notAccess, index)=>{
              return <NotAccess_card key={index} src={Cross} text={notAccess}/>
            })
          }
          
        </div>
        <button className="w-full py-3 rounded-b-[8px] text-center bg-orange-8 text-white-1 text-[15px]">Get Started</button>
      </div>
      
    </div>
  )
}
