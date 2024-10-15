import { Icons } from '@/components/icons'
import { SiteHeader } from '@/components/layouts/site-header'
import { ProjectItem } from '@/components/project-item'
import { Section } from '@/components/shells/section'
import { WorkItem } from '@/components/work-item'
import { type getMessage } from '@/lib/server/intl'
import { type Projects, type Works } from '@/sanity/sanity.types'
import { type Locale } from '@/types'
import Link from 'next/link'

type LobbyProps = {
  locale: Locale
  projects: Partial<Projects>[]
  works: Partial<Works>[]
  message: Awaited<ReturnType<typeof getMessage>>
}

export function Lobby({ locale, message, projects, works }: LobbyProps) {
  return (
    <main className="mx-auto flex w-full max-w-[38rem] flex-col gap-16">
      <SiteHeader />

      <Section title={message.about.title}>
        <p className="text-pretty text-sm text-stone-600 dark:text-stone-400">{message.about.description}</p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="group/link group relative -mx-4 flex gap-2 rounded-md border border-transparent px-4 py-3 transition-colors duration-150 ease-in-out hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 md:items-center"
          href={`/${locale}/resume`}
        >
          <p className="flex max-w-[80ch] gap-2 truncate text-sm font-medium">{message.resumeButton}</p>
          <Icons.externalLink className="ml-1 inline-block size-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </Section>

      <Section title={message.works.title}>
        <div>
          {works.map((work, index) => (
            <WorkItem key={index} company={work.company} position={work.position} workPeriod={work.workPeriod} />
          ))}
        </div>
      </Section>

      <Section title={message.projects.title}>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} currentLanguage={locale} />
          ))}
        </div>
      </Section>

      <Section title={message.languages.title}>
        <div className="flex flex-col gap-1 text-sm text-stone-600 dark:text-stone-400">
          <Link href="en" className="w-fit transition-all hover:text-stone-900 dark:hover:text-stone-100">
            English
          </Link>
          <Link href="pt-br" className="w-fit transition-all hover:text-stone-900 dark:hover:text-stone-100">
            Portuguese
          </Link>
        </div>
      </Section>
    </main>
  )
}
