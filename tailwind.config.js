/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        secondary: {
          css: {
            '--tw-prose-body': '#334155',
            '--tw-prose-headings': '#0f172a',
            '--tw-prose-lead': '#475569',
            '--tw-prose-links': '#2563eb',
            '--tw-prose-bold': '#0f172a',
            '--tw-prose-counters': '#64748b',
            '--tw-prose-bullets': '#cbd5e1',
            '--tw-prose-hr': '#e2e8f0',
            '--tw-prose-quotes': '#0f172a',
            '--tw-prose-quote-borders': '#e2e8f0',
            '--tw-prose-captions': '#64748b',
            '--tw-prose-code': '#0f172a',
            '--tw-prose-pre-code': '#e2e8f0',
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-th-borders': '#cbd5e1',
            '--tw-prose-td-borders': '#e2e8f0',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}