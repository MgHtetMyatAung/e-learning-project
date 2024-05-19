import { BenefitsCard, InfoCard } from "../../card"

export default function BenefitSession({benefits}) {
  return (
    <div className="">
        <InfoCard 
        head={"Benefits"}
        body={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
        />

        <div className=" grid desktop:grid-cols-3 grid-cols-1 gap-[20px]">

        {
            benefits && benefits.map((benefit) =>{
            return <BenefitsCard key={benefit.id} {...benefit} />
            })
        }

        </div>
    </div>
  )
}
