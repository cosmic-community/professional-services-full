import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import Link from 'next/link'
import { CaseStudy } from '@/types'

export default async function CaseStudiesSection() {
  const caseStudies = await getCaseStudies()
  const featuredCaseStudies = caseStudies.slice(0, 2) // Show first 2 case studies

  return (
    <section className="bg-secondary-50 section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {featuredCaseStudies.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredCaseStudies.map((caseStudy: CaseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/case-studies"
                className="btn btn-primary"
              >
                View All Case Studies
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-secondary-500">Case studies coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}