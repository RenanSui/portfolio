import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <Avatar {...args} className="size-14 cursor-zoom-in transition-all hover:scale-110">
        <AvatarImage src="/images/avatar.webp" />
        <AvatarFallback>Profile Pic</AvatarFallback>
      </Avatar>
    )
  },
}

export const Fallback: Story = {
  render: (args) => {
    return (
      <Avatar {...args} className="size-14 cursor-zoom-in transition-all hover:scale-110">
        <AvatarImage src="" />
        <AvatarFallback>R.N</AvatarFallback>
      </Avatar>
    )
  },
}
