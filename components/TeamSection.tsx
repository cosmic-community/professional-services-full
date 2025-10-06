import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import { TeamMember } from '@/types'

export default async function TeamSection() {
  const teamMembers = await getTeamMembers()
  const featuredTeam = teamMembers.slice(0, 3) // Show first 3 team members

  return (
    <section id="team" className="bg-secondary-50 section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Our talented professionals are passionate about delivering exceptional results for our clients.
          </p>
        </div>

        {featuredTeam.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeam.map((member: TeamMember) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-secondary-500">Team information coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}