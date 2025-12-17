import type { Metadata } from 'next'
import { Suspense } from 'react'
import Analytics from '@/components/analytics'

import 'normalize.css/normalize.css'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Pintea Cătălin — Digital designer, builder & entrepreneur in Cluj-Napoca',
  description: 'Get in touch for advice on your web projects, check out my current work and personal ramblings.',
  icons: {
    icon: [
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/favicons/apple-touch-icon.png',
    shortcut: '/images/favicons/favicon.ico',
  },
  manifest: '/images/favicons/site.webmanifest',
  other: {
    'msapplication-TileColor': '#20211d',
    'msapplication-config': '/images/favicons/browserconfig.xml',
    'theme-color': '#20211d',
  },
  openGraph: {
    images: '/images/svg/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
