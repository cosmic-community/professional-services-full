import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Services Company - Web Development, Design & Marketing',
  description: 'Leading professional services company offering web development, brand design, and digital marketing. Transform your business with our expert team.',
  keywords: 'web development, brand design, digital marketing, professional services, business consulting',
  authors: [{ name: 'Professional Services Company' }],
  openGraph: {
    title: 'Professional Services Company - Web Development, Design & Marketing',
    description: 'Leading professional services company offering web development, brand design, and digital marketing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}