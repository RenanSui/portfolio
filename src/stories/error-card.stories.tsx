import { ErrorCard } from '@/components/error-card'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Error Card',
  component: ErrorCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist, or this website does not support the selected language.',
    retryLink: '/',
    retryLinkText: 'Go to Home',
  },
} satisfies Meta<typeof ErrorCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
