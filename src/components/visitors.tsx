'use client'

import { type getMessage } from '@/lib/server/intl'
import { getVisitors } from '@/lib/server/visitors'
import * as React from 'react'
import { Section } from './shells/section'

type VisitorsProps = {
  message: Awaited<ReturnType<typeof getMessage>>
}

export const Visitors = ({ message }: VisitorsProps) => {
  const [visitors, setVisitors] = React.useState<number | null>(null)

  React.useEffect(() => {
    const loadVisitors = async () => {
      const visited = document.cookie.split('; ').find((row) => row.startsWith('visited='))
      const cookieHeader = visited ? `visited=${visited.split('=')[1]}` : undefined
      const visitors = await getVisitors(cookieHeader)
      setVisitors(visitors.count)
    }
    void loadVisitors()
  }, [])

  return (
    <Section title={message.visitors.title}>
      <div className="flex flex-col gap-1 text-sm text-stone-600 dark:text-stone-400">
        {visitors ? (
          <p className="w-fit cursor-default transition-all hover:text-stone-900 dark:hover:text-stone-100">
            {visitors}
          </p>
        ) : (
          <div className="size-full h-4 animate-pulse rounded bg-muted-foreground/50" />
        )}
      </div>
    </Section>
  )
}
