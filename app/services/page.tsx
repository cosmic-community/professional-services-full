import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import { Service } from '@/types'

export const metadata = {
  title: 'Our Services - Professional Services Company',
  description: 'Comprehensive professional services including web development, brand design, and digital marketing solutions.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header Section */}
      <div className="bg-white">
        <div className="container section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              We offer comprehensive professional services designed to help your business grow and succeed in today's digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container section-padding">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-secondary-500">No services available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}