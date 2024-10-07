'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { revalidateProjects, revalidateResumes, revalidateWorks } from '@/lib/server/sanity'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { EllipsisIcon } from 'lucide-react'
import * as React from 'react'

export default function RevalidateModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="group flex size-8 items-center justify-center rounded-lg border bg-neutral-200/50 transition-colors duration-150 ease-in-out group-hover:bg-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-neutral-800">
          <EllipsisIcon className="transition-all group-hover:rotate-90" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action is irreversible and will permanently invalidate your data. Please proceed with caution.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Button variant={'outline'} className="hover:bg-red-600" onClick={async () => await revalidateProjects()}>
            <ExclamationTriangleIcon className="mr-2 size-4" aria-hidden="true" />
            Projects
          </Button>
          <Button variant={'outline'} className="hover:bg-red-600" onClick={async () => await revalidateWorks()}>
            <ExclamationTriangleIcon className="mr-2 size-4" aria-hidden="true" />
            Works
          </Button>
          <Button variant={'outline'} className="hover:bg-red-600" onClick={async () => await revalidateResumes()}>
            <ExclamationTriangleIcon className="mr-2 size-4" aria-hidden="true" />
            PDFs
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
