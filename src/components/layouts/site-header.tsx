import { siteConfig } from '@/config/site'
import { CopyEmail } from '../copy-email'
import { Icons } from '../icons'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ThemeToggler } from './theme-toggler'

export function SiteHeader() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="size-14 cursor-zoom-in transition-all hover:scale-110">
            <AvatarImage src="/images/avatar.webp" />
            <AvatarFallback>Profile Pic</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-medium tracking-tight">renan</h1>
            <p className="text-sm text-stone-600 dark:text-stone-400">frontend engineer</p>
          </div>
        </div>

        <div className="flex flex-col items-end md:flex-row-reverse md:gap-2">
          <div className="flex items-center">
            <a
              href={siteConfig.links.githubAccount}
              target="_blank"
              className="flex aspect-square size-7 items-center justify-center rounded-full border border-transparent text-stone-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:text-stone-900 dark:text-stone-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-stone-100"
            >
              <Icons.github />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              className="flex aspect-square size-7 items-center justify-center rounded-full border border-transparent text-stone-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:text-stone-900 dark:text-stone-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-stone-100"
            >
              <Icons.linkedin />
            </a>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              className="flex aspect-square size-7 items-center justify-center rounded-full border border-transparent fill-neutral-600 stroke-neutral-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:fill-neutral-900 hover:stroke-neutral-900 dark:fill-neutral-400 dark:stroke-neutral-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:fill-neutral-100 dark:hover:stroke-neutral-100"
            >
              <Icons.whatsapp className="size-4" />
            </a>
            <ThemeToggler />
          </div>
          <CopyEmail />
        </div>
      </div>
    </header>
  )
}
