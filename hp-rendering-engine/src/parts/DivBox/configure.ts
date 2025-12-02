import type { Contract } from './contract'

export const defaultConfig: Contract.Config = {
  style: {
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
}
