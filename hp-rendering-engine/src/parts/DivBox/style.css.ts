import { style, createVar } from '@vanilla-extract/css'
import { CssVarsFrom, mediaQuery, responsiveCssVars } from '@parts/shared/responsive'
import { Contract } from './contract'

const layoutCssVars = responsiveCssVars<Contract.Layout>({
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

const styleCssVars = {
  opacity: createVar(),
  backgroundColor: createVar(),
}

export const cssVars: CssVarsFrom<Contract.Config> = {
  style: styleCssVars,
  layout: layoutCssVars,
}

export namespace Style {
  export const divBox = style({
    // Style
    opacity: cssVars.style.opacity,
    backgroundColor: cssVars.style.backgroundColor,

    // Layout
    width: cssVars.layout.base.size.width,
    height: cssVars.layout.base.size.height,
  
    position: 'absolute',
    top: cssVars.layout.base.position.top,
    left: cssVars.layout.base.position.left,
    right: cssVars.layout.base.position.right,
    bottom: cssVars.layout.base.position.bottom,
  
    '@media': {
      [mediaQuery.sm]: {
        width: cssVars.layout.sm.size.width,
        height: cssVars.layout.sm.size.height,
  
        top: cssVars.layout.sm.position.top,
        left: cssVars.layout.sm.position.left,
        right: cssVars.layout.sm.position.right,
        bottom: cssVars.layout.sm.position.bottom,
      },
      [mediaQuery.md]: {
        width: cssVars.layout.md.size.width,
        height: cssVars.layout.md.size.height,
  
        top: cssVars.layout.md.position.top,
        left: cssVars.layout.md.position.left,
        right: cssVars.layout.md.position.right,
        bottom: cssVars.layout.md.position.bottom,
      },
      [mediaQuery.lg]: {
        width: cssVars.layout.lg.size.width,
        height: cssVars.layout.lg.size.height,
  
        top: cssVars.layout.lg.position.top,
        left: cssVars.layout.lg.position.left,
        right: cssVars.layout.lg.position.right,
        bottom: cssVars.layout.lg.position.bottom,
      },
    },
  })
}
