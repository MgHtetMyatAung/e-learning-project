import { InfoCard, TestimonialsCard } from "../../card"

export default function TestimonialSession({testimonials}) {
  return (
    <div className="">
        
        <InfoCard 
          head={"Our Testimonials"}
          body={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
        />
        
        <div className="grid gap-5 desktop:grid-cols-2">

          {
            testimonials && testimonials.map((testimonial) => {
              return <TestimonialsCard key={testimonial.id} {...testimonial} />
            })
          }

        </div>

      </div>
  )
}
