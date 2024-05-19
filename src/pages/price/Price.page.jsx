import { FAQ, monthly, yearly } from "../../data";
import { FAQSession, PriceSession } from "../../components/layouts/session";

export default function PricePage() {
  return (
    <div className="container mx-auto grid gap-[3rem]">
      <div className=" gap-2 grid grid-cols-1 laptop:grid-cols-2 border-b-2 border-white-4 tablet:px-[60px] px-0 pb-[40px] mt-[4rem] items-center">
        <h1 className=" text-[28px] font-semibold leading-[42px]">Our Pricings</h1>
        <div className="">
          <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
        </div>
      </div>
      <div className="">
        <PriceSession monthly={monthly} yearly={yearly}/>
      </div>
      <div className="">
        <FAQSession FAQ={FAQ}/>
      </div>
    </div>
  )
}
