import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { PageRender } from './PageRender'
import type { Page, PageConfig } from './PageRender'
import type { Block } from './BlockRender'
import { BoxContract } from '@parts/Box'
import { ImageContract } from '@parts/Image'

const meta: Meta<typeof PageRender> = {
  title: 'layout/Page',
  component: PageRender,
}

export default meta

type Story = StoryObj<typeof PageRender>

/**
 * ページ全体を包むレイアウト
 */
const pageLayout: BoxContract.ResponsiveLayout = {
  base: {
    size: { width: 1024, height: 768 },
    position: { top: 0, left: 0 },
  },
  sm: {
    size: { width: 1024, height: 768 },
    position: { top: 0, left: 0 },
  },
  md: {
    size: { width: 1200, height: 800 },
    position: { top: 0, left: 0 },
  },
  lg: {
    size: { width: 1440, height: 900 },
    position: { top: 0, left: 0 },
  },
}

/**
 * Block 用のレイアウト（BlockConfig / BoxConfig 共通）
 */
const blockLayout: BoxContract.ResponsiveLayout = {
  base: {
    size: { width: 320, height: 160 },
    position: { top: 40, left: 40 },
  },
  sm: {
    size: { width: 320, height: 160 },
    position: { top: 40, left: 40 },
  },
  md: {
    size: { width: 360, height: 180 },
    position: { top: 60, left: 60 },
  },
  lg: {
    size: { width: 400, height: 200 },
    position: { top: 80, left: 80 },
  },
}

/**
 * ページ全体の config
 */
const basePageConfig: PageConfig = {
  attribute: {
    type: 'main', // BoxContract 側の type union に合わせて
    link: {
      isEnabled: false,
    },
  },
  style: {
    visual: {
      opacity: 1,
      backgroundColor: '#f1f5f9',
    },
    layout: pageLayout,
  },
}

/**
 * ヘルパー: Box パーツだけを持つ Block を生成
 */
const createBoxOnlyBlock = (
  blockId: string,
  position: { top: number; left: number },
  backgroundColor: string,
): Block => ({
  id: blockId,
  config: {
    attribute: {
      type: 'section',
      link: {
        isEnabled: false,
      },
    },
    style: {
      visual: {
        opacity: 1,
        backgroundColor,
      },
      layout: {
        ...blockLayout,
        base: {
          ...blockLayout.base,
          position,
        },
      },
    },
  },
  part: [
    {
      type: 'box',
      blockId,
      id: `${blockId}-box-1`,
      config: {
        attribute: {
          type: 'div',
          link: {
            isEnabled: false,
          },
        },
        style: {
          visual: {
            opacity: 1,
            backgroundColor: '#bfdbfe',
          },
          layout: {
            ...blockLayout,
            base: {
              ...blockLayout.base,
              position: { top: position.top + 16, left: position.left + 16 },
            },
          },
        },
      } satisfies BoxContract.Config,
    },
  ],
})

/**
 * ヘルパー: Box + Image の Part を持つ Block
 */
const createBoxAndImageBlock = (
  blockId: string,
  position: { top: number; left: number },
): Block => ({
  id: blockId,
  config: {
    attribute: {
      type: 'section',
      link: {
        isEnabled: false,
      },
    },
    style: {
      visual: {
        opacity: 1,
        backgroundColor: '#e0f2fe',
      },
      layout: {
        ...blockLayout,
        base: {
          ...blockLayout.base,
          position,
        },
      },
    },
  },
  part: [
    {
      type: 'box',
      blockId,
      id: `${blockId}-box-1`,
      config: {
        attribute: {
          type: 'div',
          link: {
            isEnabled: false,
          },
        },
        style: {
          visual: {
            opacity: 0.9,
            backgroundColor: '#dcfce7',
          },
          layout: {
            ...blockLayout,
            base: {
              ...blockLayout.base,
              position: { top: position.top + 16, left: position.left + 16 },
            },
          },
        },
      } satisfies BoxContract.Config,
    },
    {
      type: 'image',
      blockId,
      id: `${blockId}-image-1`,
      config: {
        attribute: {
          src: '/image.png',
          alt: 'Image inside block',
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
            ...blockLayout,
            base: {
              ...blockLayout.base,
              position: { top: position.top + 24, left: position.left + 180 },
            },
          },
        },
      } satisfies ImageContract.Config,
    },
  ],
})

// =======================================================
// Stories
// =======================================================

// 1. 1つの Block だけを持つページ
const singleBlockPage: Page = {
  id: '00000000-0000-0000-0000-000000000001',
  config: basePageConfig,
  blocks: [createBoxOnlyBlock('block-1', { top: 80, left: 80 }, '#fee2e2')],
}

export const SingleBlock: Story = {
  args: {
    page: singleBlockPage,
  },
}

// 2. 2つの Block（上: Box Only / 下: Box + Image）を持つページ
const twoBlocksPage: Page = {
  id: '00000000-0000-0000-0000-000000000002',
  config: {
    ...basePageConfig,
    style: {
      ...basePageConfig.style,
      visual: {
        opacity: 1,
        backgroundColor: '#e5e7eb',
      },
    },
  },
  blocks: [
    createBoxOnlyBlock('block-2-1', { top: 60, left: 80 }, '#fee2e2'),
    createBoxAndImageBlock('block-2-2', { top: 260, left: 120 }),
  ],
}

export const TwoBlocks: Story = {
  args: {
    page: twoBlocksPage,
  },
}
