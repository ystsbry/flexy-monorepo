// src/parts/Image/Render.stories.tsx （パスはプロジェクト構成に合わせてください）
import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Render } from './Render'
import type { Contract } from './contract'
import { BoxContract } from '@parts/Box'

const meta: Meta<typeof Render> = {
  title: 'layout/Image',
  component: Render,
}

export default meta

type Story = StoryObj<typeof Render>

const baseLayout: BoxContract.ResponsiveLayout = {
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
    attribute: {
      src: '/image.png',
      alt: 'Default image',
      loading: 'eager',
      decoding: 'auto',
      fetchpriority: 'auto',
      link: {
        isEnabled: false,
      },
    },
    style: {
      visual: {},
      layout: baseLayout,
    },
  } satisfies Contract.Config,
}

export const WithLink: Story = {
  args: {
    attribute: {
      src: '/image.png',
      alt: 'Linked image',
      loading: 'lazy',
      decoding: 'async',
      fetchpriority: 'high',
      link: {
        isEnabled: true,
        url: 'https://example.com',
      },
    },
    style: {
      visual: {},
      layout: baseLayout,
    },
  } satisfies Contract.Config,
}

export const LazyLoading: Story = {
  args: {
    attribute: {
      src: '/image.png',
      alt: 'Lazy loaded image',
      loading: 'lazy',
      decoding: 'async',
      fetchpriority: 'low',
      link: {
        isEnabled: false,
      },
    },
    style: {
      visual: {},
      layout: {
        ...baseLayout,
        base: {
          ...baseLayout.base,
          position: { top: 120, left: 160 },
        },
      },
    },
  } satisfies Contract.Config,
}
