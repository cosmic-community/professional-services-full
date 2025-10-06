import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export default function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  const renderStars = (rating: string) => {
    const numStars = parseInt(rating)
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < numStars
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-secondary-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <div className={`card p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Rating */}
      {testimonial.metadata.rating && (
        <div className="flex text-yellow-400 mb-4">
          {renderStars(testimonial.metadata.rating.key)}
        </div>
      )}

      {/* Testimonial Text */}
      <blockquote className="text-secondary-700 mb-6 leading-relaxed">
        "{testimonial.metadata.testimonial_text}"
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {testimonial.metadata.client_photo ? (
            <img
              src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={testimonial.metadata.client_name}
              className="w-12 h-12 object-cover rounded-full"
              width={48}
              height={48}
            />
          ) : (
            <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center">
              <span className="text-secondary-600 font-medium text-sm">
                {testimonial.metadata.client_name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <div className="ml-3">
          <p className="text-sm font-semibold text-secondary-900">
            {testimonial.metadata.client_name}
          </p>
          {testimonial.metadata.client_title && (
            <p className="text-xs text-secondary-600">
              {testimonial.metadata.client_title}
            </p>
          )}
          <p className="text-xs text-primary-600 font-medium">
            {testimonial.metadata.company_name}
          </p>
        </div>

        {/* Company Logo */}
        {testimonial.metadata.company_logo && (
          <div className="ml-auto">
            <img
              src={`${testimonial.metadata.company_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
              alt={`${testimonial.metadata.company_name} logo`}
              className="w-8 h-8 object-contain opacity-60"
              width={32}
              height={32}
            />
          </div>
        )}
      </div>
    </div>
  )
}