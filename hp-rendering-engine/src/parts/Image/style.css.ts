import { style, createVar } from '@vanilla-extract/css'
import { Contract } from './contract'
import { CssVarsFrom } from '@parts/_shared/partDefinition'

const visualCssVars: CssVarsFrom<Contract.VisualCss> = {
  width: createVar(),
  height: createVar(),
  objectFit: createVar(),
  display: createVar(),
}

export const cssVars: CssVarsFrom<Contract.Css> = {
  visual: visualCssVars,
}

export const styleRule = style({
  // Visual
  width: cssVars.visual.width,
  height: cssVars.visual.height,
  objectFit: cssVars.visual.objectFit,
  display: cssVars.visual.display,
})
