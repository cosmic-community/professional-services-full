// app/case-studies/[slug]/page.tsx
import { getCaseStudy } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CaseStudy } from '@/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="container pt-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {caseStudy.metadata.featured_image && (
            <img
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.project_title}
              className="w-full h-96 object-cover rounded-xl mb-8"
              width={1200}
              height={600}
            />
          )}

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary-600">
              <span>{caseStudy.metadata.client_name}</span>
              {caseStudy.metadata.industry && (
                <>
                  <span>•</span>
                  <span>{caseStudy.metadata.industry}</span>
                </>
              )}
              {caseStudy.metadata.project_duration && (
                <>
                  <span>•</span>
                  <span>{caseStudy.metadata.project_duration}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              {caseStudy.metadata.project_title}
            </h1>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Challenge Section */}
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">The Challenge</h2>
              <div 
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }} 
              />
            </div>

            {/* Solution Section */}
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Our Solution</h2>
              <div 
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }} 
              />
            </div>

            {/* Results Section */}
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Results</h2>
              <div 
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }} 
              />
            </div>

            {/* Project Gallery */}
            {caseStudy.metadata.project_gallery && caseStudy.metadata.project_gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.metadata.project_gallery.map((image, index) => (
                    <img
                      key={index}
                      src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={`${caseStudy.metadata.project_title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={300}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Related Services */}
            {caseStudy.metadata.related_services && caseStudy.metadata.related_services.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.metadata.related_services.map((service) => (
                    <div key={service.id} className="card p-6">
                      <div className="flex items-start space-x-4">
                        {service.metadata.service_icon && (
                          <img
                            src={`${service.metadata.service_icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                            alt={service.metadata.service_name}
                            className="w-12 h-12 object-cover rounded-lg"
                            width={48}
                            height={48}
                          />
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                            {service.metadata.service_name}
                          </h3>
                          <div 
                            className="text-secondary-600 text-sm"
                            dangerouslySetInnerHTML={{ 
                              __html: service.metadata.description.substring(0, 150) + '...' 
                            }} 
                          />
                          {service.metadata.starting_price && (
                            <p className="text-primary-600 font-medium mt-2">
                              Starting at {service.metadata.starting_price}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}