import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import { CaseStudy } from '@/types'

export const metadata = {
  title: 'Case Studies - Professional Services Company',
  description: 'Explore our successful projects and client transformations. See how we\'ve helped businesses achieve their goals.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header Section */}
      <div className="bg-white">
        <div className="container section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container section-padding">
        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy: CaseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-secondary-500">No case studies available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}