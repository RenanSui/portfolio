import { Icons } from '@/components/icons'
import { SiteHeader } from '@/components/layouts/site-header'
import { ProjectItem } from '@/components/project-item'
import { Section } from '@/components/shells/section'
import { WorkItem } from '@/components/work-item'
import { getProjects, getWorks } from '@/lib/server/sanity'

export default async function Home() {
  const projects = await getProjects()
  const works = await getWorks()

  return (
    <main className="mx-auto flex w-full max-w-[38rem] flex-col gap-16">
      <SiteHeader />

      <Section title="About">
        <p className="text-pretty text-sm text-stone-600 dark:text-stone-400">
          Passionate about crafting seamless user experiences with attention to detail. I&apos;m always sided with
          practical solutions that are both functional and aesthetically pleasing.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group/link group relative -mx-4 flex gap-2 rounded-md border border-transparent px-4 py-3 transition-colors duration-150 ease-in-out hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 md:items-center"
          href="/resume"
        >
          <p className="flex max-w-[80ch] gap-2 truncate text-sm font-medium">View Full Resume</p>
          <Icons.externalLink className="ml-1 inline-block size-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        </a>
      </Section>

      <Section title="Works">
        <div>
          {works.map((work, index) => (
            <WorkItem key={index} company={work.company} position={work.position} date={work.workPeriod} />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </Section>
    </main>
  )
}
