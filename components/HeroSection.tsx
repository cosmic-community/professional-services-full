import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-primary-200">Professional Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            We help businesses grow through expert web development, compelling brand design, 
            and results-driven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/services"
              className="btn btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-0 px-8 py-4 text-lg"
            >
              Explore Our Services
            </Link>
            <Link
              href="/case-studies"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-primary-900 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}