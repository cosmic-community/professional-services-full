import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
  className?: string
}

export default function TeamMemberCard({ member, className = '' }: TeamMemberCardProps) {
  return (
    <div className={`card p-6 text-center hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {member.metadata.profile_photo && (
        <div className="mb-4">
          <img
            src={`${member.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            className="w-24 h-24 object-cover rounded-full mx-auto"
            width={96}
            height={96}
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-secondary-900 mb-1">
        {member.metadata.full_name}
      </h3>
      
      <p className="text-primary-600 font-medium mb-3">
        {member.metadata.job_title}
      </p>

      {member.metadata.department && (
        <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm mb-4">
          {member.metadata.department.value}
        </span>
      )}
      
      {member.metadata.bio && (
        <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
          {member.metadata.bio}
        </p>
      )}

      <div className="flex justify-center space-x-3">
        {member.metadata.email && (
          <a
            href={`mailto:${member.metadata.email}`}
            className="text-secondary-400 hover:text-primary-600 transition-colors"
            aria-label={`Email ${member.metadata.full_name}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        )}
        
        {member.metadata.linkedin_url && (
          <a
            href={member.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-400 hover:text-primary-600 transition-colors"
            aria-label={`${member.metadata.full_name} on LinkedIn`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}