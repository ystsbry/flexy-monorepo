import { Style } from './style.css'
import { Contract } from './contract'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { CssVars } from './style.css'
import type { StyleConfigApplier } from '@parts/shared/styleConfigApplier'
import { PartWithChildren } from '@parts/shared/partDefinition'

export const DivBox: PartWithChildren<Contract.Config> = props => {
  const { children, ...config } = props

  return (
    <div class={Style.divBox} style={applyStyleConfig(config)}>
      {children}
    </div>
  )
}

export const applyStyleConfig: StyleConfigApplier<Contract.Config> = config => {
  const base = config.layout.base
  const sm = config.layout.sm
  const md = config.layout.md
  const lg = config.layout.lg

  return assignInlineVars({
    // Style
    [CssVars.opacityVar]: String(config.style.opacity ?? 1),
    [CssVars.backgroundColorVar]: config.style.backgroundColor || 'transparent',

    // Layout
    [CssVars.widthBaseVar]: px(base.size.width),
    [CssVars.heightBaseVar]: px(base.size.height),

    [CssVars.topBaseVar]: px(base.position.top),
    [CssVars.leftBaseVar]: px(base.position.left),
    [CssVars.rightBaseVar]: px(base.position.right),
    [CssVars.bottomBaseVar]: px(base.position.bottom),

    [CssVars.widthSmVar]: px(sm?.size.width),
    [CssVars.heightSmVar]: px(sm?.size.height),

    [CssVars.topSmVar]: px(sm?.position.top),
    [CssVars.leftSmVar]: px(sm?.position.left),
    [CssVars.rightSmVar]: px(sm?.position.right),
    [CssVars.bottomSmVar]: px(sm?.position.bottom),

    [CssVars.widthMdVar]: px(md?.size.width),
    [CssVars.heightMdVar]: px(md?.size.height),

    [CssVars.topMdVar]: px(md?.position.top),
    [CssVars.leftMdVar]: px(md?.position.left),
    [CssVars.rightMdVar]: px(md?.position.right),
    [CssVars.bottomMdVar]: px(md?.position.bottom),

    [CssVars.widthLgVar]: px(lg?.size.width),
    [CssVars.heightLgVar]: px(lg?.size.height),

    [CssVars.topLgVar]: px(lg?.position.top),
    [CssVars.leftLgVar]: px(lg?.position.left),
    [CssVars.rightLgVar]: px(lg?.position.right),
    [CssVars.bottomLgVar]: px(lg?.position.bottom),
  })
}

const px = (v?: number) => (typeof v === 'number' ? `${v}px` : undefined)
