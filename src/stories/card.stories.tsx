import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/ui/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    className: 'w-80',
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </CardContent>
        <CardFooter>
          <p>Lorem ipsum dolor, sit</p>
        </CardFooter>
      </Card>
    )
  },
}
