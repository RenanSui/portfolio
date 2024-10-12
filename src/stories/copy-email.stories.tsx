import { CopyEmail } from '@/components/copy-email'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Copy Email',
  component: CopyEmail,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CopyEmail>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
