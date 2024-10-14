import { ThemeToggler } from '@/components/layouts/theme-toggler'
import { NextThemesProvider } from '@/components/providers/theme-provider'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/layouts/Theme Toggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <NextThemesProvider>{Story()}</NextThemesProvider>],
} satisfies Meta<typeof ThemeToggler>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
