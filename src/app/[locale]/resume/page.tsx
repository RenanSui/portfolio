import { locales } from '@/config/site'
import { getResumeByName } from '@/lib/server/sanity'
import { type Locale } from '@/types'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

export default async function ResumePage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale)
  const resume = await getResumeByName(`renansui_cv_${locale}`)

  return (
    <main className="relative flex min-h-screen flex-col">
      <object data={resume?.file?.asset?.url} type="application/pdf" className="flex-1" />
    </main>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
