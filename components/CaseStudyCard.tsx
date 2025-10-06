import Link from 'next/link'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  className?: string
}

export default function CaseStudyCard({ caseStudy, className = '' }: CaseStudyCardProps) {
  return (
    <div className={`card hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {caseStudy.metadata.featured_image && (
        <img
          src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={caseStudy.metadata.project_title}
          className="w-full h-48 object-cover"
          width={400}
          height={200}
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3 text-sm text-secondary-600">
          <span>{caseStudy.metadata.client_name}</span>
          {caseStudy.metadata.industry && (
            <>
              <span>•</span>
              <span>{caseStudy.metadata.industry}</span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-secondary-900 mb-3">
          {caseStudy.metadata.project_title}
        </h3>
        
        <div 
          className="text-secondary-600 mb-4 prose-content"
          dangerouslySetInnerHTML={{ 
            __html: caseStudy.metadata.challenge.replace(/<[^>]*>/g, '').substring(0, 150) + '...' 
          }} 
        />

        {caseStudy.metadata.project_duration && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              {caseStudy.metadata.project_duration}
            </span>
          </div>
        )}

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="btn btn-outline w-full"
        >
          Read Case Study
        </Link>
      </div>
    </div>
  )
}