import { Contract } from "./contract";

export const defaultConfig: Contract.Config = {
  attribute: {
    src: '',
    link: {
      isEnabled: false,
    },
  },
  style: {
    visual: {},
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