import { Building2Icon } from 'lucide-react'

export function WorkItem({ company, date, position }: { company: string; position: string; date: string }) {
  return (
    <div className="group relative -mx-4 flex gap-2 rounded-md border border-transparent px-4 py-3 transition-colors duration-150 ease-in-out hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 md:items-center">
      <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-200/50 transition-colors duration-150 ease-in-out group-hover:bg-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-neutral-800">
        <Building2Icon className="size-4" />
      </div>
      <div className="relative grid flex-1 gap-1 md:grid-cols-[0.25fr_1fr]">
        <p className="text-sm font-medium">{company}</p>
        <div className="flex flex-col gap-1 text-xs md:flex-row md:items-center md:gap-2">
          <p className="text-stone-600 dark:text-stone-400">{position}</p>
          <div className="hidden size-1 rounded-full bg-neutral-600 dark:bg-neutral-400 md:block" />
          <p className="text-stone-600 dark:text-stone-400">{date}</p>
        </div>
      </div>
    </div>
  )
}
