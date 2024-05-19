import { benefits, courses, FAQ, monthly, testimonials, yearly } from "../../data";
import { BenefitsSession, CourseSession, FAQSession, FeeSession, HeroSession, TestimonialSession } from "../../components/layouts/session";

export default function HomePage() {

  return(
    <div className="container mx-auto font-bevi grid desktop:gap-[6rem] gap-[3rem]">
      
      <HeroSession/>

      <BenefitsSession benefits={benefits}/>      

      <CourseSession courses={courses} />

      <TestimonialSession testimonials={testimonials} />
      
      <FeeSession monthly={monthly} yearly={yearly} />

      <FAQSession FAQ={FAQ} />
      
    </div>
  );
}