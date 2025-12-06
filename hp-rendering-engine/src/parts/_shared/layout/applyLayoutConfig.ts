import { px, Styles } from '../styleConfigApplier'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Contract } from './contract'
import { ResponsiveCssVars } from '../responsive'

export type LayoutConfigApplier = (
  config: Contract.ResponsiveLayout,
  cssVars: ResponsiveCssVars<Contract.Layout>,
) => Styles

export const applyLayoutConfig: LayoutConfigApplier = (config, cssVars) => {
  const base = config.base
  const sm = config.sm
  const md = config.md
  const lg = config.lg

  return assignInlineVars({
    // base
    [cssVars.base.size.width]: px(base.size.width),
    [cssVars.base.size.height]: px(base.size.height),

    [cssVars.base.position.top]: px(base.position.top),
    [cssVars.base.position.left]: px(base.position.left),
    [cssVars.base.position.right]: px(base.position.right),
    [cssVars.base.position.bottom]: px(base.position.bottom),

    // sm
    [cssVars.sm.size.width]: px(sm?.size.width),
    [cssVars.sm.size.height]: px(sm?.size.height),

    [cssVars.sm.position.top]: px(sm?.position.top),
    [cssVars.sm.position.left]: px(sm?.position.left),
    [cssVars.sm.position.right]: px(sm?.position.right),
    [cssVars.sm.position.bottom]: px(sm?.position.bottom),

    // md
    [cssVars.md.size.width]: px(md?.size.width),
    [cssVars.md.size.height]: px(md?.size.height),

    [cssVars.md.position.top]: px(md?.position.top),
    [cssVars.md.position.left]: px(md?.position.left),
    [cssVars.md.position.right]: px(md?.position.right),
    [cssVars.md.position.bottom]: px(md?.position.bottom),

    // lg
    [cssVars.lg.size.width]: px(lg?.size.width),
    [cssVars.lg.size.height]: px(lg?.size.height),

    [cssVars.lg.position.top]: px(lg?.position.top),
    [cssVars.lg.position.left]: px(lg?.position.left),
    [cssVars.lg.position.right]: px(lg?.position.right),
    [cssVars.lg.position.bottom]: px(lg?.position.bottom),
  })
}
