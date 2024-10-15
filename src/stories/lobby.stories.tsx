import { Lobby } from '@/app/[locale]/(lobby)/_components/lobby'
import { NextThemesProvider } from '@/components/providers/theme-provider'
import { mocks } from '@/lib/mocks'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/page/Lobby',
  component: Lobby,
  tags: ['autodocs'],
  decorators: [(Story) => <NextThemesProvider>{Story()}</NextThemesProvider>],
  args: {
    locale: 'en',
    projects: mocks.projects,
    works: mocks.works,
    message: mocks.message,
  },
} satisfies Meta<typeof Lobby>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Lobby {...args} />,
}
