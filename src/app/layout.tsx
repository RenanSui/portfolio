import { Providers } from '@/components/providers/providers'
import { siteConfig } from '@/config/site'
import { env } from '@/env.js'
import { fontHeading, fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { type Metadata, type Viewport } from 'next'
import '../styles/globals.css'

type RootLayoutProps = { children: React.ReactNode }

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

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-stone-50 font-sans antialiased transition-all dark:bg-stone-950',
          fontSans.variable,
          fontMono.variable,
          fontHeading.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
