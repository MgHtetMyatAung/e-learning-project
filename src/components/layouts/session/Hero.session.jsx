import { Adobe, Amazon, Netflix, Notion, Play, Spotify, Thander, TripleStick, Zapier, Zoom } from "../../../assets/icons"
import { Media } from "../../../assets/images"

export default function HeroSession() {
  return (
    <div>
      {/* hero session start  */}
      <div className="flex flex-col items-center desktop:mt-[5rem] mt-[60px] w-full desktop:gap-[50px] gap-[30px] laptop:mb-[120px] mb-[60px]">
        <div className=" grid gap-[20px]">
          <div className="relative flex justify-center">
            <div className="absolute desktop:top-[-2rem] desktop:left-[-2rem] top-[-30px] left-[-8px]">
              <img className=" w-[39px]" src={TripleStick} alt="" />
            </div>
            <div className="flex items-center shadow-sm bg-white-2 w-fit desktop:ps-[12px] ps-2 pe-3 desktop:pe-[24px] desktop:py-[12px] py-[10px] rounded-[11px] gap-[10px]">
              <img className=" desktop:w-[64px] w-[44px]" src={Thander} alt="" />
              <h1 className=" monitor:text-[48px] desktop:text-[36px] tablet:text-[28px] font-medium text-grey-8"><span className=" text-orange-8">Unlock</span> Your Creative Potential</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className=" monitor:text-[38px] desktop:text-[28px] text-[24px] font-semibold text-center">with Online Design and Development Courses.</h1>
            <h1 className=" text-[15px] text-center">Learn from Industry Experts and Enhance Your Skills.</h1>
          </div>
        </div>
        <div className="flex gap-[12px]">
          <button className=" shadow text-white-1 px-[20px] py-[14px] rounded-[8px] bg-orange-8 text-[14px]">Explore Courses</button>
          <button className=" shadow px-[20px] py-[14px] rounded-[8px] bg-white-1 text-[14px]">View Pricing</button>
        </div>  
      </div>
      {/* hero session end  */}

      {/* media start  */}
      <div className="flex desktop:p-[20px] p-[10px] justify-around rounded-[12px] shadow-sm bg-white-1 my-[3rem]">
        <div className=" desktop:px-[40px] desktop:py-[15px] px-[20px] py-[5px] border-r-2 border-white-3  ">
          <img className=" tablet:h-[34px] h-[17px] " src={Zapier} alt="" />
        </div>
        <div className=" desktop:px-[40px] desktop:py-[15px] px-[20px] py-[5px] border-r-2 border-white-3">
          <img className=" tablet:h-[34px] h-[17px]" src={Spotify} alt="" />
        </div>
        <div className=" desktop:px-[40px] desktop:py-[15px] px-[20px] py-[5px] border-r-2 border-white-3">
          <img className=" tablet:h-[34px] h-[17px]" src={Zoom} alt="" />
        </div>
        <div className=" desktop:px-[40px] desktop:py-[15px] px-[20px] py-[5px] border-r-2 border-white-3 hidden tablet:block">
          <img className=" h-[34px]" src={Amazon} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3 hidden desktop:block">
          <img className=" h-[34px]" src={Adobe} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3 hidden desktop:block">
          <img className=" h-[34px]" src={Notion} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] hidden desktop:block">
          <img className=" h-[34px]" src={Netflix} alt="" />
        </div>
      </div>
      
      <div className="relative flex justify-center">
        <div className="absolute top-[45%] z-10">
          <img className=" w-[54px]" src={Play} alt="" />
        </div>
        <div className=" brightness-75">
          <img className=" z-0 desktop:w-[1280px] laptop:w-[1000px] tablet:w-[740px] w-[340px] rounded-[10px]" src={Media} alt="" />
        </div>
      </div>
      {/* media end  */}
    </div>
  )
}
