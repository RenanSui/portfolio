import { siteConfig } from '@/config/site'
import { env } from '@/env.js'
import { type Locale } from '@/types'
import { type Metadata, type Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

type RootLayoutProps = { children: React.ReactNode } & { params: { locale: Locale } }

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

export default async function LocaleLayout({ children, params: { locale } }: RootLayoutProps) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}
