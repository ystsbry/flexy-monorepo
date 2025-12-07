import { style, createVar } from '@vanilla-extract/css'
import { mediaQuery, responsiveCssVars } from '@parts/shared/responsive'
import { Contract } from './contract'
import { BoxContract } from '@parts/Box'
import { CssVarsFrom } from '@parts/_shared/partDefinition'

const layoutCssVars = responsiveCssVars<BoxContract.Layout>({
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

const visualCssVars: CssVarsFrom<Contract.VisualCss> = {
  width: createVar(),
  height: createVar(),
  objectFit: createVar(),
  display: createVar(),
}

export const cssVars: CssVarsFrom<Contract.Css> = {
  visual: visualCssVars,
  layout: layoutCssVars,
}

export const styleRule = style({
  // Visual
  width: cssVars.visual.width,
  height: cssVars.visual.height,
  objectFit: cssVars.visual.objectFit,
  display: cssVars.visual.display,

  // Layout
  position: 'absolute',
  top: cssVars.layout.base.position.top,
  left: cssVars.layout.base.position.left,
  right: cssVars.layout.base.position.right,
  bottom: cssVars.layout.base.position.bottom,

  '@media': {
    [mediaQuery.sm]: {
      top: cssVars.layout.sm.position.top,
      left: cssVars.layout.sm.position.left,
      right: cssVars.layout.sm.position.right,
      bottom: cssVars.layout.sm.position.bottom,
    },
    [mediaQuery.md]: {
      top: cssVars.layout.md.position.top,
      left: cssVars.layout.md.position.left,
      right: cssVars.layout.md.position.right,
      bottom: cssVars.layout.md.position.bottom,
    },
    [mediaQuery.lg]: {
      top: cssVars.layout.lg.position.top,
      left: cssVars.layout.lg.position.left,
      right: cssVars.layout.lg.position.right,
      bottom: cssVars.layout.lg.position.bottom,
    },
  },
})
