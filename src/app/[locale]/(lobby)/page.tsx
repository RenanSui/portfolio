import { getMessage } from '@/lib/server/intl'
import { getProjects, getWorks } from '@/lib/server/sanity'
import { type Locale } from '@/types'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'
import { Lobby } from './_components/lobby'
import { locales } from '@/config/site'

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale)
  const projects = getProjects()
  const works = getWorks()
  const message = getMessage(locale)

  return <Lobby locale={locale} projects={projects} works={works} message={message} />
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
