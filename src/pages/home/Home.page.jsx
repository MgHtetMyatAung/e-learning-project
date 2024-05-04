import { Adobe, Amazon, Netflix, Notion, Play, Spotify, Thander, TripleStick, Zapier, Zoom } from "../../assets/icons";
import { Media } from "../../assets/images";

export default function HomePage() {
  return(
    <div className="container mx-auto font-bevi grid gap-[6rem]">
      {/* hero session start  */}
      <div className="flex flex-col items-center mt-[5rem] w-full gap-[3rem]">
        <div className="relative flex justify-center">
          <div className="absolute top-[-2rem] left-[-2rem]">
            <img className=" desktop:w-[39px]" src={TripleStick} alt="" />
          </div>
          <div className="flex shadow-sm bg-white-2 w-fit ps-[20px] pe-[30px] py-[14px] rounded-[11px] gap-[10px]">
            <img className=" desktop:w-[64px] desktop:h-[64px]" src={Thander} alt="" />
            <h1 className=" desktop:text-[48px] font-medium text-grey-8"><span className=" text-orange-8">Unlock</span> Your Creative Potential</h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className=" desktop:text-[38px]">with Online Design and Development Courses.</h1>
          <h1 className=" desktop:text-[18px]">Learn from Industry Experts and Enhance Your Skills.</h1>
        </div>
        <div className="flex gap-[18px]">
          <button className=" shadow text-white-1 px-[24px] py-[18px] rounded-[8px] bg-orange-8 desktop:text-[18px]">Explore Courses</button>
          <button className=" shadow text-grey-8 px-[24px] py-[18px] rounded-[8px] bg-white-1 desktop:text-[18px]">View Pricing</button>
        </div>
      </div>
      {/* hero session end  */}

      {/* media start  */}
      <div className="flex p-[20px] justify-around rounded-[12px] shadow-sm bg-white-1">
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3">
          <img className=" h-[34px]" src={Zapier} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3">
          <img className=" h-[34px]" src={Spotify} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3">
          <img className=" h-[34px]" src={Zoom} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3">
          <img className=" h-[34px]" src={Amazon} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3">
          <img className=" h-[34px]" src={Adobe} alt="" />
        </div>
        <div className=" px-[40px] py-[15px] border-r-2 border-white-3">
          <img className=" h-[34px]" src={Notion} alt="" />
        </div>
        <div className=" px-[40px] py-[15px]">
          <img className=" h-[34px]" src={Netflix} alt="" />
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute top-[350px] z-10">
          <img className=" desktop:w-[54px]" src={Play} alt="" />
        </div>
        <div className=" brightness-75">
          <img className=" z-0 desktop:w-[1280px] rounded-[10px]" src={Media} alt="" />
        </div>
      </div>
      {/* media end  */}

      
    </div>
  );
}
