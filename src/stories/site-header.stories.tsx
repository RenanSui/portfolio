import { SiteHeader } from '@/components/layouts/site-header'
import { NextThemesProvider } from '@/components/providers/theme-provider'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/layouts/Site Header',
  component: SiteHeader,
  tags: ['autodocs'],
  decorators: [(Story) => <NextThemesProvider>{Story()}</NextThemesProvider>],
} satisfies Meta<typeof SiteHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
