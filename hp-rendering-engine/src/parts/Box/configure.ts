import { Link } from '@parts/_shared/linkContract'
import type { Contract } from './contract'

export const defaultConfig: Contract.Config = {
  attribute: {
    type: 'div',
    link: {
      isEnabled: false,
    },
  },
  style: {
    visual: {
      opacity: 1,
      backgroundColor: 'transparent',
    },
    layout: {
      base: {
        size: {
          width: 0,
          height: 0,
        },
        position: { top: 0, left: 0 },
      },
    },
  },
}

export type DefaultConfigFactoryArgs = {
  link: Link
  layout: Contract.ResponsiveLayout
}

export const ConfigFactory = (args: DefaultConfigFactoryArgs): Contract.Config => {
  return {
    attribute: {
      type: 'div',
      link: args.link,
    },
    style: {
      visual: {
        opacity: 1,
        backgroundColor: 'transparent',
      },
      layout: args.layout,
    },
  }
}
