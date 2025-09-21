import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Navbar from '@/components/layout/Navbar'
import ErrorBoundary from '@/components/ErrorBoundary'
import { siteMetadata } from '@/lib/utilities/metadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-slate-900/90 to-slate-800/90`}
      >
        <ErrorBoundary>
          <Providers>
            <Navbar />
            <main className="min-h-screen">{children}</main>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}
