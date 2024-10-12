import { Section } from '@/components/shells/section'
import { WorkItem } from '@/components/work-item'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Work Item',
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

export const Grouped: Story = {
  render: (args) => {
    return (
      <Section title="Projects">
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <WorkItem key={index} {...args} />
          ))}
        </div>
      </Section>
    )
  },
}
