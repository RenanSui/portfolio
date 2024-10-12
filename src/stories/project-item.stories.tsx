import { ProjectItem } from '@/components/project-item'
import { Section } from '@/components/shells/section'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Project Item',
  component: ProjectItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    currentLanguage: ['en', 'pt-br'],
  },
  args: {
    project: {
      url: 'https://spenso.vercel.app',
      isFavorite: true,
      name: 'Spenso',
      year: 2024,
      descriptions: [
        {
          language: 'en',
          description: 'Personal finance management tool',
        },
        {
          language: 'pt-br',
          description: 'Ferramenta de gestão de finanças pessoais',
        },
      ],
    },
    currentLanguage: 'en',
  },
} satisfies Meta<typeof ProjectItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Grouped: Story = {
  render: (args) => {
    return (
      <Section title="Projects">
        <div className="flex flex-col">
          {Array.from({ length: 2 }).map((_, index) => (
            <ProjectItem key={index} {...args} />
          ))}
          {Array.from({ length: 2 }).map((_, index) => (
            <ProjectItem key={index} {...args} project={{ ...args.project, isFavorite: false }} />
          ))}
        </div>
      </Section>
    )
  },
}
