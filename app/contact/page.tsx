import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Professional Services Company',
  description: 'Get in touch with our team for a consultation or quote. We\'re here to help transform your business.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              Ready to transform your business? Let's start a conversation about 
              how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Prefer to reach out directly? Here are all the ways you can contact us.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Email</h3>
                    <p className="text-secondary-700">hello@professionalservices.com</p>
                    <p className="text-secondary-600 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Phone</h3>
                    <p className="text-secondary-700">+1 (555) 123-4567</p>
                    <p className="text-secondary-600 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Office</h3>
                    <p className="text-secondary-700">123 Business Street<br />Suite 100<br />City, State 12345</p>
                    <p className="text-secondary-600 text-sm mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Business Hours</h3>
                    <p className="text-secondary-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-secondary-700">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-secondary-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-secondary-600">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  How long does a typical project take?
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  Project timelines vary depending on scope and complexity. Web development projects 
                  typically take 4-12 weeks, brand design projects 2-6 weeks, and marketing campaigns 
                  are ongoing. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  What's included in your web development service?
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  Our web development service includes custom design, responsive development, 
                  content management system integration, SEO optimization, performance optimization, 
                  and 3 months of free support and maintenance after launch.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Do you work with small businesses?
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  Absolutely! We work with businesses of all sizes, from startups to enterprises. 
                  We have flexible packages and pricing options to accommodate different budgets 
                  and requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Can you help with ongoing maintenance?
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  Yes, we offer comprehensive maintenance and support packages to keep your 
                  website secure, up-to-date, and performing optimally. This includes regular 
                  updates, security monitoring, and technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Schedule a free consultation to discuss your project and learn how we can help 
              achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="btn btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-0 px-8 py-4 text-lg">
                Schedule Consultation
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}