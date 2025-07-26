
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SecureSight Dashboard',
  description: 'CCTV Threat Monitoring System',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 text-zinc-900">
        {children}
      </body>
    </html>
  )
}
