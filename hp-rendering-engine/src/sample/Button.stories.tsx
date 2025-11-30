// src/Button.stories.tsx
import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'components/Button', // 左のツリー上のパス
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'outline'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}
