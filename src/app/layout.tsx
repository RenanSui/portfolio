import { siteConfig } from '@/config/site'
import { env } from '@/env.js'
import { fontHeading, fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ['nextjs', 'react', 'react server components', 'resume', 'sanity', 'portfolio', 'nier', 'NieR:Automata'],
  authors: [
    {
      name: 'renansui',
      url: 'https://renansui.vercel.app',
    },
  ],
  creator: 'renansui',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: '/opengraph-image.png',
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: '@adsjksui',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

type RootLayoutProps = { children: React.ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-neutral-50 px-6 py-10 font-sans antialiased dark:bg-neutral-950 md:py-20',
          fontSans.variable,
          fontMono.variable,
          fontHeading.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
