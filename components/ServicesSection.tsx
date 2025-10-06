import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { Service } from '@/types'

export default async function ServicesSection() {
  const services = await getServices()
  const featuredServices = services.slice(0, 3) // Show first 3 services

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            We offer comprehensive solutions to help your business succeed in the digital world.
          </p>
        </div>

        {featuredServices.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service: Service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/services"
                className="btn btn-primary"
              >
                View All Services
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-secondary-500">Services coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}