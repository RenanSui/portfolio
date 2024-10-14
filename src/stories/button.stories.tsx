import { Button } from '@/components/ui/button'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { StarIcon } from 'lucide-react'

const meta = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variants',
      options: ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
    },
    size: {
      control: 'select',
      description: 'Button sizes',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called whe the default button is clicked',
    },
    children: {
      description: 'Content to be displayed inside the button',
      type: 'string',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
}

export const OutlineIcon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
  },
  render: (args) => {
    return (
      <Button {...args}>
        <StarIcon className="size-4" />
      </Button>
    )
  },
}

export const GhostIcon: Story = {
  args: {
    variant: 'ghost',
    size: 'icon',
  },
  render: (args) => {
    return (
      <Button {...args}>
        <StarIcon className="size-4" />
      </Button>
    )
  },
}
