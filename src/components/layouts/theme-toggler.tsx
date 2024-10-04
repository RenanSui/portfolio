'use client'

import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'
import { LoaderCircleIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggler = () => {
  const { setTheme, theme } = useTheme()
  const mounted = useMounted() // (prevents hydration errors)

  if (!mounted)
    return (
      <button
        className={cn(
          'flex aspect-square size-7 items-center justify-center rounded-full border border-transparent text-neutral-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
        )}
      >
        <LoaderCircleIcon className="size-5 animate-spin" />
      </button>
    )

  if (theme === 'light') {
    return (
      <button
        className={cn(
          'hidden aspect-square size-7 items-center justify-center rounded-full border border-transparent text-neutral-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
          theme === 'light' && 'flex',
        )}
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="size-5" />
      </button>
    )
  }

  if (theme === 'dark') {
    return (
      <button
        className={cn(
          'hidden aspect-square size-7 items-center justify-center rounded-full border border-transparent text-neutral-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
          theme === 'dark' && 'flex',
        )}
        onClick={() => setTheme('light')}
      >
        <SunIcon className="size-5" />
      </button>
    )
  }

  return (
    <button
      className={cn(
        'flex aspect-square size-7 items-center justify-center rounded-full border border-transparent text-neutral-600 transition-colors duration-200 ease-in-out hover:border-neutral-200 hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
      )}
    >
      <LoaderCircleIcon className="size-5 animate-spin" />
    </button>
  )
}