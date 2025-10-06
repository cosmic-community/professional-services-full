# Professional Services Company Website

![App Preview](https://imgix.cosmicjs.com/65cdf9d0-a2ea-11f0-8dcc-651091f6a7c0-photo-1556742049-0cfed4f6a45d-1759778804214.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive company website built with Next.js 15 and Cosmic that showcases your professional services, team expertise, client testimonials, and successful case studies. Features a clean, professional design optimized for lead generation and client engagement.

## Features

- 🎯 **Service Portfolio** - Comprehensive service listings with detailed descriptions and pricing
- 👥 **Team Directory** - Professional team member profiles with photos and social links
- ⭐ **Client Testimonials** - Star-rated testimonials with client photos and company logos
- 📊 **Case Studies** - Detailed project showcases with results and image galleries
- 📱 **Responsive Design** - Mobile-optimized experience across all devices
- 🚀 **Performance Optimized** - Server-side rendering with optimized images
- 🔍 **SEO Friendly** - Built-in SEO optimization for better search rankings

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68e4176ee8c3ccb945962dc9&clone_repository=68e41908e8c3ccb945962dec)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Content Management:** Cosmic CMS
- **Language:** TypeScript
- **Package Manager:** Bun
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd professional-services-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and add your Cosmic credentials:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials to `.env.local`:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Service[]
  } catch (error) {
    if (error.status === 404) return []
    throw new Error('Failed to fetch services')
  }
}
```

### Fetching Team Members
```typescript
export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as TeamMember[]
  } catch (error) {
    if (error.status === 404) return []
    throw new Error('Failed to fetch team members')
  }
}
```

## Cosmic CMS Integration

The application integrates with the following Cosmic object types:

- **Services** (`services`) - Service offerings with descriptions, features, and pricing
- **Team Members** (`team-members`) - Staff profiles with photos, bios, and social links
- **Testimonials** (`testimonials`) - Client testimonials with ratings and photos
- **Case Studies** (`case-studies`) - Project showcases with challenges, solutions, and results

Each object type includes proper metadata fields and relationships for comprehensive content management.

## Deployment Options

### Deploy to Vercel

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on git push**

### Deploy to Netlify

1. **Connect your repository to Netlify**
2. **Set build command:** `bun run build`
3. **Set publish directory:** `out` (for static export) or `.next` (for server-side)
4. **Set environment variables in Netlify dashboard**

For production deployment, ensure all environment variables are properly configured in your hosting platform.

<!-- README_END -->