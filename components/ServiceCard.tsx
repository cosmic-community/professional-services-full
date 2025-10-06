import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  className?: string
}

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  return (
    <div className={`card p-8 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="text-center">
        {service.metadata.service_icon && (
          <div className="mb-6">
            <img
              src={`${service.metadata.service_icon.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
              alt={service.metadata.service_name}
              className="w-16 h-16 object-cover rounded-lg mx-auto"
              width={64}
              height={64}
            />
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-secondary-900 mb-4">
          {service.metadata.service_name}
        </h3>
        
        <div 
          className="text-secondary-600 mb-6 prose-content"
          dangerouslySetInnerHTML={{ __html: service.metadata.description }} 
        />

        {service.metadata.features && service.metadata.features.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-2 text-sm text-secondary-600">
              {service.metadata.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.metadata.starting_price && (
          <div className="mt-auto">
            <p className="text-2xl font-bold text-primary-600 mb-4">
              {service.metadata.starting_price}
            </p>
          </div>
        )}
        
        <button className="btn btn-primary w-full">
          Learn More
        </button>
      </div>
    </div>
  )
}