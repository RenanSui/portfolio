import { Icons } from '@/components/icons'
import { SiteHeader } from '@/components/layouts/site-header'
import { ProjectItem } from '@/components/project-item'
import { WorkItem } from '@/components/work-item'

const Projects = [
  {
    name: 'Salvage',
    description: 'Automated Backup Solution',
    date: 2023,
    url: 'https://github.com/RenanSui/salvage',
    favorite: true,
  },
  {
    name: 'Spenso',
    description: 'Personal finance management tool',
    date: 2024,
    url: 'https://spenso.vercel.app',
    favorite: true,
  },
  {
    name: 'Twitter Clone',
    description: 'Social Media & Microblogging service',
    date: 2024,
    url: 'https://renansui-remix-blog.vercel.app/',
    favorite: false,
  },
  {
    name: 'Blog API',
    description: 'Backend for a microblogging service',
    date: 2024,
    url: 'https://github.com/RenanSui/nestjs-blog',
    favorite: false,
  },
  {
    name: 'Poképedia',
    description: 'Pokémon detailed stats',
    date: 2022,
    url: 'https://ren-pokedex.vercel.app/',
    favorite: false,
  },
  {
    name: 'Weatherium',
    description: 'Accurate source of weather forecasts',
    date: 2022,
    url: 'https://ren-weatherapp.vercel.app',
    favorite: false,
  },
].sort((a, b) => b.date - a.date)

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[38rem] flex-col gap-16">
      <SiteHeader />

      <section className="flex flex-col gap-4">
        <h1 className="font-medium">About</h1>
        <p className="text-pretty text-sm text-neutral-600 dark:text-neutral-400">
          Passionate about crafting seamless user experiences with attention to detail. I&apos;m always sided with
          practical solutions that are both functional and aesthetically pleasing.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group/link group relative -mx-4 flex gap-2 rounded-md border border-transparent px-4 py-3 transition-colors duration-150 ease-in-out hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 md:items-center"
          href="/resume"
        >
          <p className="flex max-w-[80ch] gap-2 truncate font-medium">View Full Resume</p>
          <Icons.externalLink className="ml-1 inline-block size-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        </a>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="font-medium">Work</h1>
        <div>
          <WorkItem company="SS Serviços" position="Web Developer" date="Oct 2021 - Aug 2023" />
          <WorkItem company="Freelance" position="Computer Maintenance" date="Jun 2019 - Sep 2021" />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="font-medium">Projects</h1>
        <div className="flex flex-col">
          {Projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
