import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import '../../styles/globals.css'

export const metadata: Metadata = {
  title: `Studio`,
}

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
