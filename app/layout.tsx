import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transcript Accessibility Fixer — ADA-Compliant Course Transcripts',
  description: 'Auto-fix course video transcripts for ADA accessibility compliance. Upload, process via AI, download compliant files with detailed reports.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a757443-903f-4c1d-9b71-fa24b69be34b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
