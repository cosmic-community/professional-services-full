import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'
import { Testimonial } from '@/types'

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials()

  return (
    <section className="bg-white section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-secondary-500">Testimonials coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}