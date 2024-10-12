import { WorkItem } from '@/components/work-item'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Work Card',
  component: WorkItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    company: 'Freelance',
    position: 'Computer Maintenance',
    date: 'Jun 2019 - Sep 2021',
  },
} satisfies Meta<typeof WorkItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
