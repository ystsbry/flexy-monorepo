import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { BlockRender } from './BlockRender'
import type { Block, BlockConfig } from './BlockRender'
import { BoxContract } from '@parts/Box'
import { PartContract } from '@parts'
import { ImageContract } from '@parts/Image'

const meta: Meta<typeof BlockRender> = {
  title: 'layout/Block',
  component: BlockRender,
}

export default meta

type Story = StoryObj<typeof BlockRender>

/**
 * Box の stories と同じレイアウト定義
 * （実際の Box の stories の baseLayout とほぼ同じ形）
 */
const baseLayout: BoxContract.ResponsiveLayout = {
  base: {
    size: { width: 240, height: 120 },
    position: { top: 40, left: 40 },
  },
  sm: {
    size: { width: 240, height: 120 },
    position: { top: 40, left: 40 },
  },
  md: {
    size: { width: 260, height: 140 },
    position: { top: 60, left: 60 },
  },
  lg: {
    size: { width: 280, height: 160 },
    position: { top: 80, left: 80 },
  },
}

/**
 * Block 全体の config
 * BlockConfig = BoxContract.Config と同じ shape
 */
const baseBlockConfig: BlockConfig = {
  attribute: {
    type: 'div',
    link: {
      isEnabled: false,
    },
  },
  style: {
    visual: {
      opacity: 1,
      backgroundColor: '#fee2e2',
    },
    layout: baseLayout,
  },
}

// =======================================================
// 1. Box パーツだけを含む Block
// =======================================================

const boxOnlyBlockId = '00000000-0000-0000-0000-000000000001'

const boxPart: PartContract.Part = {
  type: 'box',
  blockId: boxOnlyBlockId, // 👈 必須（親 Block の id を入れておく）
  id: 'box-1', // 👈 パーツ自身の id
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
        ...baseLayout,
        base: {
          ...baseLayout.base,
          position: { top: 40, left: 40 },
        },
      },
    },
  } satisfies BoxContract.Config,
}

const boxOnlyBlock: Block = {
  id: boxOnlyBlockId,
  config: baseBlockConfig,
  part: [boxPart],
}

export const BoxOnly: Story = {
  args: {
    block: boxOnlyBlock,
  },
}

// =======================================================
// 2. Box + Image を含む Block（Image 側はざっくり）
//    ※ ImageContract.Config に合わせて調整してください
// =======================================================

const mixedBlockId = '00000000-0000-0000-0000-000000000002'

const mixedBlock: Block = {
  id: mixedBlockId,
  config: {
    ...baseBlockConfig,
    style: {
      ...baseBlockConfig.style,
      visual: {
        opacity: 1,
        backgroundColor: '#e0f2fe',
      },
    },
  },
  part: [
    {
      type: 'box',
      blockId: mixedBlockId,
      id: 'box-1',
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
            ...baseLayout,
            base: {
              ...baseLayout.base,
              position: { top: 20, left: 20 },
            },
          },
        },
      } satisfies BoxContract.Config,
    },
    {
      type: 'image',
      blockId: mixedBlockId,
      id: 'image-1',
      config: {
        attribute: {
          src: '/image.png',
          alt: 'Image in block',
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
              position: { top: 60, left: 140 },
            },
          },
        },
      } satisfies ImageContract.Config,
    },
  ],
}

export const BoxAndImage: Story = {
  args: {
    block: mixedBlock,
  },
}
