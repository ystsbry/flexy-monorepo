import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Box } from './Render'
import type { Contract } from './contract'

const meta: Meta<typeof Box> = {
  title: 'layout/Box',
  component: Box,
}

export default meta

type Story = StoryObj<typeof Box>

const baseLayout: Contract.ResponsiveLayout = {
  base: {
    size: {
      width: 240,
      height: 120,
    },
    position: { top: 40, left: 40 },
  },
  sm: {
    size: {
      width: 240,
      height: 120,
    },
    position: { top: 40, left: 40 },
  },
  md: {
    size: {
      width: 260,
      height: 140,
    },
    position: { top: 60, left: 60 },
  },
  lg: {
    size: {
      width: 280,
      height: 160,
    },
    position: { top: 80, left: 80 },
  },
}

export const Default: Story = {
  args: {
    style: {
      visual: {
        opacity: 1,
        backgroundColor: '#fee2e2',
      },
      layout: baseLayout,
    },
    children: <p>DivBox content</p>,
  } satisfies Contract.Config & { children: any },
}

export const SemiTransparent: Story = {
  args: {
    style: {
      visual: {
        opacity: 0.6,
        backgroundColor: '#bfdbfe',
      },
      layout: baseLayout,
    },
    children: <p>"Semi transparent DivBox"</p>,
  } satisfies Contract.Config & { children: any },
}

export const ShiftedPosition: Story = {
  args: {
    style: {
      visual: {
        opacity: 1,
        backgroundColor: '#dcfce7',
      },
      layout: {
        ...baseLayout,
        base: {
          ...baseLayout.base,
          position: { top: 120, left: 160, right: 0, bottom: 0 },
        },
      },
    },
    children: <p>"Shifted DivBox"</p>,
  } satisfies Contract.Config & { children: any },
}
