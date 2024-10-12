import { Section } from '@/components/shells/section'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/shells/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {},
  args: {
    title: 'About',
  },
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <Section {...args}>
        <p className="text-pretty text-sm text-stone-600 dark:text-stone-400">
          Passionate about crafting seamless user experiences with attention to detail. I&apos;m always sided with
          practical solutions that are both functional and aesthetically pleasing.
        </p>
      </Section>
    )
  },
}
