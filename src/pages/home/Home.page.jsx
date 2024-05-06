import { useEffect, useState } from "react";
import { Adobe, Amazon, Netflix, Notion, Play, Spotify, Thander, TripleStick, Zapier, Zoom } from "../../assets/icons";
import { Media, Testi1, Testi2, Testi3, Testi4 } from "../../assets/images";
import { Benefits_card, Courses_card, Fee_card, Info_card, Testimonials_card } from "../../components/card";
import { benefits, courses, FAQ, monthly, yearly } from "../../data";
import FAQ_card from "../../components/card/FAQ_card";

export default function HomePage() {

  // default Monthly
  const [update, setUpdate] = useState(monthly);  
  const [click, setClick] = useState("monthly");

  const [ selected_id, setSelected_id ] = useState(1);

  const selectedHandel = id => {
    const activeId = id === selected_id ? null : id;
    setSelected_id(activeId);
  }

  useEffect(() => {
    if (click === "monthly") {
      setUpdate(monthly);
    }else{
      setUpdate(yearly);
    }
  },[click]);

  return(
    <div className="container mx-auto font-bevi grid desktop:gap-[6rem] gap-[3rem]">
      {/* hero session start  */}
      <div className="flex flex-col items-center desktop:mt-[5rem] mt-8 w-full desktop:gap-[3rem] gap-[2rem]">
        <div className="relative flex justify-center">
          <div className="absolute desktop:top-[-2rem] desktop:left-[-2rem] top-[-5px] left-[-8px]">
            <img className=" desktop:w-[39px] tablet:w-[18px] w-[8px]" src={TripleStick} alt="" />
          </div>
          <div className="flex items-center shadow-sm bg-white-2 w-fit desktop:ps-[20px] ps-2 pe-3 desktop:pe-[30px] desktop:py-[14px] py-[10px] rounded-[11px] gap-[10px]">
            <img className=" desktop:w-[64px] w-[44px]" src={Thander} alt="" />
            <h1 className=" desktop:text-[48px] tablet:text-[28px] font-medium text-grey-8"><span className=" text-orange-8">Unlock</span> Your Creative Potential</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className=" desktop:text-[38px] text-[27px] font-semibold text-center">with Online Design and Development Courses.</h1>
          <h1 className=" text-[15px] text-center">Learn from Industry Experts and Enhance Your Skills.</h1>
        </div>
        <div className="flex gap-[18px]">
          <button className=" shadow text-white-1 desktop:px-[24px] desktop:py-[18px] px-[14px] py-[8px] rounded-[8px] bg-orange-8 desktop:text-[18px] text-[15px]">Explore Courses</button>
          <button className=" shadow text-grey-8 desktop:px-[24px] desktop:py-[18px] px-[14px] py-[8px] rounded-[8px] bg-white-1 desktop:text-[18px]">View Pricing</button>
        </div>  
      </div>
      {/* hero session end  */}

      {/* media start  */}
      <div className="flex desktop:p-[20px] p-[10px] justify-around rounded-[12px] shadow-sm bg-white-1">
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

      {/* benefit start  */}
      <div className="">
        
        <Info_card 
          head={"Benefits"}
          body={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
        />

        <div className=" grid desktop:grid-cols-3 grid-cols-1 gap-[20px]">

          {
            benefits && benefits.map((benefit) =>{
              return <Benefits_card key={benefit.id} {...benefit} />
            })
          }

        </div>
      </div>
      {/* benefit end  */}

      {/* courses start  */}
      <div className="">
        <Info_card 
          head={"Our Courses"}
          body={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
        />

        <div className=" grid desktop:grid-cols-2 gap-[30px]">

          {
            courses && courses.map((course) => {
              return <Courses_card key={course.id} {...course} />
            })
          }


        </div>
      </div>
      {/* courses end  */}

      {/* Testimonials start  */}
      <div className="">
        
        <Info_card 
          head={"Our Testimonials"}
          body={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
        />
        
        <div className="grid gap-5 desktop:grid-cols-2">

          <Testimonials_card
            head={"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"}
            src={Testi1}
            name={"Sarah L"}
          />

          <Testimonials_card
            head={"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"}
            src={Testi2}
            name={"Jason M"}
          />

          <Testimonials_card
            head={"The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"}
            src={Testi3}
            name={"Emily R"}
          />

          <Testimonials_card
            head={"I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"}
            src={Testi4}
            name={"Michael K"}
          />

        </div>

      </div>
      {/* Testimonials end  */}
      
      {/* fee start  */}
      <div className="">

        <div className="grid grid-cols-1 gap-6 mb-[5rem] desktop:grid-cols-3">
          <div className="col-span-2 ">
              <h1 className="text-[30px] font-semibold mb-3">Our Pricing</h1>
              <p className=" desktop:text-[15px] text-grey-5">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          </div>
          <div className="flex items-end justify-center desktop:justify-end">
              <div className="flex bg-white-1 gap-4 rounded-[8px] p-4 h-fit text-grey-5">
                  <button onClick={() => click === 'yearly' && setClick('monthly')} className={` ${click === "monthly" ? 'bg-orange-8 text-white-1' : 'text-grey-5'} px-5 text-[15px] py-2 h-fit cursor-pointer rounded-[5px]`}>Monthly</button>
                  <button onClick={() => click === 'monthly' && setClick('yearly')} className={`${click === "yearly" ? 'bg-orange-8 text-white-1': 'text-grey-5'} px-5 text-[15px] py-2 h-fit cursor-pointer rounded-[5px]`}>Yearly</button>
              </div>
          </div>
        </div>

        <div className=" bg-white-1 rounded-[18px] tablet:p-[40px] desktop:p-[50px] p-[20px] grid desktop:grid-cols-2 grid-cols-1 gap-8">
          <Fee_card {...update.normal}/>
          <Fee_card {...update.pro}/>
        </div>
      </div>
      {/* fee end  */}

      {/* FAQ start  */}
      <div className=" bg-white-1 rounded-[18px] tablet:py-[80px] tablet:px-[60px] py-[20px] px-[20px] gap-[3rem] grid desktop:grid-cols-5 grid-cols-1">
        <div className="col-span-2">
          <div className="mb-[3rem] ">
            <h1 className=" text-[30px] font-semibold">Frequently Asked Questions</h1>
            <p className=" text-[15px] text-grey-5">Still you have any questions? Contact our Team via support@skillbridge.com</p>
          </div>
          <div className="">
            <button className=" py-[10px] px-[15px] bg-white-1 rounded-[8px] shadow-sm">See All FAQ&#39;s</button>
          </div>
        </div>
        <div className="col-span-3 grid gap-[2rem]">
          {
            FAQ && FAQ.map((faq) => {
              return <FAQ_card key={faq.id} selected_id={selected_id} selectedHandel={selectedHandel} {...faq} />;
            })
          }
        </div>
      </div>
      {/* FAQ end  */}
    </div>
  );
}