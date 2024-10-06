import { type HTMLAttributes } from 'react'

type ShellProps = HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType
  title: string
}

export const Section = ({ title, children, as: Shell = 'section', ...props }: ShellProps) => (
  <Shell className="flex flex-col gap-4" {...props}>
    <h1 className="font-medium">{title}</h1>
    {children}
  </Shell>
)
