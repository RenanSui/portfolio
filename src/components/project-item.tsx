import { StarIcon } from 'lucide-react'

type ProjectItemProps = {
  project: { name: string; description: string; date: string | number; url: string; favorite: boolean }
}

export function ProjectItem({ project }: ProjectItemProps) {
  const { date, description, name, url, favorite } = project
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-4 flex flex-col justify-between rounded-md border border-transparent px-4 py-3 text-sm transition-colors duration-150 ease-in-out hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 md:flex-row md:items-center md:gap-4"
      href={url}
    >
      <div className="flex flex-col gap-2 md:flex-row">
        <p className="flex max-w-[80ch] gap-2 truncate font-medium">
          {favorite && <StarIcon className="size-4 fill-current text-amber-400 transition-all group-hover:rotate-12" />}
          {name}
        </p>
        <p className="truncate text-stone-600 dark:text-stone-400">{description}</p>
      </div>
      <div className="hidden h-px flex-1 rounded bg-neutral-600 opacity-20 dark:bg-neutral-400 md:block" />
      <p className="w-[4ch] text-stone-600 dark:text-stone-400 md:text-right">{date}</p>
    </a>
  )
}
