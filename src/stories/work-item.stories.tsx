import { Section } from '@/components/shells/section'
import { WorkItem } from '@/components/work-item'
import { mocks } from '@/lib/mocks'
import { type Meta, type StoryObj } from '@storybook/react'

const work = mocks.works[0]!

const meta = {
  title: 'Components/Work Item',
  component: WorkItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { ...work },
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
