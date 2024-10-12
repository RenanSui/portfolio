import { ProjectItem } from '@/components/project-item'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Project Card',
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
