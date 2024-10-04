'use client'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { Icons } from './icons'
import { Button } from './ui/button'

export function CopyEmail() {
  const [iconState, setIconState] = React.useState(false)

  async function copyEmailToClipboard() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setIconState(true)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => setIconState(false), 1000)
    }
  }

  return (
    <Button
      size="sm"
      variant="outline"
      className="flex h-6 items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2 text-xs font-medium text-neutral-600 transition-colors duration-200 ease-in-out hover:bg-neutral-200/70 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/70 dark:hover:text-neutral-100"
      onClick={copyEmailToClipboard}
    >
      <span>{siteConfig.email}</span>
      <div className="relative size-3 [&_path]:stroke-2 [&_svg]:size-3">
        <Icons.copy
          className={cn('absolute transition-all', iconState && 'opacity-0 [&_path]:stroke-0 [&_svg]:size-0')}
        />
        <Icons.check
          className={cn('absolute transition-all', !iconState && 'opacity-0 [&_path]:stroke-0 [&_svg]:size-0')}
        />
      </div>
    </Button>
  )
}
