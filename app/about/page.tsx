import { Metadata } from 'next'
import TeamSection from '@/components/TeamSection'

export const metadata: Metadata = {
  title: 'About Us - Professional Services Company',
  description: 'Learn about our mission, values, and the talented team behind our professional services company.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Professional Services
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              We're a team of passionate professionals dedicated to helping businesses 
              thrive in the digital landscape through innovative solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                We believe every business deserves exceptional digital experiences that drive growth 
                and create lasting connections with customers. Our mission is to bridge the gap between 
                innovative technology and business success.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Through expert web development, compelling brand design, and strategic digital marketing, 
                we help companies of all sizes achieve their full potential in the digital marketplace.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-secondary-600">Projects Completed</div>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-secondary-600">Client Satisfaction</div>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-secondary-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary-50 section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 leading-relaxed">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Quality First</h3>
              <p className="text-secondary-700 leading-relaxed">
                We never compromise on quality. Every project receives our full attention to detail 
                and commitment to excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Collaboration</h3>
              <p className="text-secondary-700 leading-relaxed">
                Your success is our success. We work closely with you throughout every step 
                of the process to ensure the best outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Innovation</h3>
              <p className="text-secondary-700 leading-relaxed">
                We stay ahead of industry trends and continuously adopt new technologies 
                to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Reliability</h3>
              <p className="text-secondary-700 leading-relaxed">
                We deliver on our promises, meet deadlines, and provide consistent 
                support you can count on.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Passion</h3>
              <p className="text-secondary-700 leading-relaxed">
                We love what we do and it shows in every project. Our enthusiasm 
                drives us to go above and beyond expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Transparency</h3>
              <p className="text-secondary-700 leading-relaxed">
                Clear communication and honest pricing. No hidden fees, 
                no surprises - just straightforward business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with our 
              professional services and expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/contact"
                className="btn btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-0 px-8 py-4 text-lg"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}