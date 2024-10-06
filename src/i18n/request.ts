import { type locales } from '@/config/site'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from './routing'

type Locale = (typeof locales)[number]
type Messages = { [key: string]: string }

export default getRequestConfig(async ({ locale }: { locale: Locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) notFound()

  const messages = (await import(`../messages/${locale}.json`)) as { default: Messages }

  return {
    messages: messages.default,
  }
})
