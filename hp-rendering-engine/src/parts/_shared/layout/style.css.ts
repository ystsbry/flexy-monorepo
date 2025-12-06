import { createVar, style } from '@vanilla-extract/css'
import { Contract } from '@parts/shared/layout/contract'
import { responsiveCssVars, mediaQuery } from '@parts/shared/responsive'

export const layoutCssVars = responsiveCssVars<Contract.Layout>({
  size: {
    width: createVar(),
    height: createVar(),
  },
  position: {
    top: createVar(),
    left: createVar(),
    right: createVar(),
    bottom: createVar(),
  },
})

export const layoutStyle = style({
  width: layoutCssVars.base.size.width,
  height: layoutCssVars.base.size.height,

  position: 'absolute',
  top: layoutCssVars.base.position.top,
  left: layoutCssVars.base.position.left,
  right: layoutCssVars.base.position.right,
  bottom: layoutCssVars.base.position.bottom,

  '@media': {
    [mediaQuery.sm]: {
      width: layoutCssVars.sm.size.width,
      height: layoutCssVars.sm.size.height,

      top: layoutCssVars.sm.position.top,
      left: layoutCssVars.sm.position.left,
      right: layoutCssVars.sm.position.right,
      bottom: layoutCssVars.sm.position.bottom,
    },
    [mediaQuery.md]: {
      width: layoutCssVars.md.size.width,
      height: layoutCssVars.md.size.height,

      top: layoutCssVars.md.position.top,
      left: layoutCssVars.md.position.left,
      right: layoutCssVars.md.position.right,
      bottom: layoutCssVars.md.position.bottom,
    },
    [mediaQuery.lg]: {
      width: layoutCssVars.lg.size.width,
      height: layoutCssVars.lg.size.height,

      top: layoutCssVars.lg.position.top,
      left: layoutCssVars.lg.position.left,
      right: layoutCssVars.lg.position.right,
      bottom: layoutCssVars.lg.position.bottom,
    },
  },
})
